# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this is

A static, single-page HTML/CSS/JS simulation of a police records lookup system ("CONSULTA TREINO"), used for training. All data is fictitious. There is no build step, package manager, backend, or test suite — it's `index.html` + `script.js` served as static files.

## Running locally

The app fetches `dados.csv` / `base_ficticia_apex_nexo.xlsx` via `fetch()`, so opening `index.html` directly (`file://`) fails on CORS and is explicitly detected and blocked (see `carregarBase()` in script.js). Always serve over HTTP:

```bash
python3 -m http.server 8080
# then open http://localhost:8080/index.html
```

There is no lint/build/test command — verify changes by loading the page and exercising the search UI in a browser.

## Architecture

### Data loading pipeline (`carregarBase()` in script.js)

On `DOMContentLoaded`, `dados` (the in-memory array all search/detail logic reads from) is assembled in layers, each one filling gaps left by the previous:

1. **`dados.csv`** — minimal columns (`Nome, CPF, Data de Nascimento`), loaded first via `carregarRegistrosCsv()` / `mapRegistroCsvParaBase()`.
2. **`base_ficticia_apex_nexo.xlsx`** — fallback only used if the CSV yields zero rows (parsed client-side with the `xlsx` CDN library).
3. **`registrosManuais`** — records entered through the in-page "inserção manual" form, persisted to `localStorage` under `CHAVE_REGISTROS_MANUAIS` and reapplied on every load (`aplicarRegistrosManuaisNaBase`).
4. **`REGISTROS_FIXOS`** — a large hand-authored array at the top of script.js (the actual training scenario: named people, companies, vehicles). `aplicarRegistrosFixosNaBase()` merges each fixed record into a matching base record (matched by CPF or vehicle plate via `registroTemChaveDuplicada`) filling only *empty* fields (`mesclarRegistroFixoNoBase`), or appends it as a new record if no match exists.
5. **`REGISTROS_FICTICIOS_ADICIONAIS`** — 1000 programmatically generated filler records (`gerarRegistrosFicticiosAdicionais`) to pad the base out.
6. **`garantirCamposMinimosNaBase()`** — ensures every record has all keys in `CAMPOS_MINIMOS_BASE`, so downstream rendering code never has to guard against missing fields.

If loading fails partway, there's a cascading fallback (manual records only → fixed records only → hard error) — see the `catch` block in `carregarBase()`.

**Practical implication:** when asked to add/edit a person, company, or vehicle in the training data, the target is almost always an object inside `REGISTROS_FIXOS` (script.js, roughly lines 9–1157), not the CSV/XLSX files (those are the generic/minimal base layer). `envolvidos.csv` and `envolvidos_completos.csv` at the repo root are human-readable reference/tracking lists of who's in the scenario — they mirror `REGISTROS_FIXOS` but are not read by the app itself.

### Record shape

Records are flat objects keyed by field name (Portuguese, upper snake case), covering both pessoa física and pessoa jurídica in the same shape — e.g. `NOME_COMPLETO`, `CPF_FICTICIO`/`CNPJ`, `SOCIO_PF`/`SOCIO_EMPRESA`, `VEICULO_1_PLACA` through `VEICULO_4_*` (or a `VEICULOS_LISTA` array for records with more), `CHAVE_PIX`, `BOLETINS[]`, `ANTECEDENTES[]`, `ARMAS[]`. `isPessoaJuridica()`/`ehPessoaJuridica()` distinguish PF vs PJ by checking `CNPJ` normalizes to **exactly 14 digits** — a malformed CNPJ (wrong digit count) silently makes a company render with the pessoa-física detail template instead of "Dados Jurídicos". Always sanity-check digit count when editing a CNPJ.

Vehicle-owner links, socio/company links, and administrator links are stored as plain text (`SOCIO_EMPRESA: "12.345.678/0001-90 (80%); ..."`, `SOCIO_PF: "Nome - CPF 123... (90%)"`) rather than as structured references — cross-referencing between people and companies is done by substring-matching normalized CPF/CNPJ digits out of these text fields (see `pesquisar()`).

### Search (`pesquisar()`, script.js)

- Auto-detects search type (`nome`, `cpf`, `documento`/CNPJ, `placa`, `local`, `pix`) from the input, or respects the explicit type/prefix (`local:`, `pix:`, `placa:`).
- Matching is intentionally scoped by type: CPF/CNPJ (`documento`/`cpf`) searches only match a record's own document fields — they must **not** fall back to scanning unrelated free-text fields (e.g. matching because a CNPJ happens to be *mentioned* in someone else's `SOCIO_EMPRESA` string), since that pollutes results with unrelated people/companies.
- After the main match pass, name/CPF searches (`tipoBusca === "nome" || "cpf"`) get one extra expansion step: pessoa jurídica records where the matched person appears in `SOCIO_PF`/`CPF_RESPONSAVEL` are added to the results (person → their companies, one level). Document/CNPJ searches do **not** get an equivalent expansion (company → its sócios) — that direction was deliberately removed; results for a CNPJ search should be just that company (+ its own vehicles). Keep this asymmetry in mind if touched again.
- Results are split into `resultados.{pessoa, veiculo, pix, boletim, arma, antecedentes}` and rendered as tabs.

### Detail view (`abrirDetalhe()` → `gerarSecao*()` functions, script.js)

Each `gerarSecao*(pessoa)` function renders one collapsible section (Dados Pessoais/Jurídicos, Veículos, Voos, PIX, Boletins, Antecedentes, Armas). `obterVeiculosPessoa()` must enumerate all of `VEICULO_1`..`VEICULO_4` (plus `VEICULOS_LISTA` overflow, handled separately) — historically this only covered slots 1–2, so if vehicles seem to be "missing" from a detail page, check this function first.

### Photos

`FOTO_URL` on a record drives the card avatar via `obterEstiloCard()`, which tries the given path and `fotos/<name>` across several extensions (jpg/jpeg/png/webp/gif/svg) as CSS multiple-backgrounds, so the browser silently falls through to whichever file actually exists in `fotos/`.
