let dados = [];
let tempVeiculo = null;
let baseCarregada = false;
let carregandoBase = false;
let erroCarregamentoBase = "";
const CHAVE_REGISTROS_MANUAIS = "consulta_treino_registros_manuais_v1";
let registrosManuais = [];
let termosDestaqueBusca = [];
const REGISTROS_FIXOS = [
    {
        NOME_COMPLETO: "Donald Patrício Almeida",
        CPF_FICTICIO: "223.456.789-10",
        DATA_NASCIMENTO: "03/07/1988",
        DATA_ATUALIZACAO: "31/05/2024",
        ESTADO_CIVIL: "Solteiro",
        NOME_MAE: "Helena Patrício Almeida",
        NOME_PAI: "Roberto Almeida Silva",
        SITUACAO_CADASTRAL_CPF: "Regular",
        ANO_OBITO: "-",
        NATURALIDADE: "Brasília/DF",
        UF_NATURALIDADE: "DF",
        GENERO: "Masculino",
        DATA_INSCRICAO_CPF: "14/03/2006",
        ESTRANGEIRO: "Não",
        PROFISSAO: "Empresário",
        RESIDENTE_EXTERIOR: "Não",
        SOCIO_EMPRESA: "-",
        LOGRADOURO: "Kitnet 01 - Cidade Cenográfica",
        NUMERO: "",
        COMPLEMENTO: "GRUPO A",
        BAIRRO: "",
        CIDADE: "Brasília",
        UF: "DF",
        CEP: "70000-998",
        ENDERECO_2: "Kitnet 12 - Cidade Cenográfica - Brasília/DF - CEP 70000-998 (GRUPO B)",
        TELEFONE_1: "+573159460102",
        TELEFONE_1_TIPO: "Celular",
        CHAVE_PIX: "+573159460102",
        CHAVE_PIX_TIPO: "TELEFONE",
        CHAVE_PIX_STATUS: "ATIVO",
        VOOS: [
            { localizador: "ABCC81", cia: "GOL", dataDecolagem: "2025-09-29", horaDecolagem: "09:00:00", aeroportoPartida: "BSB", dataAterrissagem: "2025-09-29", horaAterrissagem: "12:15:00", aeroportoChegada: "MAO", bagagem: "Não" },
            { localizador: "XTQM47", cia: "GOL", dataDecolagem: "2025-09-30", horaDecolagem: "17:00:00", aeroportoPartida: "MAO", dataAterrissagem: "2025-09-30", horaAterrissagem: "19:00:00", aeroportoChegada: "BSB", bagagem: "Não" },
            { localizador: "DFGG22", cia: "GOL", dataDecolagem: "2025-10-22", horaDecolagem: "22:45:00", aeroportoPartida: "BSB", dataAterrissagem: "2025-10-23", horaAterrissagem: "01:45:00", aeroportoChegada: "MAO", bagagem: "Não" },
            { localizador: "RPLV58", cia: "GOL", dataDecolagem: "2025-10-24", horaDecolagem: "07:45:00", aeroportoPartida: "MAO", dataAterrissagem: "2025-10-24", horaAterrissagem: "09:45:00", aeroportoChegada: "BSB", bagagem: "Não" },
            { localizador: "HIJKK99", cia: "GOL", dataDecolagem: "2025-11-15", horaDecolagem: "19:30:00", aeroportoPartida: "BSB", dataAterrissagem: "2025-11-15", horaAterrissagem: "21:30:00", aeroportoChegada: "MAO", bagagem: "Não" },
            { localizador: "WNBZ63", cia: "GOL", dataDecolagem: "2025-11-16", horaDecolagem: "17:30:00", aeroportoPartida: "MAO", dataAterrissagem: "2025-11-16", horaAterrissagem: "20:30:00", aeroportoChegada: "BSB", bagagem: "Não" }
        ],
        RG_NUMERO: "45.667.889-3",
        RG_ORGAO_EMISSOR: "SSP/SP",
        VEICULO_1_PLACA: "FUT7F31",
        VEICULO_1_MARCA: "Jeep",
        VEICULO_1_MODELO: "Compass LONG TF",
        VEICULO_1_ANO: "2024",
        VEICULO_1_ANO_FABRICACAO: "2024",
        VEICULO_1_COR: "Preto",
        VEICULO_1_RENAVAM_FICTICIO: "01270308049",
        VEICULO_1_TIPO_PESSOA: "detentor; proprietario",
        BASE_FICTICIA: "Base Interna - Consulta Pessoa Fisica (Simulacao)",
        BASE_FICTICIA_PESSOA: "Base Interna - Consulta Pessoa Fisica (Simulacao)",
        BASE_FICTICIA_VEICULO: "Base Interna - Consulta Veiculo (Simulacao)",
        ORIGEM_REGISTRO: "FIXO"
    },
    {
        NOME_COMPLETO: "Hortênsio Paulo Pateta da Silva",
        CPF_FICTICIO: "611.229.884-12",
        DATA_NASCIMENTO: "11/04/1981",
        DATA_ATUALIZACAO: "17/04/2025",
        ESTADO_CIVIL: "Casado (fictício)",
        NOME_MAE: "Gertrudes Pateta da Silva (fictício)",
        NOME_PAI: "Mauro Pateta da Silva (fictício)",
        SITUACAO_CADASTRAL_CPF: "Regular",
        ANO_OBITO: "-",
        NATURALIDADE: "Brasília",
        UF_NATURALIDADE: "DF",
        GENERO: "Masculino",
        DATA_INSCRICAO_CPF: "10/10/1997 (fictício)",
        ESTRANGEIRO: "Não",
        PROFISSAO: "Motorista de aplicativo",
        INVESTIGACOES: "Nenhum registro",
        RESIDENTE_EXTERIOR: "Não",
        SOCIO_EMPRESA: "00.123.456/0001-99",
        LOGRADOURO: "",
        NUMERO: "",
        COMPLEMENTO: "",
        BAIRRO: "",
        CEP: "",
        ENDERECO_2: "",
        TELEFONE_1: "(61) 99887-7441",
        TELEFONE_1_TIPO: "Celular",
        RG_NUMERO: "88.219.944-4",
        RG_ORGAO_EMISSOR: "SSP/DF",
        CHAVE_PIX: "+5561998877441",
        CHAVE_PIX_TIPO: "TELEFONE",
        CHAVE_PIX_STATUS: "ATIVO",
        CIDADE: "Brasília",
        UF: "DF",
        VEICULO_1_PLACA: "XYZ9A11",
        VEICULO_1_MARCA: "Porsche",
        VEICULO_1_MODELO: "Carrera 911",
        VEICULO_1_ANO: "2025",
        VEICULO_1_ANO_FABRICACAO: "2025",
        VEICULO_1_COR: "Preto",
        VEICULO_1_RENAVAM_FICTICIO: "98765432100",
        VEICULO_1_TIPO_PESSOA: "detentor; proprietário",
        VOOS: [],
        BOLETINS: [
            {
                ORGAO: "Policia Militar - Academia Nacional de Policia (DIREN/ANP)",
                CIDADE_UNIDADE: "Cidade Cenografica - ANP",
                DATA: "01/05/2024",
                HORARIO: "14h35min",
                LOCAL: "Agencia Bancaria - Setor Central, Cidade Cenografica/ANP",
                NATUREZA: "Dano ao Patrimonio / Desobediencia / Resistencia",
                HISTORICO: "A equipe da Policia Militar da ACADEMIA NACIONAL DE POLICIA (DIREN/ANP), durante patrulhamento ostensivo na Cidade Cenografica, foi acionada para verificar possivel dano ao patrimonio na estrutura do Banco localizado no Setor Central. Ao chegar ao local, os policiais visualizaram o individuo posteriormente identificado como Hortensio Paulo Pateta da Silva, CPF: 611.229.884-12, Data de Nascimento: 11/04/1981, em situacao de rua, visivelmente alterado e apresentando sinais compativeis com uso recente de substancias entorpecentes. O nacional encontrava-se danificando a fachada e parte da estrutura externa do estabelecimento bancario, utilizando forca fisica e objetos encontrados no entorno. Diante da situacao, a guarnicao procedeu a abordagem policial, momento em que o individuo passou a demonstrar comportamento agressivo, recusando-se a acatar as ordens legais emanadas pelos policiais. O nacional investiu contra a equipe, sendo necessario o uso proporcional e moderado da forca para conte-lo, garantindo a seguranca dos envolvidos e de terceiros. Apos contido, o individuo foi conduzido ao ponto de triagem e, posteriormente, a Delegacia de Policia Civil da ANP, para os procedimentos cabiveis dentro da simulacao."
            }
        ],
        FOTO_URL: "fotos/hortensio-rosto.png",
        BASE_FICTICIA: "Base Interna - Consulta Pessoa Física (Simulação)",
        BASE_FICTICIA_PESSOA: "Base Interna - Consulta Pessoa Física (Simulação)",
        BASE_FICTICIA_VEICULO: "Base Interna - Consulta Veiculo (Simulacao)",
        ORIGEM_REGISTRO: "FIXO"
    },
    {
        NOME_COMPLETO: "José Alfredo Contes",
        NOME_FANTASIA: "José Alfredo Contes",
        CPF_FICTICIO: "088.991.224-33",
        CPF_CNPJ: "088.991.224-33",
        DOCUMENTO: "088.991.224-33",
        LOGRADOURO: "Kitnet 06 - Cidade Cenografica",
        NUMERO: "",
        COMPLEMENTO: "GRUPO A",
        CIDADE: "Brasilia",
        UF: "DF",
        CEP: "70000-998",
        ENDERECO_2: "Kitnet 10 - Cidade Cenografica - Brasilia/DF - CEP 70000-998 (GRUPO B)",
        TELEFONE_1: "(61) 3225-7744",
        EMAIL_1: "jose.alfredo.contes@email.com",
        INVESTIGACOES: "Nenhum registro",
        DATA_ATUALIZACAO: "15/06/2019",
        BASE_FICTICIA: "Base Interna - Consulta Pessoa Fisica (Simulacao)",
        BASE_FICTICIA_PESSOA: "Base Interna - Consulta Pessoa Fisica (Simulacao)",
        BASE_FICTICIA_VEICULO: "",
        ORIGEM_REGISTRO: "FIXO"
    },
    {
        NOME_COMPLETO: "Zé das Contas Contabilidade Ltda.",
        NOME_FANTASIA: "Zé das Contas",
        TAGS: "BDRECEITACNPJ_RECEITACNPJ",
        CNPJ: "98.765.432/0001-55",
        CPF_CNPJ: "98.765.432/0001-55",
        DOCUMENTO: "98.765.432/0001-55",
        MATRIZ_FILIAL: "MATRIZ",
        PJ_RAZAO_SOCIAL: "Zé das Contas Contabilidade Ltda.",
        ADMINISTRADOR_RESPONSAVEL: "José Alfredo Contes",
        CPF_RESPONSAVEL: "088.991.224-33",
        RG_RESPONSAVEL: "11223344-5 SSP/DF",
        LOGRADOURO: "Kitnet 06 – Cidade Cenográfica – Brasília/DF – CEP 70000-998 (GRUPO A)",
        NUMERO: "",
        COMPLEMENTO: "",
        CIDADE: "",
        UF: "",
        CEP: "",
        ENDERECO_2: "Kitnet 10 – Cidade Cenográfica – Brasília/DF – CEP 70000-998 (GRUPO B)",
        TELEFONE_1: "(61) 3225-7744",
        EMAIL_1: "atendimento@zedascontascontabilidade.com.br",
        SITUACAO_CADASTRAL: "ATIVA",
        DATA_SITUACAO_CADASTRAL: "15/06/2019",
        NATUREZA_JURIDICA: "206-2 - Sociedade Empresaria Limitada",
        DATA_INICIO_ATIVIDADE: "15/06/2019",
        PORTE_EMPRESA: "ME - Microempresa",
        NIRE: "98765432100",
        CAPITAL_SOCIAL: "R$ 80.000,00",
        CNAE_PRINCIPAL: "6920-6/01 - Serviços de Contabilidade",
        CNAE_SECUNDARIO_1: "7020-4/00 - Atividades de consultoria em gestão",
        CNAE_SECUNDARIO_2: "8211-3/00 - Serviços combinados de escritório",
        SOCIO_PJ: "-",
        SOCIO_PF: "José Alfredo Contes - CPF 088.991.224-33",
        SOCIO_EXT: "-",
        BASE_FICTICIA: "BDRECEITACNPJ_RECEITACNPJ",
        BASE_FICTICIA_PESSOA: "Base Interna - Consulta Pessoa Juridica (Simulacao)",
        BASE_FICTICIA_VEICULO: "",
        ORIGEM_REGISTRO: "FIXO"
    },
    {
        NOME_COMPLETO: "Pateta Transportes",
        NOME_FANTASIA: "Pateta Transportes",
        TAGS: "BDRECEITACNPJ_RECEITACNPJ",
        CNPJ: "00.123.456/0001-99",
        CPF_CNPJ: "00.123.456/0001-99",
        DOCUMENTO: "00.123.456/0001-99",
        MATRIZ_FILIAL: "MATRIZ",
        PJ_RAZAO_SOCIAL: "Pateta Transportes Ltda.",
        ADMINISTRADOR_RESPONSAVEL: "Hortênsio Paulo Pateta da Silva",
        CPF_RESPONSAVEL: "611.229.884-12",
        RG_RESPONSAVEL: "8821994-4 SSP/DF",
        LOGRADOURO: "Kitnet 01 - Cidade Cenográfica",
        NUMERO: "",
        COMPLEMENTO: "GRUPO A",
        CIDADE: "Brasília",
        UF: "DF",
        CEP: "70000-998",
        ENDERECO_2: "Kitnet 12 – Cidade Cenográfica – Brasília/DF – CEP 70000-998 (GRUPO B)",
        TELEFONE_1: "(61) 3998-2214",
        EMAIL_1: "contato@patetatransportes.com.br",
        SITUACAO_CADASTRAL: "ATIVA",
        DATA_SITUACAO_CADASTRAL: "12/03/2018",
        NATUREZA_JURIDICA: "206-2 - Sociedade Empresaria Limitada",
        DATA_INICIO_ATIVIDADE: "12/03/2018",
        PORTE_EMPRESA: "ME - Microempresa",
        NIRE: "53299817210",
        CAPITAL_SOCIAL: "R$ 150.000,00",
        CNAE_PRINCIPAL: "4930-2/02 - Transporte Rodoviario de Cargas",
        SOCIO_PJ: "-",
        SOCIO_PF: "Hortênsio Paulo Pateta da Silva - CPF 611.229.884-12",
        SOCIO_EXT: "-",
        CONTADOR: "José Alfredo Contes",
        CPF_CONTADOR: "088.991.224-33",
        TELEFONE_CONTADOR: "4591313927",
        CHAVE_PIX: "00.123.456/0001-99",
        CHAVE_PIX_TIPO: "CNPJ",
        CHAVE_PIX_STATUS: "ATIVO",
        DATA_ATUALIZACAO: "12/03/2018",
        BASE_FICTICIA: "BDRECEITACNPJ_RECEITACNPJ",
        BASE_FICTICIA_PESSOA: "Base Interna - Consulta Pessoa Juridica (Simulacao)",
        BASE_FICTICIA_VEICULO: "",
        ORIGEM_REGISTRO: "FIXO"
    },
    {
        NOME_COMPLETO: "LG CELULARES",
        NOME_FANTASIA: "LG CELULARES",
        TAGS: "BDRECEITACNPJ_RECEITACNPJ",
        CNPJ: "77.890.123/0001-44",
        CPF_CNPJ: "77.890.123/0001-44",
        DOCUMENTO: "77.890.123/0001-44",
        MATRIZ_FILIAL: "MATRIZ",
        PJ_RAZAO_SOCIAL: "LG Celulares Comércio e Serviços Ltda.",
        ADMINISTRADOR_RESPONSAVEL: "Elias Gênova Esteves",
        CPF_RESPONSAVEL: "091.442.835-10",
        RG_RESPONSAVEL: "55667788-9 SSP/AM (fictício)",
        LOGRADOURO: "Rua das Castanheiras",
        NUMERO: "210",
        COMPLEMENTO: "",
        BAIRRO: "Centro",
        CIDADE: "Humaitá",
        UF: "AM",
        CEP: "69800-450",
        TELEFONE_1: "(92) 3344-5566 (ficticio)",
        EMAIL_1: "contato@lgcelulares.com.br (ficticio)",
        SITUACAO_CADASTRAL: "ATIVA",
        DATA_SITUACAO_CADASTRAL: "05/09/2021",
        NATUREZA_JURIDICA: "206-2 - Sociedade Empresaria Limitada",
        DATA_INICIO_ATIVIDADE: "05/09/2021",
        PORTE_EMPRESA: "ME - Microempresa",
        NIRE: "12345678901 (ficticio)",
        CAPITAL_SOCIAL: "R$ 80.000,00",
        CNAE_PRINCIPAL: "4742-3/00 - Comercio Varejista de Aparelhos de Telefonia",
        SOCIO_PJ: "-",
        SOCIO_PF: "Elias Genova Esteves - CPF 091.442.835-10",
        SOCIO_EXT: "-",
        CHAVE_PIX: "77.890.123/0001-44",
        CHAVE_PIX_TIPO: "CNPJ",
        CHAVE_PIX_STATUS: "ATIVO",
        DATA_ATUALIZACAO: "05/09/2021",
        BASE_FICTICIA: "BDRECEITACNPJ_RECEITACNPJ",
        BASE_FICTICIA_PESSOA: "Base Interna - Consulta Pessoa Juridica (Simulacao)",
        BASE_FICTICIA_VEICULO: "",
        ORIGEM_REGISTRO: "FIXO"
    },
    {
        NOME_COMPLETO: "João Jerônimo Silva",
        CPF_FICTICIO: "012.345.678-90",
        DATA_NASCIMENTO: "14/02/1994",
        ESTADO_CIVIL: "Solteiro",
        NOME_MAE: "Helena Maria Silva",
        NOME_PAI: "José Roberto Silva",
        SITUACAO_CADASTRAL_CPF: "Regular",
        ANO_OBITO: "-",
        NATURALIDADE: "Aparecida de Goiânia",
        UF_NATURALIDADE: "GO",
        GENERO: "Masculino",
        DATA_INSCRICAO_CPF: "22/04/2010",
        ESTRANGEIRO: "Não",
        PROFISSAO: "Entregador autônomo",
        INVESTIGACOES: "Nenhum registro",
        RESIDENTE_EXTERIOR: "Não",
        SOCIO_EMPRESA: "-",
        LOGRADOURO: "Kitnet 05 - Cidade Cenográfica",
        NUMERO: "",
        COMPLEMENTO: "GRUPO A",
        BAIRRO: "",
        CIDADE: "Brasília",
        UF: "DF",
        CEP: "70000-998",
        ENDERECO_2: "Kitnet 09 - Cidade Cenográfica - Brasília/DF - CEP 70000-998 (GRUPO B)",
        TELEFONE_1: "+380665297785",
        RG_NUMERO: "1.234.567-8",
        RG_ORGAO_EMISSOR: "SSP/GO",
        CHAVE_PIX: "+380665297785",
        CHAVE_PIX_TIPO: "TELEFONE",
        CHAVE_PIX_STATUS: "ATIVO",
        DATA_ATUALIZACAO: "23/03/2026",
        BASE_FICTICIA: "Base Interna - Consulta Pessoa Física (Simulação)",
        BASE_FICTICIA_PESSOA: "Base Interna - Consulta Pessoa Física (Simulação)",
        BASE_FICTICIA_VEICULO: "",
        ORIGEM_REGISTRO: "FIXO",
        ARMAS: [
            {
                especie: "Pistola",
                numeroSINARM: "201400849888887",
                registro: "0024578910",
                marca: "Glock Gmbh Áustria",
                modelo: "G17",
                calibre: "9 Mm",
                serie: "XZU376",
                tipoAcabamento: "Outros",
                capacidadeTiro: "17",
                comprimentoCano: "-",
                quantidadeCanos: "1",
                tipoAlma: "Raiada",
                quantidadeRaias: "6",
                sentidoRaia: "Direita",
                paisFabricacao: "Áustria",
                tipoFuncionamento: "Semi Automatico",
                ativo: "ATIVO"
            }
        ]
    },
    {
        NOME_COMPLETO: "José Alfredo Contes",
        CPF_FICTICIO: "088.991.224-33",
        DATA_NASCIMENTO: "22/06/1984 (fictício)",
        ESTADO_CIVIL: "Casado (fictício)",
        NOME_MAE: "Marinalva Contes (fictício)",
        NOME_PAI: "Alfredo Borges Contes (fictício)",
        SITUACAO_CADASTRAL_CPF: "Regular",
        ANO_OBITO: "-",
        NATURALIDADE: "Taguatinga",
        UF_NATURALIDADE: "DF",
        GENERO: "Masculino",
        DATA_INSCRICAO_CPF: "11/09/2002",
        ESTRANGEIRO: "Não",
        PROFISSAO: "Contador",
        INVESTIGACOES: "Nenhum registro",
        RESIDENTE_EXTERIOR: "Não",
        SOCIO_EMPRESA: "41.778.992/0001-55",
        LOGRADOURO: "Kitnet 06 - Cidade Cenográfica",
        NUMERO: "",
        COMPLEMENTO: "GRUPO A",
        BAIRRO: "",
        CIDADE: "Brasília",
        UF: "DF",
        CEP: "70000-998",
        ENDERECO_2: "Kitnet 10 - Cidade Cenográfica - Brasília/DF - CEP 70000-998 (GRUPO B)",
        TELEFONE_1: "(45) 99131-3927",
        RG_NUMERO: "55.112.448-7",
        RG_ORGAO_EMISSOR: "SSP/DF (fictício)",
        CHAVE_PIX: "+4591313927",
        CHAVE_PIX_TIPO: "TELEFONE",
        CHAVE_PIX_STATUS: "ATIVO",
        VOOS: [
            { localizador: "JAC551", cia: "GOL", dataDecolagem: "2025-06-14", horaDecolagem: "13:00:00", aeroportoPartida: "BSB", dataAterrissagem: "2025-06-14", horaAterrissagem: "15:05:00", aeroportoChegada: "GRU", bagagem: "23 kg" },
            { localizador: "JAC551", cia: "GOL", dataDecolagem: "2025-06-16", horaDecolagem: "09:40:00", aeroportoPartida: "GRU", dataAterrissagem: "2025-06-16", horaAterrissagem: "11:35:00", aeroportoChegada: "BSB", bagagem: "23 kg" }
        ],
        BOLETINS: [
            {
                ORGAO: "Policia Militar - 2o BPM",
                CIDADE_UNIDADE: "Taguatinga/DF",
                DATA: "18/01/2025",
                HORARIO: "21h30min",
                LOCAL: "QNA 12 - Taguatinga/DF",
                NATUREZA: "Apoio para averiguacao de perturbacao do sossego",
                HISTORICO: "A guarnicao foi acionada para averiguar reclamacao de ruido elevado em residencia. No local, as partes foram orientadas e houve encerramento voluntario da atividade, sem necessidade de conducao a delegacia."
            }
        ],
        DATA_ATUALIZACAO: "23/03/2026",
        BASE_FICTICIA: "Base Interna - Consulta Pessoa Fisica (Simulacao)",
        BASE_FICTICIA_PESSOA: "Base Interna - Consulta Pessoa Fisica (Simulacao)",
        BASE_FICTICIA_VEICULO: "",
        ORIGEM_REGISTRO: "FIXO"
    },
    {
        NOME_COMPLETO: "Elias Gênova Esteves",
        CPF_FICTICIO: "091.442.835-10",
        DATA_NASCIMENTO: "19/02/1999",
        ESTADO_CIVIL: "Solteiro",
        NOME_MAE: "Helena Gênova Esteves",
        NOME_PAI: "Roberto Esteves da Silva",
        SITUACAO_CADASTRAL_CPF: "Regular",
        ANO_OBITO: "-",
        NATURALIDADE: "Humaitá",
        UF_NATURALIDADE: "AM",
        GENERO: "Masculino",
        DATA_INSCRICAO_CPF: "19/02/2009",
        ESTRANGEIRO: "Não",
        PROFISSAO: "Comerciante",
        INVESTIGACOES: "Nenhum registro",
        RESIDENTE_EXTERIOR: "Não",
        SOCIO_EMPRESA: "77.890.123/0001-44",
        LOGRADOURO: "Rua Rio Madeira",
        NUMERO: "118",
        COMPLEMENTO: "",
        BAIRRO: "Centro",
        CIDADE: "Humaitá",
        UF: "AM",
        CEP: "69800-120",
        TELEFONE_1: "11963300449",
        RG_NUMERO: "27.445.889-2",
        RG_ORGAO_EMISSOR: "SSP/AM",
        CHAVE_PIX: "+5511963300449",
        CHAVE_PIX_TIPO: "TELEFONE",
        CHAVE_PIX_STATUS: "ATIVO",
        VOOS: [
            { localizador: "TTTT81", cia: "GOL", dataDecolagem: "2025-10-03", horaDecolagem: "15:15:00", aeroportoPartida: "MAO", dataAterrissagem: "2025-10-03", horaAterrissagem: "18:15:00", aeroportoChegada: "BSB", bagagem: "25 kg" },
            { localizador: "TTTT81", cia: "GOL", dataDecolagem: "2025-10-05", horaDecolagem: "17:00:00", aeroportoPartida: "BSB", dataAterrissagem: "2025-10-05", horaAterrissagem: "19:00:00", aeroportoChegada: "MAO", bagagem: "Não" },
            { localizador: "7XCMF2", cia: "GOL", dataDecolagem: "2025-10-10", horaDecolagem: "22:45:00", aeroportoPartida: "MAO", dataAterrissagem: "2025-10-11", horaAterrissagem: "01:45:00", aeroportoChegada: "BSB", bagagem: "25 kg" },
            { localizador: "7XCMF2", cia: "GOL", dataDecolagem: "2025-10-12", horaDecolagem: "07:45:00", aeroportoPartida: "BSB", dataAterrissagem: "2025-10-12", horaAterrissagem: "09:45:00", aeroportoChegada: "MAO", bagagem: "Não" },
            { localizador: "XO40RJ", cia: "GOL", dataDecolagem: "2025-10-17", horaDecolagem: "19:30:00", aeroportoPartida: "MAO", dataAterrissagem: "2025-10-17", horaAterrissagem: "21:30:00", aeroportoChegada: "BSB", bagagem: "25 kg" },
            { localizador: "XO40RJ", cia: "GOL", dataDecolagem: "2025-10-19", horaDecolagem: "17:30:00", aeroportoPartida: "BSB", dataAterrissagem: "2025-10-19", horaAterrissagem: "20:30:00", aeroportoChegada: "MAO", bagagem: "Não" },
            { localizador: "UOGPJ7", cia: "GOL", dataDecolagem: "2025-11-25", horaDecolagem: "07:45:00", aeroportoPartida: "MAO", dataAterrissagem: "2025-11-25", horaAterrissagem: "09:45:00", aeroportoChegada: "BSB", bagagem: "25 kg" },
            { localizador: "UOGPJ7", cia: "GOL", dataDecolagem: "2025-11-25", horaDecolagem: "16:30:00", aeroportoPartida: "BSB", dataAterrissagem: "2025-11-25", horaAterrissagem: "19:30:00", aeroportoChegada: "MAO", bagagem: "" }
        ],
        DATA_ATUALIZACAO: "23/03/2026",
        BASE_FICTICIA: "Base Interna - Consulta Pessoa Física (Simulação)",
        BASE_FICTICIA_PESSOA: "Base Interna - Consulta Pessoa Física (Simulação)",
        BASE_FICTICIA_VEICULO: "",
        ORIGEM_REGISTRO: "FIXO"
    },
    {
        NOME_COMPLETO: "Donald Juvencio Albuquerque",
        CPF_FICTICIO: "734.218.560-03",
        DATA_NASCIMENTO: "28/09/1991",
        DATA_ATUALIZACAO: "23/03/2026",
        ESTADO_CIVIL: "Casado",
        NOME_MAE: "Marta Juvencio Albuquerque",
        NOME_PAI: "Carlos Alberto Albuquerque",
        SITUACAO_CADASTRAL_CPF: "Regular",
        ANO_OBITO: "-",
        NATURALIDADE: "Recife",
        UF_NATURALIDADE: "PE",
        GENERO: "Masculino",
        DATA_INSCRICAO_CPF: "14/05/2011",
        ESTRANGEIRO: "Não",
        PROFISSAO: "Analista de logistica",
        RESIDENTE_EXTERIOR: "Não",
        SOCIO_EMPRESA: "-",
        LOGRADOURO: "Rua das Acacias",
        NUMERO: "245",
        COMPLEMENTO: "Apto 302",
        BAIRRO: "Jardim Europa",
        CIDADE: "Brasilia",
        UF: "DF",
        CEP: "70640-112",
        ENDERECO_2: "SMPW Quadra 12 Conjunto 3 - Park Way - Brasilia/DF - CEP 71735-120",
        TELEFONE_1: "(61) 99881-4420",
        TELEFONE_1_TIPO: "Celular",
        TELEFONE_2: "(61) 3344-2188",
        TELEFONE_2_TIPO: "Residencial",
        EMAIL_1: "donald.j.albuquerque@exemplo.com",
        RG_NUMERO: "31.774.992-1",
        RG_ORGAO_EMISSOR: "SSP/DF",
        CHAVE_PIX: "donald.j.albuquerque@exemplo.com",
        CHAVE_PIX_TIPO: "EMAIL",
        CHAVE_PIX_STATUS: "ATIVO",
        VEICULO_1_PLACA: "DJA4B27",
        VEICULO_1_MARCA: "Toyota",
        VEICULO_1_MODELO: "Corolla XEi",
        VEICULO_1_ANO: "2023",
        VEICULO_1_ANO_FABRICACAO: "2022",
        VEICULO_1_COR: "Prata",
        VEICULO_1_RENAVAM_FICTICIO: "01928374655",
        VEICULO_1_TIPO_PESSOA: "proprietario",
        VEICULO_2_PLACA: "QWE1D23",
        VEICULO_2_MARCA: "Honda",
        VEICULO_2_MODELO: "CG 160 Titan",
        VEICULO_2_ANO: "2021",
        VEICULO_2_ANO_FABRICACAO: "2021",
        VEICULO_2_COR: "Vermelho",
        VEICULO_2_RENAVAM_FICTICIO: "01011213141",
        VEICULO_2_TIPO_PESSOA: "detentor",
        VOOS: [
            { localizador: "DJA310", cia: "LATAM", dataDecolagem: "2025-04-12", horaDecolagem: "06:45:00", aeroportoPartida: "BSB", dataAterrissagem: "2025-04-12", horaAterrissagem: "09:35:00", aeroportoChegada: "REC", bagagem: "23 kg" },
            { localizador: "DJA310", cia: "LATAM", dataDecolagem: "2025-04-15", horaDecolagem: "20:10:00", aeroportoPartida: "REC", dataAterrissagem: "2025-04-15", horaAterrissagem: "22:50:00", aeroportoChegada: "BSB", bagagem: "23 kg" },
            { localizador: "PRK778", cia: "GOL", dataDecolagem: "2025-09-03", horaDecolagem: "13:20:00", aeroportoPartida: "BSB", dataAterrissagem: "2025-09-03", horaAterrissagem: "15:05:00", aeroportoChegada: "CNF", bagagem: "10 kg" }
        ],
        BOLETINS: [
            {
                ORGAO: "Delegacia Eletronica - PCDF",
                CIDADE_UNIDADE: "Brasilia/DF",
                DATA: "07/02/2026",
                HORARIO: "11h40min",
                LOCAL: "Asa Sul - Brasilia/DF",
                NATUREZA: "Perda de documento",
                HISTORICO: "Comunicante registrou perda de carteira com documentos pessoais durante deslocamento de trabalho. Sem indicios de furto e sem suspeitos identificados. Registro para resguardo de direitos."
            }
        ],
        BASE_FICTICIA: "Base Interna - Consulta Pessoa Fisica (Simulacao)",
        BASE_FICTICIA_PESSOA: "Base Interna - Consulta Pessoa Fisica (Simulacao)",
        BASE_FICTICIA_VEICULO: "Base Interna - Consulta Veiculo (Simulacao)",
        ORIGEM_REGISTRO: "FIXO"
    },
    {
        NOME_COMPLETO: "Arnaldo Pereira da Mata",
        CPF_FICTICIO: "123.456.789-00",
        DATA_NASCIMENTO: "10/11/1982",
        NOME_MAE: "Vaneza da Mata",
        NATURALIDADE: "Maués",
        UF_NATURALIDADE: "AM",
        SITUACAO_CADASTRAL_CPF: "Regular",
        ANO_OBITO: "-",
        GENERO: "Masculino",
        ESTRANGEIRO: "Não",
        RESIDENTE_EXTERIOR: "Não",
        SOCIO_EMPRESA: "98.765.432/0001-11",
        BASE_FICTICIA: "Base Interna - Consulta Pessoa Fisica (Simulacao)",
        BASE_FICTICIA_PESSOA: "Base Interna - Consulta Pessoa Fisica (Simulacao)",
        BASE_FICTICIA_VEICULO: "",
        ORIGEM_REGISTRO: "FIXO"
    },
    {
        NOME_COMPLETO: "SERRARIA MADEIREIRA SÃO JORGE LTDA",
        NOME_FANTASIA: "SERRARIA MADEIREIRA SÃO JORGE LTDA",
        TAGS: "BDRECEITACNPJ_RECEITACNPJ",
        CNPJ: "98.765.432/0001-11",
        CPF_CNPJ: "98.765.432/0001-11",
        DOCUMENTO: "98.765.432/0001-11",
        MATRIZ_FILIAL: "MATRIZ",
        PJ_RAZAO_SOCIAL: "SERRARIA MADEIREIRA SÃO JORGE LTDA",
        ADMINISTRADOR_RESPONSAVEL: "Arnaldo Pereira da Mata",
        CPF_RESPONSAVEL: "123.456.789-00",
        LOGRADOURO: "Estrada Vicinal do Guamá, km 10",
        NUMERO: "",
        COMPLEMENTO: "Zona Rural",
        BAIRRO: "Zona Rural",
        CIDADE: "Altamira",
        UF: "PA",
        CEP: "",
        SITUACAO_CADASTRAL: "ATIVA",
        CAPITAL_SOCIAL: "R$ 50.000,00",
        SOCIO_PJ: "-",
        SOCIO_PF: "Arnaldo Pereira da Mata - CPF 123.456.789-00",
        SOCIO_EXT: "-",
        BASE_FICTICIA: "BDRECEITACNPJ_RECEITACNPJ",
        BASE_FICTICIA_PESSOA: "Base Interna - Consulta Pessoa Juridica (Simulacao)",
        BASE_FICTICIA_VEICULO: "",
        ORIGEM_REGISTRO: "FIXO"
    },
    {
        NOME_COMPLETO: "Carlão Osborn",
        CPF_FICTICIO: "789.012.345-67",
        RG_NUMERO: "12.345.678-9",
        RG_ORGAO_EMISSOR: "SSP/SP",
        DATA_NASCIMENTO: "15/05/1985",
        NATURALIDADE: "São Paulo",
        UF_NATURALIDADE: "SP",
        NOME_MAE: "Sharon Costa Osborn",
        NOME_PAI: "Ozzy Ferreira Osborn",
        SITUACAO_CADASTRAL_CPF: "Regular",
        ANO_OBITO: "-",
        GENERO: "Masculino",
        ESTRANGEIRO: "Não",
        RESIDENTE_EXTERIOR: "Não",
        ENDERECOS: [
            "(Equipe Vermelha) Kit 03, Cidade Cenográfica/ANP",
            "(Equipe Azul Clara) Kit 02, Cidade Cenográfica/ANP",
            "(Equipe Verde) Kit 11, Cidade Cenográfica/ANP",
            "(Equipe Amarela) Kit 10, Cidade Cenográfica/ANP",
            "(Equipe Azul Escuro) Kit 13, Cidade Cenográfica/ANP"
        ],
        VEICULOS_LISTA: [
            "(Equipe Vermelha) VEM0A01 - particular",
            "(Equipe Azul Clara) AZC0A02 - particular",
            "(Equipe Verde) VER0A03 - particular",
            "(Equipe Amarela) AMA0A04 - particular",
            "(Equipe Azul Escuro) AZE0A05 - particular"
        ],
        BASE_FICTICIA: "Base Interna - Consulta Pessoa Fisica (Simulacao)",
        BASE_FICTICIA_PESSOA: "Base Interna - Consulta Pessoa Fisica (Simulacao)",
        BASE_FICTICIA_VEICULO: "Base Interna - Consulta Veiculo (Simulacao)",
        ORIGEM_REGISTRO: "FIXO"
    },
    {
        NOME_COMPLETO: "Rocha Balboa",
        CPF_FICTICIO: "012.345.678-00",
        RG_NUMERO: "23.456.789-0",
        RG_ORGAO_EMISSOR: "SSP/RJ",
        DATA_NASCIMENTO: "06/12/1976",
        NATURALIDADE: "Rio de Janeiro",
        UF_NATURALIDADE: "RJ",
        NOME_MAE: "Adriana Silva Balboa",
        NOME_PAI: "Apollo Diniz Balboa",
        SITUACAO_CADASTRAL_CPF: "Regular",
        ANO_OBITO: "-",
        GENERO: "Masculino",
        ESTRANGEIRO: "Não",
        RESIDENTE_EXTERIOR: "Não",
        LOGRADOURO: "Travessa do Campeão",
        NUMERO: "321",
        COMPLEMENTO: "Bloco B",
        BAIRRO: "Rocinha",
        CIDADE: "Rio de Janeiro",
        UF: "RJ",
        BASE_FICTICIA: "Base Interna - Consulta Pessoa Fisica (Simulacao)",
        BASE_FICTICIA_PESSOA: "Base Interna - Consulta Pessoa Fisica (Simulacao)",
        BASE_FICTICIA_VEICULO: "",
        ORIGEM_REGISTRO: "FIXO"
    },
    {
        NOME_COMPLETO: "Alfred Tostão",
        CPF_FICTICIO: "123.456.789-01",
        RG_NUMERO: "34.567.890-1",
        RG_ORGAO_EMISSOR: "SSP/MG",
        DATA_NASCIMENTO: "24/07/1960",
        NATURALIDADE: "Belo Horizonte",
        UF_NATURALIDADE: "MG",
        NOME_MAE: "Martha Alencar Tostão",
        NOME_PAI: "Butler Peninha Tostão",
        SITUACAO_CADASTRAL_CPF: "Regular",
        ANO_OBITO: "-",
        GENERO: "Masculino",
        ESTRANGEIRO: "Não",
        RESIDENTE_EXTERIOR: "Não",
        LOGRADOURO: "Avenida Mineira",
        NUMERO: "4567",
        COMPLEMENTO: "Casa 22",
        BAIRRO: "Savassi",
        CIDADE: "Belo Horizonte",
        UF: "MG",
        BASE_FICTICIA: "Base Interna - Consulta Pessoa Fisica (Simulacao)",
        BASE_FICTICIA_PESSOA: "Base Interna - Consulta Pessoa Fisica (Simulacao)",
        BASE_FICTICIA_VEICULO: "",
        ORIGEM_REGISTRO: "FIXO"
    },
    {
        NOME_COMPLETO: "Harvey Dent",
        CPF_FICTICIO: "234.567.890-12",
        RG_NUMERO: "45.678.901-2",
        RG_ORGAO_EMISSOR: "SSP/PR",
        DATA_NASCIMENTO: "10/01/1992",
        NATURALIDADE: "Curitiba",
        UF_NATURALIDADE: "PR",
        NOME_MAE: "Gilda Harvey Dent",
        NOME_PAI: "Duas Caras Dent",
        SITUACAO_CADASTRAL_CPF: "Regular",
        ANO_OBITO: "-",
        GENERO: "Masculino",
        ESTRANGEIRO: "Não",
        RESIDENTE_EXTERIOR: "Não",
        LOGRADOURO: "Alameda do Promotor",
        NUMERO: "987",
        COMPLEMENTO: "Ed. Justiça",
        BAIRRO: "Centro",
        CIDADE: "Curitiba",
        UF: "PR",
        BASE_FICTICIA: "Base Interna - Consulta Pessoa Fisica (Simulacao)",
        BASE_FICTICIA_PESSOA: "Base Interna - Consulta Pessoa Fisica (Simulacao)",
        BASE_FICTICIA_VEICULO: "",
        ORIGEM_REGISTRO: "FIXO"
    },
    {
        NOME_COMPLETO: "Ozzy Ferreira Osborn",
        CPF_FICTICIO: "356.012.345-67",
        RG_NUMERO: "11.678.944-1",
        RG_ORGAO_EMISSOR: "SSP/SP",
        DATA_NASCIMENTO: "01/04/1944",
        NATURALIDADE: "São Paulo",
        UF_NATURALIDADE: "SP",
        NOME_MAE: "Marilyn Monroe Osborn",
        NOME_PAI: "Keith Richards Osborn",
        SITUACAO_CADASTRAL_CPF: "Regular",
        ANO_OBITO: "-",
        GENERO: "Masculino",
        ESTRANGEIRO: "Não",
        RESIDENTE_EXTERIOR: "Não",
        ENDERECOS: [
            "(Equipe Vermelha) Kit 09, Cidade Cenográfica/ANP",
            "(Equipe Azul Clara) Kit 12, Cidade Cenográfica/ANP",
            "(Equipe Verde) Kit 06, Cidade Cenográfica/ANP",
            "(Equipe Amarela) Kit 07, Cidade Cenográfica/ANP",
            "(Equipe Azul Escuro) Kit 01, Cidade Cenográfica/ANP"
        ],
        BASE_FICTICIA: "Base Interna - Consulta Pessoa Fisica (Simulacao)",
        BASE_FICTICIA_PESSOA: "Base Interna - Consulta Pessoa Fisica (Simulacao)",
        BASE_FICTICIA_VEICULO: "",
        ORIGEM_REGISTRO: "FIXO"
    },
    {
        NOME_COMPLETO: "Sharon Costa Osborn",
        CPF_FICTICIO: "778.012.345-67",
        RG_NUMERO: "45.678.871-9",
        RG_ORGAO_EMISSOR: "SSP/SP",
        DATA_NASCIMENTO: "06/09/1942",
        NATURALIDADE: "São Paulo",
        UF_NATURALIDADE: "SP",
        NOME_MAE: "Madonna da Silva",
        NOME_PAI: "Jackson Five",
        SITUACAO_CADASTRAL_CPF: "Regular",
        ANO_OBITO: "-",
        GENERO: "Feminino",
        ESTRANGEIRO: "Não",
        RESIDENTE_EXTERIOR: "Não",
        ENDERECOS: [
            "(Equipe Vermelha) Kit 09, Cidade Cenográfica/ANP",
            "(Equipe Azul Clara) Kit 12, Cidade Cenográfica/ANP",
            "(Equipe Verde) Kit 06, Cidade Cenográfica/ANP",
            "(Equipe Amarela) Kit 07, Cidade Cenográfica/ANP",
            "(Equipe Azul Escuro) Kit 01, Cidade Cenográfica/ANP"
        ],
        BASE_FICTICIA: "Base Interna - Consulta Pessoa Fisica (Simulacao)",
        BASE_FICTICIA_PESSOA: "Base Interna - Consulta Pessoa Fisica (Simulacao)",
        BASE_FICTICIA_VEICULO: "",
        ORIGEM_REGISTRO: "FIXO"
    }
];
const CAMPOS_MINIMOS_BASE = [
    "NOME_COMPLETO",
    "CPF_FICTICIO",
    "DATA_NASCIMENTO",
    "DATA_ATUALIZACAO",
    "ESTADO_CIVIL",
    "NOME_MAE",
    "NOME_PAI",
    "SITUACAO_CADASTRAL_CPF",
    "ANO_OBITO",
    "NATURALIDADE",
    "UF_NATURALIDADE",
    "GENERO",
    "DATA_INSCRICAO_CPF",
    "ESTRANGEIRO",
    "PROFISSAO",
    "RESIDENTE_EXTERIOR",
    "SOCIO_EMPRESA",
    "LOGRADOURO",
    "NUMERO",
    "COMPLEMENTO",
    "BAIRRO",
    "CIDADE",
    "UF",
    "CEP",
    "ENDERECO_2",
    "TELEFONE_1",
    "TELEFONE_1_TIPO",
    "TELEFONE_2",
    "TELEFONE_2_TIPO",
    "RG_NUMERO",
    "RG_ORGAO_EMISSOR",
    "FOTO_URL",
    "NOME_FANTASIA",
    "TAGS",
    "CHAVE_PIX",
    "CHAVE_PIX_TIPO",
    "CHAVE_PIX_STATUS",
    "CNPJ",
    "MATRIZ_FILIAL",
    "PJ_RAZAO_SOCIAL",
    "ADMINISTRADOR_RESPONSAVEL",
    "CPF_RESPONSAVEL",
    "RG_RESPONSAVEL",
    "EMAIL_1",
    "SITUACAO_CADASTRAL",
    "DATA_SITUACAO_CADASTRAL",
    "NATUREZA_JURIDICA",
    "DATA_INICIO_ATIVIDADE",
    "PORTE_EMPRESA",
    "NIRE",
    "CAPITAL_SOCIAL",
    "CNAE_PRINCIPAL",
    "CNAE_SECUNDARIO_1",
    "CNAE_SECUNDARIO_2",
    "SOCIO_PJ",
    "SOCIO_PF",
    "SOCIO_EXT",
    "VEICULO_1_PLACA",
    "VEICULO_1_MARCA",
    "VEICULO_1_MODELO",
    "VEICULO_1_ANO",
    "VEICULO_1_ANO_FABRICACAO",
    "VEICULO_1_COR",
    "VEICULO_1_RENAVAM_FICTICIO",
    "VEICULO_1_TIPO_PESSOA",
    "VEICULO_2_PLACA",
    "VEICULO_2_MARCA",
    "VEICULO_2_MODELO",
    "VEICULO_2_ANO",
    "VEICULO_2_ANO_FABRICACAO",
    "VEICULO_2_COR",
    "VEICULO_2_RENAVAM_FICTICIO",
    "VEICULO_2_TIPO_PESSOA",
    "BASE_FICTICIA",
    "BASE_FICTICIA_PESSOA",
    "BASE_FICTICIA_VEICULO",
    "ORIGEM_REGISTRO"
];

function normalizar(valor) {
    return String(valor || "")
        .toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .trim();
}

function normalizarCPF(valor) {
    return String(valor || "").replace(/\D/g, "");
}

function normalizarPlaca(valor) {
    return String(valor || "")
        .toUpperCase()
        .replace(/[^A-Z0-9]/g, "");
}

function escaparRegex(valor) {
    return String(valor || "").replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

function atualizarDestaqueBusca(termoOriginal) {
    termosDestaqueBusca = String(termoOriginal || "")
        .split(/\s+/)
        .map(termo => termo.trim())
        .filter(termo => termo.length >= 2);
}

function destacarTexto(valor) {
    let texto = String(valor || "");

    if (!texto || termosDestaqueBusca.length === 0) {
        return texto;
    }

    termosDestaqueBusca.forEach(termo => {
        const regex = new RegExp(`(${escaparRegex(termo)})`, "gi");
        texto = texto.replace(regex, "<mark>$1</mark>");
    });

    return texto;
}

function obterEstiloCard(pessoa) {
    const fotoUrl = String(pessoa?.FOTO_URL || "").trim();
    if (!fotoUrl) {
        return "";
    }

    const caminhoSemQuery = fotoUrl.split("?")[0].split("#")[0];
    const temExtensao = /\.[a-z0-9]+$/i.test(caminhoSemQuery);
    const baseSemExtensao = temExtensao
        ? caminhoSemQuery.replace(/\.[a-z0-9]+$/i, "")
        : caminhoSemQuery;

    const candidatos = [];

    if (temExtensao) {
        candidatos.push(caminhoSemQuery);
        candidatos.push(`fotos/${caminhoSemQuery}`);
    }

    ["jpg", "jpeg", "png", "webp", "gif", "svg"].forEach(ext => {
        candidatos.push(`${baseSemExtensao}.${ext}`);
        candidatos.push(`fotos/${baseSemExtensao}.${ext}`);
    });

    const unicos = [...new Set(candidatos)]
        .map(item => item.replace(/'/g, "%27").replace(/"/g, "%22"));

    if (unicos.length === 0) {
        return "";
    }

    // Multiple backgrounds let the browser fall back when a file is missing.
    return ` style="--card-avatar-image:${unicos.map(path => `url('${path}')`).join(",")}"`;
}

function nomeContemTermo(nomeNormalizado, termoNormalizado) {
    if (!nomeNormalizado || !termoNormalizado) {
        return false;
    }

    const palavrasIgnoradas = new Set(["da", "de", "do", "das", "dos", "e"]);
    const partesNome = nomeNormalizado
        .split(/\s+/)
        .filter(parte => parte && !palavrasIgnoradas.has(parte));
    const termosBusca = termoNormalizado
        .split(/\s+/)
        .filter(termo => termo && !palavrasIgnoradas.has(termo));

    if (termosBusca.length === 0) {
        return false;
    }

    return termosBusca.every(termo =>
        partesNome.some(parteNome => parteNome.startsWith(termo))
    );
}

function carregarRegistrosManuaisSalvos() {
    try {
        const bruto = localStorage.getItem(CHAVE_REGISTROS_MANUAIS);
        const lista = bruto ? JSON.parse(bruto) : [];
        return Array.isArray(lista) ? lista : [];
    } catch (erro) {
        console.error("Nao foi possivel ler registros manuais.", erro);
        return [];
    }
}

function persistirRegistrosManuaisSalvos() {
    try {
        localStorage.setItem(CHAVE_REGISTROS_MANUAIS, JSON.stringify(registrosManuais));
    } catch (erro) {
        console.error("Nao foi possivel salvar registros manuais.", erro);
    }
}

function aplicarRegistrosManuaisNaBase() {
    if (!Array.isArray(registrosManuais) || registrosManuais.length === 0) {
        return;
    }

    dados = dados.concat(registrosManuais);
}

function registroTemChaveDuplicada(registroFixo, registroBase) {
    const cpfFixo = normalizarCPF(obterCPF(registroFixo));
    const cpfBase = normalizarCPF(obterCPF(registroBase));
    if (cpfFixo && cpfBase && cpfFixo === cpfBase) {
        return true;
    }

    const placaFixo1 = normalizarPlaca(registroFixo.VEICULO_1_PLACA);
    const placaFixo2 = normalizarPlaca(registroFixo.VEICULO_2_PLACA);
    const placaBase1 = normalizarPlaca(registroBase.VEICULO_1_PLACA);
    const placaBase2 = normalizarPlaca(registroBase.VEICULO_2_PLACA);

    if (
        (placaFixo1 && (placaFixo1 === placaBase1 || placaFixo1 === placaBase2)) ||
        (placaFixo2 && (placaFixo2 === placaBase1 || placaFixo2 === placaBase2))
    ) {
        return true;
    }

    return false;
}

function mesclarRegistroFixoNoBase(registroBase, registroFixo) {
    const chaves = new Set([...Object.keys(registroBase), ...Object.keys(registroFixo)]);

    chaves.forEach(chave => {
        const valorBase = registroBase[chave];
        const valorFixo = registroFixo[chave];

        if ((valorBase === undefined || valorBase === "") && valorFixo !== undefined && valorFixo !== "") {
            if (Array.isArray(valorFixo)) {
                registroBase[chave] = JSON.parse(JSON.stringify(valorFixo));
            } else if (typeof valorFixo === "object" && valorFixo !== null) {
                registroBase[chave] = { ...valorFixo };
            } else {
                registroBase[chave] = valorFixo;
            }
        }
    });
}

function aplicarRegistrosFixosNaBase() {
    if (!Array.isArray(REGISTROS_FIXOS) || REGISTROS_FIXOS.length === 0) {
        return;
    }

    REGISTROS_FIXOS.forEach(registroFixo => {
        const registroExistente = dados.find(registro => registroTemChaveDuplicada(registroFixo, registro));

        if (registroExistente) {
            // Se o registro ja existe na planilha, mantemos os dados da planilha e apenas
            // complementamos campos ausentes com as informações fixas.
            mesclarRegistroFixoNoBase(registroExistente, registroFixo);
            return;
        }

        dados.push(registroFixo);
    });
}

function formatarCpfNumerico(cpfNumerico) {
    const cpf = String(cpfNumerico || "").replace(/\D/g, "").padStart(11, "0").slice(-11);
    return `${cpf.slice(0, 3)}.${cpf.slice(3, 6)}.${cpf.slice(6, 9)}-${cpf.slice(9, 11)}`;
}

function gerarPlacaMercosul(indice, deslocamento = 0) {
    const alfabeto = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const base = indice + (deslocamento * 1000) + 7000;

    const l1 = alfabeto[base % 26];
    const l2 = alfabeto[Math.floor(base / 26) % 26];
    const l3 = alfabeto[Math.floor(base / (26 * 26)) % 26];
    const d1 = Math.floor(base / (26 * 26 * 26)) % 10;
    const l4 = alfabeto[Math.floor(base / (26 * 26 * 26 * 10)) % 26];
    const d2 = Math.floor(base / (26 * 26 * 26 * 10 * 26)) % 10;
    const d3 = Math.floor(base / (26 * 26 * 26 * 10 * 26 * 10)) % 10;

    return `${l1}${l2}${l3}${d1}${l4}${d2}${d3}`;
}

function gerarDataNascimento(indice) {
    const dia = String((indice % 28) + 1).padStart(2, "0");
    const mes = String(((indice * 3) % 12) + 1).padStart(2, "0");
    const ano = String(1965 + (indice % 40));
    return `${dia}/${mes}/${ano}`;
}

function gerarListaVoos(indice) {
    const aeroportos = ["BSB", "CGH", "CNF", "GYN", "SSA", "REC", "FOR", "MAO", "BEL", "POA"];
    const cias = ["GOL", "LATAM", "AZUL"];

    const origem = aeroportos[indice % aeroportos.length];
    const destino = aeroportos[(indice + 3) % aeroportos.length];
    const cia = cias[indice % cias.length];
    const diaIda = String((indice % 25) + 1).padStart(2, "0");
    const diaVolta = String(((indice + 2) % 25) + 1).padStart(2, "0");
    const mes = String(((indice % 10) + 1)).padStart(2, "0");
    const ano = "2026";
    const horaIda = `${String(6 + (indice % 12)).padStart(2, "0")}:${String((indice * 5) % 60).padStart(2, "0")}:00`;
    const horaVolta = `${String(8 + (indice % 12)).padStart(2, "0")}:${String((indice * 7) % 60).padStart(2, "0")}:00`;

    const vooIda = {
        localizador: `VX${String(10000 + indice).slice(-5)}`,
        cia,
        dataDecolagem: `${ano}-${mes}-${diaIda}`,
        horaDecolagem: horaIda,
        aeroportoPartida: origem,
        dataAterrissagem: `${ano}-${mes}-${diaIda}`,
        horaAterrissagem: horaVolta,
        aeroportoChegada: destino,
        bagagem: (indice % 2 === 0) ? "23 kg" : "Nao"
    };

    const vooVolta = {
        localizador: `VX${String(12000 + indice).slice(-5)}`,
        cia,
        dataDecolagem: `${ano}-${mes}-${diaVolta}`,
        horaDecolagem: horaVolta,
        aeroportoPartida: destino,
        dataAterrissagem: `${ano}-${mes}-${diaVolta}`,
        horaAterrissagem: horaIda,
        aeroportoChegada: origem,
        bagagem: (indice % 3 === 0) ? "10 kg" : "Nao"
    };

    return [vooIda, vooVolta];
}

function gerarListaArmas(indice) {
    const tipos = ["Pistola", "Revolver", "Carabina", "Espingarda"];
    const armaPrincipal = {
        tipo: `${tipos[indice % tipos.length]} Cal. ${String((indice % 4) + 9).padStart(2, "0")}`,
        ativo: (indice % 7 === 0) ? "INATIVO" : "ATIVO",
        dataAquisicao: `${String((indice % 28) + 1).padStart(2, "0")}/${String(((indice * 2) % 12) + 1).padStart(2, "0")}/${String(2012 + (indice % 12))}`
    };

    if (indice % 11 === 0) {
        const armaSecundaria = {
            tipo: `${tipos[(indice + 1) % tipos.length]} Cal. ${String((indice % 3) + 22).padStart(2, "0")}`,
            ativo: "ATIVO",
            dataAquisicao: `${String(((indice + 5) % 28) + 1).padStart(2, "0")}/${String(((indice + 4) % 12) + 1).padStart(2, "0")}/${String(2011 + (indice % 11))}`
        };
        return [armaPrincipal, armaSecundaria];
    }

    return [armaPrincipal];
}

function obterNomeGerado(indice) {
    const nomesEspeciais = [
        "Hortensio Alves Pereira",
        "Donald Cardoso Nunes",
        "Elias Martins Braga",
        "Jose Alfreto Carvalho Lima"
    ];

    if (indice < nomesEspeciais.length) {
        return nomesEspeciais[indice];
    }

    const primeirosNomes = [
        "Lucas", "Marcos", "Renato", "Felipe", "Gustavo", "Thiago", "Rafael", "Andre", "Bruno", "Paulo",
        "Hortensio", "Donald", "Elias", "Jose Alfreto", "Roberto", "Fabio", "Cesar", "Leandro", "Danilo", "Vinicius"
    ];
    const nomesMeio = [
        "Alves", "Mendes", "Pereira", "Rodrigues", "Carvalho", "Araujo", "Santos", "Oliveira", "Nascimento", "Souza"
    ];
    const sobrenomes = [
        "Silva", "Lima", "Costa", "Ferreira", "Gomes", "Barbosa", "Rocha", "Nogueira", "Teixeira", "Martins"
    ];

    const primeiro = primeirosNomes[indice % primeirosNomes.length];
    const meio = nomesMeio[Math.floor(indice / 3) % nomesMeio.length];
    const ultimo = sobrenomes[Math.floor(indice / 7) % sobrenomes.length];
    return `${primeiro} ${meio} ${ultimo}`;
}

function gerarRegistrosFicticiosAdicionais(quantidade = 1000) {
    const registros = [];
    const marcasModelos = [
        ["Fiat", "Argo"],
        ["Chevrolet", "Onix"],
        ["Volkswagen", "Polo"],
        ["Toyota", "Corolla"],
        ["Honda", "Civic"],
        ["Jeep", "Compass"],
        ["Hyundai", "HB20"],
        ["Renault", "Kwid"]
    ];
    const cores = ["Preto", "Branco", "Prata", "Cinza", "Azul", "Vermelho"];
    const bairros = ["Centro", "Jardim Europa", "Setor Sul", "Vila Nova", "Boa Vista", "Parque das Flores"];
    const cidades = ["Brasilia", "Goiania", "Belo Horizonte", "Sao Paulo", "Fortaleza", "Curitiba"];
    const ufs = ["DF", "GO", "MG", "SP", "CE", "PR"];

    for (let i = 0; i < quantidade; i += 1) {
        const cpfNumerico = String(90000000000 + i);
        const cidade = cidades[i % cidades.length];
        const uf = ufs[i % ufs.length];
        const bairro = bairros[i % bairros.length];
        const nomeCompleto = obterNomeGerado(i);

        const registro = {
            NOME_COMPLETO: nomeCompleto,
            CPF_FICTICIO: formatarCpfNumerico(cpfNumerico),
            DATA_NASCIMENTO: gerarDataNascimento(i),
            ESTADO_CIVIL: (i % 2 === 0) ? "Solteiro" : "Casado",
            NOME_MAE: `Maria ${nomeCompleto.split(" ").slice(-1)[0]}`,
            NOME_PAI: `Jose ${nomeCompleto.split(" ").slice(-1)[0]}`,
            SITUACAO_CADASTRAL_CPF: "Regular",
            ANO_OBITO: "-",
            NATURALIDADE: cidade,
            UF_NATURALIDADE: uf,
            GENERO: (i % 3 === 0) ? "Masculino" : "Feminino",
            DATA_INSCRICAO_CPF: `${String((i % 28) + 1).padStart(2, "0")}/${String(((i % 12) + 1)).padStart(2, "0")}/${String(2002 + (i % 18))}`,
            ESTRANGEIRO: "Nao",
            PROFISSAO: ["Analista", "Motorista", "Tecnico", "Comerciante", "Professor", "Vendedor"][i % 6],
            RESIDENTE_EXTERIOR: "Nao",
            SOCIO_EMPRESA: "-",
            LOGRADOURO: `Rua ${String((i % 400) + 1).padStart(3, "0")} - Setor ${String.fromCharCode(65 + (i % 6))}`,
            NUMERO: String((i % 999) + 1),
            COMPLEMENTO: (i % 4 === 0) ? `Apto ${String((i % 80) + 1)}` : "",
            BAIRRO: bairro,
            CIDADE: cidade,
            UF: uf,
            CEP: `${String((70000 + (i % 9999))).padStart(5, "0")}-${String((100 + (i % 899))).padStart(3, "0")}`,
            TELEFONE_1: `+55${String(61000000000 + i).slice(-11)}`,
            TELEFONE_1_TIPO: "Celular",
            CHAVE_PIX: (i % 2 === 0) ? `+55${String(61000000000 + i).slice(-11)}` : `${normalizar(nomeCompleto).replace(/\s+/g, ".")}@email.com`,
            CHAVE_PIX_TIPO: (i % 2 === 0) ? "TELEFONE" : "EMAIL",
            CHAVE_PIX_STATUS: "ATIVO",
            DATA_ATUALIZACAO: "23/03/2026",
            BASE_FICTICIA: "Base Interna - Consulta Pessoa Fisica (Simulacao)",
            BASE_FICTICIA_PESSOA: "Base Interna - Consulta Pessoa Fisica (Simulacao)",
            BASE_FICTICIA_VEICULO: "",
            ORIGEM_REGISTRO: "GERADO"
        };

        if (i % 3 === 0) {
            const [marca1, modelo1] = marcasModelos[i % marcasModelos.length];
            registro.VEICULO_1_PLACA = gerarPlacaMercosul(i, 1);
            registro.VEICULO_1_MARCA = marca1;
            registro.VEICULO_1_MODELO = modelo1;
            registro.VEICULO_1_ANO = String(2015 + (i % 11));
            registro.VEICULO_1_ANO_FABRICACAO = String(2014 + (i % 11));
            registro.VEICULO_1_COR = cores[i % cores.length];
            registro.VEICULO_1_RENAVAM_FICTICIO = String(30000000000 + i).slice(-11);
            registro.VEICULO_1_TIPO_PESSOA = "proprietario";
            registro.BASE_FICTICIA_VEICULO = "Base Interna - Consulta Veiculo (Simulacao)";
        }

        if (i % 10 === 0) {
            const [marca2, modelo2] = marcasModelos[(i + 2) % marcasModelos.length];
            registro.VEICULO_2_PLACA = gerarPlacaMercosul(i, 2);
            registro.VEICULO_2_MARCA = marca2;
            registro.VEICULO_2_MODELO = modelo2;
            registro.VEICULO_2_ANO = String(2013 + (i % 10));
            registro.VEICULO_2_ANO_FABRICACAO = String(2012 + (i % 10));
            registro.VEICULO_2_COR = cores[(i + 2) % cores.length];
            registro.VEICULO_2_RENAVAM_FICTICIO = String(40000000000 + i).slice(-11);
            registro.VEICULO_2_TIPO_PESSOA = "detentor";
            registro.BASE_FICTICIA_VEICULO = "Base Interna - Consulta Veiculo (Simulacao)";
        }

        if (i % 4 === 0) {
            registro.ARMAS = gerarListaArmas(i);
        }

        if (i % 5 === 0) {
            registro.VOOS = gerarListaVoos(i);
        }

        registros.push(registro);
    }

    return registros;
}

const REGISTROS_FICTICIOS_ADICIONAIS = gerarRegistrosFicticiosAdicionais(1000);

function aplicarRegistrosFicticiosAdicionaisNaBase() {
    if (!Array.isArray(REGISTROS_FICTICIOS_ADICIONAIS) || REGISTROS_FICTICIOS_ADICIONAIS.length === 0) {
        return;
    }

    REGISTROS_FICTICIOS_ADICIONAIS.forEach(registroGerado => {
        const cpfNovo = normalizarCPF(registroGerado.CPF_FICTICIO);
        const placa1Nova = normalizarPlaca(registroGerado.VEICULO_1_PLACA);
        const placa2Nova = normalizarPlaca(registroGerado.VEICULO_2_PLACA);

        const jaExiste = dados.some(registro => {
            const cpfExistente = normalizarCPF(obterCPF(registro));
            const placa1Existente = normalizarPlaca(registro.VEICULO_1_PLACA);
            const placa2Existente = normalizarPlaca(registro.VEICULO_2_PLACA);

            const cpfDuplicado = cpfNovo && cpfExistente && cpfNovo === cpfExistente;
            const placa1Duplicada = placa1Nova && (placa1Nova === placa1Existente || placa1Nova === placa2Existente);
            const placa2Duplicada = placa2Nova && (placa2Nova === placa1Existente || placa2Nova === placa2Existente);

            return cpfDuplicado || placa1Duplicada || placa2Duplicada;
        });

        if (!jaExiste) {
            dados.push(registroGerado);
        }
    });
}

function garantirCamposMinimosNaBase() {
    if (!Array.isArray(dados) || dados.length === 0) {
        return;
    }

    dados.forEach(registro => {
        CAMPOS_MINIMOS_BASE.forEach(campo => {
            if (!(campo in registro)) {
                registro[campo] = "";
            }
        });
    });
}

function obterValorCampoInsercao(idCampo) {
    const campo = document.getElementById(idCampo);
    return campo ? campo.value.trim() : "";
}

function exibirStatusInsercao(mensagem, tipo = "") {
    const statusEl = document.getElementById("insercao-status");
    if (!statusEl) {
        return;
    }

    statusEl.textContent = mensagem;
    statusEl.className = "insercao-status";

    if (tipo === "ok") {
        statusEl.classList.add("ok");
    } else if (tipo === "erro") {
        statusEl.classList.add("erro");
    }
}

function limparFormularioInsercao(limparStatus = true) {
    const form = document.getElementById("form-insercao");
    if (form) {
        form.reset();
    }

    if (limparStatus) {
        exibirStatusInsercao("");
    }
}

function montarRegistroManualDoFormulario() {
    const nomeCompleto = obterValorCampoInsercao("ins-nome");
    const cpfNumerico = normalizarCPF(obterValorCampoInsercao("ins-cpf"));
    const dataNascimento = obterValorCampoInsercao("ins-data-nascimento");
    const nomeMae = obterValorCampoInsercao("ins-nome-mae");
    const logradouro = obterValorCampoInsercao("ins-logradouro");
    const numero = obterValorCampoInsercao("ins-numero");
    const bairro = obterValorCampoInsercao("ins-bairro");
    const cidade = obterValorCampoInsercao("ins-cidade");
    const uf = obterValorCampoInsercao("ins-uf").toUpperCase().slice(0, 2);
    const cep = obterValorCampoInsercao("ins-cep");
    const placa = normalizarPlaca(obterValorCampoInsercao("ins-placa"));
    const veiculoDigitado = obterValorCampoInsercao("ins-veiculo");
    const dataAtualizacao = new Date().toLocaleDateString("pt-BR");

    if (!nomeCompleto) {
        return { erro: "Informe o nome completo para inserir o registro." };
    }

    if (cpfNumerico && cpfNumerico.length < 11) {
        return { erro: "CPF invalido. Informe pelo menos 11 digitos." };
    }

    const partesVeiculo = veiculoDigitado
        .split(/[\/-]/)
        .map(parte => parte.trim())
        .filter(Boolean);

    const marcaVeiculo = partesVeiculo[0] || veiculoDigitado;
    const modeloVeiculo = partesVeiculo[1] || veiculoDigitado;

    return {
        NOME_COMPLETO: nomeCompleto,
        CPF_FICTICIO: cpfNumerico,
        DATA_NASCIMENTO: dataNascimento,
        NOME_MAE: nomeMae,
        LOGRADOURO: logradouro,
        NUMERO: numero,
        BAIRRO: bairro,
        CIDADE: cidade,
        UF: uf,
        CEP: cep,
        VEICULO_1_PLACA: placa,
        VEICULO_1_MARCA: marcaVeiculo,
        VEICULO_1_MODELO: modeloVeiculo,
        BASE_FICTICIA: "INSERIDO_MANUALMENTE",
        DATA_ATUALIZACAO: dataAtualizacao,
        ORIGEM_REGISTRO: "MANUAL"
    };
}

function inserirRegistroManual(evento) {
    if (evento) {
        evento.preventDefault();
    }

    if (carregandoBase) {
        exibirStatusInsercao("Aguarde o carregamento da base para inserir novos dados.", "erro");
        return;
    }

    const novoRegistro = montarRegistroManualDoFormulario();
    if (novoRegistro.erro) {
        exibirStatusInsercao(novoRegistro.erro, "erro");
        return;
    }

    const cpfNovo = normalizarCPF(novoRegistro.CPF_FICTICIO);
    if (cpfNovo) {
        const cpfDuplicado = dados.some(registro => normalizarCPF(obterCPF(registro)) === cpfNovo);
        if (cpfDuplicado) {
            exibirStatusInsercao("Ja existe um registro com esse CPF na base atual.", "erro");
            return;
        }
    }

    registrosManuais.push(novoRegistro);
    persistirRegistrosManuaisSalvos();

    dados.push(novoRegistro);
    baseCarregada = true;

    exibirStatusInsercao("Registro inserido com sucesso. A pesquisa ja considera esse novo dado.", "ok");
    limparFormularioInsercao(false);

    const campoBusca = document.getElementById("busca");
    if (campoBusca) {
        campoBusca.value = novoRegistro.NOME_COMPLETO;
    }

    pesquisar();
}

function alternarPainelInsercao(forcarAberto = null) {
    const painel = document.getElementById("painel-insercao");
    if (!painel) {
        return;
    }

    const abrir = forcarAberto === null ? !painel.classList.contains("ativo") : Boolean(forcarAberto);
    painel.classList.toggle("ativo", abrir);

    if (abrir) {
        const campoNome = document.getElementById("ins-nome");
        if (campoNome) {
            campoNome.focus();
        }
    }
}

function inicializarInsercaoManual() {
    const formInsercao = document.getElementById("form-insercao");
    if (formInsercao) {
        formInsercao.addEventListener("submit", inserirRegistroManual);
    }

    const botaoAbrir = document.getElementById("btn-toggle-insercao");
    if (botaoAbrir) {
        botaoAbrir.addEventListener("click", function() {
            alternarPainelInsercao();
        });
    }

    const botaoFechar = document.getElementById("btn-fechar-insercao");
    if (botaoFechar) {
        botaoFechar.addEventListener("click", function() {
            alternarPainelInsercao(false);
        });
    }
}

function obterCPF(pessoa) {
    const candidatos = [
        "CPF",
        "CNPJ",
        "CPF_FICTICIO",
        "CPF_CNPJ_FICTICIO",
        "CPF_CNPJ",
        "DOCUMENTO"
    ];

    for (const campo of candidatos) {
        const valor = pessoa[campo];
        const texto = String(valor || "").trim();
        if (texto !== "" && texto !== "-" && texto.toLowerCase() !== "n/a" && texto.toLowerCase() !== "nao") {
            return valor;
        }
    }

    const chaveCpf = Object.keys(pessoa).find(campo => /cpf/i.test(campo));
    if (chaveCpf) {
        const valor = pessoa[chaveCpf];
        const texto = String(valor || "").trim();
        if (texto !== "" && texto !== "-" && texto.toLowerCase() !== "n/a" && texto.toLowerCase() !== "nao") {
            return valor;
        }
    }

    return "";
}

function obterNomePessoa(pessoa) {
    const candidatos = [
        "NOME_COMPLETO",
        "NOME_FANTASIA",
        "PJ_RAZAO_SOCIAL",
        "NOME",
        "NOME_PESSOA",
        "NOME_SOCIAL",
        "NM_PESSOA"
    ];

    for (const campo of candidatos) {
        if (pessoa[campo] !== undefined && pessoa[campo] !== null && String(pessoa[campo]).trim() !== "") {
            return pessoa[campo];
        }
    }

    const chaveNome = Object.keys(pessoa).find(campo => /nome/i.test(campo));
    return chaveNome ? pessoa[chaveNome] : "";
}

function obterDocumentoPesquisa(pessoa) {
    const candidatos = [
        "CPF",
        "CNPJ",
        "CPF_FICTICIO",
        "CPF_CNPJ_FICTICIO",
        "CPF_CNPJ",
        "DOCUMENTO",
        "ID_PESSOA"
    ];

    for (const campo of candidatos) {
        if (pessoa[campo] !== undefined && pessoa[campo] !== null && String(pessoa[campo]).trim() !== "") {
            return pessoa[campo];
        }
    }

    return "";
}

function extrairDocumentoNumerico(texto) {
    const conteudo = String(texto || "");
    const padraoCnpj = /\d{2}\.\d{3}\.\d{3}\/\d{4}-\d{2}|\d{14}/g;
    const padraoCpf = /\d{3}\.\d{3}\.\d{3}-\d{2}|\d{11}/g;

    const cnpj = conteudo.match(padraoCnpj);
    if (cnpj && cnpj.length > 0) {
        return normalizarCPF(cnpj[0]);
    }

    const cpf = conteudo.match(padraoCpf);
    if (cpf && cpf.length > 0) {
        return normalizarCPF(cpf[0]);
    }

    return normalizarCPF(conteudo);
}

function possuiVeiculos(pessoa) {
    return Boolean(pessoa.VEICULO_1_PLACA || pessoa.VEICULO_2_PLACA || (Array.isArray(pessoa.VEICULOS_LISTA) && pessoa.VEICULOS_LISTA.length > 0));
}

function possuiVoos(pessoa) {
    return Array.isArray(pessoa.VOOS) && pessoa.VOOS.length > 0;
}

function possuiPix(pessoa) {
    return String(pessoa.CHAVE_PIX || "").trim() !== "";
}

function possuiBoletins(pessoa) {
    return Array.isArray(pessoa.BOLETINS) && pessoa.BOLETINS.length > 0;
}

function possuiArmas(pessoa) {
    if (Array.isArray(pessoa.ARMAS) && pessoa.ARMAS.length > 0) {
        return true;
    }

    return Object.keys(pessoa || {}).some(chave => /arma/i.test(chave) && String(pessoa[chave] || "").trim() !== "");
}

function ehPessoaJuridica(pessoa) {
    const cnpjDireto = normalizarCPF(pessoa.CNPJ || "");
    const documento = normalizarCPF(obterDocumentoPesquisa(pessoa));
    return cnpjDireto.length === 14 || documento.length === 14;
}

function obterOrigemPessoa(pessoa) {
    if (ehPessoaJuridica(pessoa)) {
        return pessoa.BASE_FICTICIA_PESSOA || "Base Interna - Consulta Pessoa Juridica (Simulacao)";
    }

    return pessoa.BASE_FICTICIA_PESSOA || pessoa.BASE_FICTICIA || "";
}

function obterBancoDadosPessoa(pessoa) {
    return ehPessoaJuridica(pessoa) ? "BANCO DE DADOS PESSOA JURIDICA" : "BANCO DE DADOS PESSOA";
}

function montarAreaResumo(titulo, linhas) {
    const conteudo = Array.isArray(linhas) && linhas.length > 0
        ? linhas.map(linha => `<div>${linha}</div>`).join("")
        : `<div class="painel-consulta-vazio">Nenhum registro encontrado.</div>`;

    return `
        <section class="painel-consulta-area">
            <h4>${titulo}</h4>
            ${conteudo}
        </section>
    `;
}

function montarPainelConsultaPorNome(registros) {
    if (!Array.isArray(registros) || registros.length === 0) {
        return "";
    }

    return `
        <div class="painel-consulta-nome">
            ${registros.map(pessoa => {
                const veiculos = [];
                if (pessoa.VEICULO_1_PLACA) {
                    veiculos.push(`<strong>${pessoa.VEICULO_1_PLACA}</strong> - ${pessoa.VEICULO_1_MARCA || ""} ${pessoa.VEICULO_1_MODELO || ""} - ${pessoa.VEICULO_1_COR || ""}`);
                }
                if (pessoa.VEICULO_2_PLACA) {
                    veiculos.push(`<strong>${pessoa.VEICULO_2_PLACA}</strong> - ${pessoa.VEICULO_2_MARCA || ""} ${pessoa.VEICULO_2_MODELO || ""} - ${pessoa.VEICULO_2_COR || ""}`);
                }

                const voos = possuiVoos(pessoa)
                    ? pessoa.VOOS.map(voo => `<strong>${voo.localizador || voo.id || "-"}</strong> - ${voo.cia || "-"} - ${(voo.dataDecolagem || voo.dataOrigem || "-")} ${(voo.aeroportoPartida || voo.origem || "-")} > ${(voo.aeroportoChegada || voo.destino || "-")}`)
                    : [];

                const boletins = possuiBoletins(pessoa)
                    ? pessoa.BOLETINS.map(boletim => `<strong>${boletim.DATA || ""}</strong> - ${boletim.NATUREZA || ""} - ${boletim.LOCAL || ""}`)
                    : [];

                return `
                    <article class="painel-consulta-bloco">
                        <h3 class="painel-consulta-titulo">${pessoa.NOME_COMPLETO || "Registro"}</h3>
                        <div class="painel-consulta-grid">
                            ${montarAreaResumo("DADOS PESSOAIS", [
                                `<strong>CPF:</strong> ${obterCPF(pessoa) || "-"}`,
                                `<strong>Data de Nascimento:</strong> ${pessoa.DATA_NASCIMENTO || "-"}`,
                                `<strong>Genitor 1:</strong> ${pessoa.NOME_MAE || "-"}`,
                                `<strong>Genitor 2:</strong> ${pessoa.NOME_PAI || "-"}`,
                                `<strong>Naturalidade:</strong> ${pessoa.NATURALIDADE || "-"}`,
                                `<strong>Origem:</strong> ${pessoa.BASE_FICTICIA_PESSOA || pessoa.BASE_FICTICIA || "-"}`
                            ])}
                            ${montarAreaResumo("VEICULOS", veiculos)}
                            ${montarAreaResumo("VOOS", voos)}
                            ${montarAreaResumo("CONSULTA PIX", possuiPix(pessoa) ? [
                                `<strong>Chave:</strong> ${pessoa.CHAVE_PIX || "-"}`,
                                `<strong>Tipo:</strong> ${pessoa.CHAVE_PIX_TIPO || "-"}`,
                                `<strong>Status:</strong> ${pessoa.CHAVE_PIX_STATUS || "-"}`
                            ] : [])}
                            ${montarAreaResumo("BOLETIM OCORRENCIA", boletins)}
                            ${montarAreaResumo("ARMA", [])}
                        </div>
                    </article>
                `;
            }).join("")}
        </div>
    `;
}

function montarCardConsultaCpf(indexGlobal, nome, tipoArea, linhas, tipoDetalhe = "pessoa") {
    const conteudo = linhas.map(linha => `<div>${linha}</div>`).join("");
    const pessoa = dados[indexGlobal] || {};

    return `
        <div class="card-resultado" onclick="abrirDetalhe(${indexGlobal}, '${tipoDetalhe}')"${obterEstiloCard(pessoa)}>
            <div class="card-info">
                <div class="card-titulo">${destacarTexto(nome)}</div>
                ${conteudo}
                <div class="card-origem-linha"><strong>Origem:</strong> ${tipoArea}</div>
            </div>
        </div>
    `;
}

function montarLinhasPessoaisResumo(pessoa) {
    const investigacao = pessoa.INVESTIGACOES ? pessoa.INVESTIGACOES : "Nenhum caso";
    const investigacaoHtml = pessoa.INVESTIGACOES ? `<span>${destacarTexto(investigacao)}</span>` : `<a href="#" style="color:#1f5f8f; text-decoration:underline;">${destacarTexto(investigacao)}</a>`;

    return [
        `<strong>CPF:</strong> ${destacarTexto(obterCPF(pessoa) || "-")}`,
        `<strong>Data de Nascimento:</strong> ${destacarTexto(pessoa.DATA_NASCIMENTO || "-")}`,
        `<strong>Genitor 1:</strong> ${destacarTexto(pessoa.NOME_MAE || "-")}`,
        `<strong>Genitor 2:</strong> ${destacarTexto(pessoa.NOME_PAI || "-")}`,
        `<strong>Naturalidade:</strong> ${destacarTexto(pessoa.NATURALIDADE || "-")}`,
        `<strong>Investigação:</strong> ${investigacaoHtml}`
    ];
}

function montarPainelConsultaPorCpf(registros) {
    if (!Array.isArray(registros) || registros.length === 0) {
        return "";
    }

    let html = `<div class="painel-consulta-cpf">`;

    registros.forEach(pessoa => {
        const indexGlobal = dados.indexOf(pessoa);
        const nome = obterNomePessoa(pessoa) || "Registro";
        const quantidadeVeiculos = Array.isArray(pessoa.VEICULOS_LISTA) && pessoa.VEICULOS_LISTA.length > 0
            ? pessoa.VEICULOS_LISTA.length
            : [pessoa.VEICULO_1_PLACA, pessoa.VEICULO_2_PLACA].filter(Boolean).length;
        const quantidadeVoos = Array.isArray(pessoa.VOOS) ? pessoa.VOOS.length : 0;
        const quantidadeBoletins = Array.isArray(pessoa.BOLETINS) ? pessoa.BOLETINS.length : 0;
        const linhasPessoais = montarLinhasPessoaisResumo(pessoa);

        const tituloDados = ehPessoaJuridica(pessoa) ? "DADOS PESSOA JURÍDICA" : "DADOS PESSOAIS";
        html += montarCardConsultaCpf(indexGlobal, nome, tituloDados, [
            ...linhasPessoais,
            `<span class="origem">Base consultada: ${destacarTexto(pessoa.BASE_FICTICIA_PESSOA || pessoa.BASE_FICTICIA || "")}</span>`
        ], "pessoa");

        if (quantidadeVeiculos > 0) {
            html += montarCardConsultaCpf(indexGlobal, nome, "VEICULOS", [
                ...linhasPessoais,
                `<strong>Registros encontrados:</strong> ${quantidadeVeiculos}`,
                `<strong>Situação:</strong> Clique para visualizar os dados completos dos veículos.`,
                `<span class="origem">Base consultada: ${destacarTexto(pessoa.BASE_FICTICIA_VEICULO || pessoa.BASE_FICTICIA || "")}</span>`
            ], "veiculos");
        }

        if (possuiArmas(pessoa)) {
            html += montarCardConsultaCpf(indexGlobal, nome, "ARMAS", [
                ...linhasPessoais,
                `<strong>Situação:</strong> Clique para visualizar os dados completos das armas relacionadas.`,
                `<span class="origem">Base consultada: BANCO DE DADOS ARMAS</span>`
            ], "arma");
        }

        if (quantidadeVoos > 0) {
            html += montarCardConsultaCpf(indexGlobal, nome, "VOOS", [
                ...linhasPessoais,
                `<strong>Registros encontrados:</strong> ${quantidadeVoos}`,
                `<strong>Situação:</strong> Clique para visualizar os detalhes dos voos.`,
                `<span class="origem">Base consultada: Base Interna - Consulta Voo (Simulacao)</span>`
            ], "voos");
        }

        if (possuiPix(pessoa)) {
            html += montarCardConsultaCpf(indexGlobal, nome, "CONSULTA PIX", [
                ...linhasPessoais,
                `<strong>Chave:</strong> ${destacarTexto(pessoa.CHAVE_PIX || "-")}`,
                `<strong>Situação:</strong> Clique para visualizar os dados completos da chave PIX.`,
                `<span class="origem">Base consultada: CONSULTA PIX</span>`
            ], "pix");
        }

        if (quantidadeBoletins > 0) {
            html += montarCardConsultaCpf(indexGlobal, nome, "BOLETIM OCORRENCIA", [
                ...linhasPessoais,
                `<strong>Registros encontrados:</strong> ${quantidadeBoletins}`,
                `<strong>Situação:</strong> Clique para visualizar os detalhes dos boletins.`,
                `<span class="origem">Base consultada: ${destacarTexto(pessoa.BASE_FICTICIA_PESSOA || pessoa.BASE_FICTICIA || "")}</span>`
            ], "boletim");
        }
    });

    html += `</div>`;
    return html;
}

function atualizarResumoResultados(total) {
    const resumoEl = document.getElementById("resultados-encontrados");
    if (!resumoEl) {
        return;
    }

    resumoEl.textContent = `Resultados encontrados: ${total}`;
}

function atualizarDebugInfo(mensagem) {
    const debugEl = document.getElementById("debug-info");
    if (!debugEl) {
        return;
    }

    debugEl.textContent = mensagem;
}

function mapRegistroCsvParaBase(registro) {
    const mapeamento = {
        Nome: "NOME_COMPLETO",
        CPF: "CPF_FICTICIO",
        "Data de Nascimento": "DATA_NASCIMENTO",
        "Data de Nascimento": "DATA_NASCIMENTO",
        "Data_Nascimento": "DATA_NASCIMENTO",
        "Nome completo": "NOME_COMPLETO",
        "CPF FICTICIO": "CPF_FICTICIO"
    };

    const resultado = {};
    Object.keys(registro).forEach(chave => {
        const valor = registro[chave];
        const nomeAlvo = mapeamento[chave] || chave.replace(/\s+/g, "_").toUpperCase();
        resultado[nomeAlvo] = valor;
    });
    return resultado;
}

function carregarRegistrosCsv(texto) {
    const linhas = texto.trim().replace(/\r/g, "").split("\n");
    if (linhas.length === 0) {
        return [];
    }

    const header = linhas[0].split(/,(?=(?:[^\"]*\"[^\"]*\")*[^\"]*$)/).map(h => h.trim().replace(/^\"|\"$/g, ""));
    const registros = [];

    for (let i = 1; i < linhas.length; i += 1) {
        const linha = linhas[i].trim();
        if (!linha) {
            continue;
        }

        const valores = linha.split(/,(?=(?:[^\"]*\"[^\"]*\")*[^\"]*$)/).map(v => v.trim().replace(/^\"|\"$/g, ""));
        const registro = {};
        header.forEach((coluna, idx) => {
            registro[coluna] = valores[idx] !== undefined ? valores[idx] : "";
        });
        registros.push(mapRegistroCsvParaBase(registro));
    }

    return registros;
}

async function carregarBase() {
    const resultadoEl = document.getElementById("resultado");

    carregandoBase = true;
    baseCarregada = false;
    erroCarregamentoBase = "";

    if (resultadoEl) {
        resultadoEl.innerHTML = `<div class="resultado">Carregando base de dados...</div>`;
    }
    atualizarResumoResultados(0);

    if (location.protocol === "file:") {
        carregandoBase = false;
        erroCarregamentoBase = "Arquivo aberto em modo local (file://). Execute via servidor local para carregar o Excel.";
        if (resultadoEl) {
            resultadoEl.innerHTML = `<div class="resultado">${erroCarregamentoBase}</div>`;
        }
        return;
    }

    const xlsxDisponivel = typeof XLSX !== "undefined";

    try {
        let fonteCarregada = null;
        let dataCsv = [];

        const csvRes = await fetch("dados.csv", { cache: "no-store" });
        if (csvRes.ok) {
            const texto = await csvRes.text();
            dataCsv = carregarRegistrosCsv(texto);
            if (Array.isArray(dataCsv) && dataCsv.length > 0) {
                dados = dataCsv;
                fonteCarregada = "CSV";
            }
        }

        if ((!Array.isArray(dados) || dados.length === 0) && xlsxDisponivel) {
            const res = await fetch("base_ficticia_apex_nexo.xlsx", { cache: "no-store" });
            if (!res.ok) {
                throw new Error("Falha ao ler arquivo da base.");
            }

            const buffer = await res.arrayBuffer();
            const workbook = XLSX.read(buffer, { type: "array" });
            const sheet = workbook.Sheets[workbook.SheetNames[0]];
            dados = XLSX.utils.sheet_to_json(sheet);
            fonteCarregada = "XLSX";
        }

        if ((!Array.isArray(dados) || dados.length === 0) && !fonteCarregada) {
            throw new Error("Nenhuma base de dados foi encontrada.");
        }

        registrosManuais = carregarRegistrosManuaisSalvos();
        aplicarRegistrosManuaisNaBase();
        aplicarRegistrosFixosNaBase();
        aplicarRegistrosFicticiosAdicionaisNaBase();
        garantirCamposMinimosNaBase();

        if (!Array.isArray(dados) || dados.length === 0) {
            throw new Error("Base carregada sem registros.");
        }

        baseCarregada = true;
        erroCarregamentoBase = "";

        if (resultadoEl) {
            resultadoEl.innerHTML = "";
        }
        atualizarResumoResultados(0);
        atualizarDebugInfo(`Base carregada (${fonteCarregada}): ${dados.length} registros | CPF do primeiro registro: ${obterCPF(dados[0]) || 'não encontrado'}`);

        console.log("Base carregada:", dados.length, "registros");
        console.log("Colunas encontradas:", Object.keys(dados[0] || {}));
    } catch (err) {
        registrosManuais = carregarRegistrosManuaisSalvos();

        if (registrosManuais.length > 0) {
            dados = [...registrosManuais];
            aplicarRegistrosFixosNaBase();
            aplicarRegistrosFicticiosAdicionaisNaBase();
            garantirCamposMinimosNaBase();
            baseCarregada = true;
            erroCarregamentoBase = "";
            if (resultadoEl) {
                resultadoEl.innerHTML = `<div class="resultado">Base principal indisponivel. Carregados ${registrosManuais.length} registros inseridos manualmente.</div>`;
            }
            atualizarResumoResultados(0);
        } else {
            dados = [];
            aplicarRegistrosFixosNaBase();
            aplicarRegistrosFicticiosAdicionaisNaBase();
            garantirCamposMinimosNaBase();

            if (dados.length > 0) {
                baseCarregada = true;
                erroCarregamentoBase = "";
                if (resultadoEl) {
                    resultadoEl.innerHTML = `<div class="resultado">Base principal indisponivel. Carregados ${dados.length} registros fixos.</div>`;
                }
                atualizarResumoResultados(0);
                atualizarDebugInfo(`Fallback fixo carregado: ${dados.length} registros | CPF do primeiro registro: ${obterCPF(dados[0]) || 'não encontrado'}`);
            } else {
                baseCarregada = false;
                erroCarregamentoBase = "Nao foi possivel carregar a base Excel.";

                if (resultadoEl) {
                    resultadoEl.innerHTML = `<div class="resultado">${erroCarregamentoBase}</div>`;
                }
                atualizarResumoResultados(0);
            }
        }

        console.error("Erro ao carregar Excel:", err);
    } finally {
        carregandoBase = false;
    }
}

document.addEventListener("DOMContentLoaded", function() {
    inicializarInsercaoManual();
    carregarBase();
});

document.addEventListener("click", function(e) {
    const card = e.target.closest(".card-resultado[data-veiculo]");
    if (card) {
        try {
            const index = card.getAttribute("data-index");
            const veiculoRaw = card.getAttribute("data-veiculo") || "";
            const veiculoData = JSON.parse(decodeURIComponent(veiculoRaw));
            tempVeiculo = veiculoData;
            abrirDetalhe(parseInt(index, 10), "veiculo", veiculoData);
        } catch (erroParse) {
            console.error("Nao foi possivel abrir detalhes do veiculo.", erroParse);
        }
    }
});

function pesquisar() {
    const resultadoEl = document.getElementById("resultado");
    const detalheEl = document.getElementById("detalhe-container");

    // Sempre volta para a lista ao pesquisar novamente.
    detalheEl.classList.remove("ativo");
    resultadoEl.style.display = "block";

    if (carregandoBase) {
        resultadoEl.innerHTML = `<div class="resultado">A base ainda esta carregando. Aguarde alguns segundos enquanto a pesquisa é concluída.</div>`;
        atualizarResumoResultados(0);

        if (!window.pesquisaAguardandoBase) {
            window.pesquisaAguardandoBase = true;
            setTimeout(() => {
                window.pesquisaAguardandoBase = false;
                pesquisar();
            }, 400);
        }

        return;
    }

    if (!baseCarregada || !Array.isArray(dados) || dados.length === 0) {
        resultadoEl.innerHTML = `<div class="resultado">${erroCarregamentoBase || "A base ainda esta carregando. Aguarde alguns segundos e tente novamente."}</div>`;
        atualizarDestaqueBusca("");
        atualizarResumoResultados(0);
        return;
    }

    let termoOriginal = document.getElementById("busca").value.trim();
    if (!termoOriginal) {
        resultadoEl.innerHTML = `<div class="resultado">Digite um termo para pesquisar.</div>`;
        atualizarDestaqueBusca("");
        atualizarResumoResultados(0);
        return;
    }

    let modoSelecionado = document.getElementById("tipoBusca")?.value || "auto";
    const forcarLocal = /^\s*(local|endereco)\s*:/i.test(termoOriginal);
    const forcarPix = /^\s*(consulta\s*simba-?pix|pix)\s*:/i.test(termoOriginal);
    const forcarPlaca = /^\s*(placa)\s*:/i.test(termoOriginal);

    if (forcarLocal) {
        termoOriginal = termoOriginal.replace(/^\s*(local|endereco)\s*:/i, "").trim();
    }
    if (forcarPix) {
        termoOriginal = termoOriginal.replace(/^\s*(consulta\s*simba-?pix|pix)\s*:/i, "").trim();
    }
    if (forcarPlaca) {
        termoOriginal = termoOriginal.replace(/^\s*(placa)\s*:/i, "").trim();
    }

    atualizarDestaqueBusca(termoOriginal);

    let termo = normalizar(termoOriginal);
    let termoCPF = extrairDocumentoNumerico(termoOriginal);
    let termoPlaca = normalizarPlaca(termoOriginal);
    let contemLetras = /[a-z]/i.test(termoOriginal);
    let contemNumeros = /\d/.test(termoOriginal);
    let placaValida = /^(?:[A-Z]{3}[0-9][A-Z0-9][0-9]{2}|[A-Z]{3}[0-9]{4})$/.test(termoPlaca);
    let pareceLocal = /\b(rua|avenida|av\.?|bairro|cidade|cep|logradouro|travessa|alameda|rodovia|km|quadra|lote)\b/i.test(termoOriginal);

    let tipoBusca = modoSelecionado;
    if (modoSelecionado === "auto") {
        tipoBusca = "nome";

        if (forcarLocal || pareceLocal) {
            tipoBusca = "local";
        }

        if (contemNumeros && !contemLetras) {
            tipoBusca = termoCPF.length === 14 ? "documento" : "cpf";
        } else if (contemLetras && contemNumeros) {
            tipoBusca = placaValida ? "placa" : "documento";
        }

        if (forcarLocal || pareceLocal) {
            tipoBusca = "local";
        }

        if (forcarPlaca) {
            tipoBusca = "placa";
        }

        if (forcarPix) {
            tipoBusca = "pix";
        }
    }

    atualizarDebugInfo(`Busca: "${termoOriginal}" | tipo: ${tipoBusca} | termoCPF: ${termoCPF || 'nenhum'} | termoPlaca: ${termoPlaca || 'nenhum'}`);

    if (termo.length < 2) {
        resultadoEl.innerHTML =
            `<div class="resultado">Digite pelo menos 2 caracteres para pesquisar.</div>`;
        atualizarResumoResultados(0);
        return;
    }

    let resultados = {
        pessoa: [],
        veiculo: [],
        pix: [],
        boletim: [],
        arma: []
    };

    dados.forEach(p => {
        let nomePrincipalBusca = normalizar(obterNomePessoa(p));
        let cpfBusca = normalizarCPF(obterCPF(p));
        let documentoBusca = normalizar(String(obterDocumentoPesquisa(p) || ""));
        let documentoBuscaNumerico = normalizarCPF(obterDocumentoPesquisa(p));
        let placa1Busca = normalizarPlaca(p.VEICULO_1_PLACA);
        let placa2Busca = normalizarPlaca(p.VEICULO_2_PLACA);
        let placasListaBusca = Array.isArray(p.VEICULOS_LISTA)
            ? p.VEICULOS_LISTA.map(v => normalizarPlaca(v)).join(" ")
            : "";
        let chavePixBusca = normalizar(String(p.CHAVE_PIX || ""));
        let chavePixNumerica = String(p.CHAVE_PIX || "").replace(/\D/g, "");
        let localBusca = normalizar([
            p.LOGRADOURO,
            p.NUMERO,
            p.COMPLEMENTO,
            p.BAIRRO,
            p.CIDADE,
            p.UF,
            p.CEP
        ].join(" "));
        let buscaGeral = normalizar(Object.values(p).join(" "));

        let encontrou =
            (tipoBusca === "nome" && nomeContemTermo(nomePrincipalBusca, termo)) ||
            (tipoBusca === "cpf" && termoCPF.length > 0 && cpfBusca.includes(termoCPF)) ||
            (tipoBusca === "documento" && (documentoBusca.includes(termo) || (termoCPF.length > 0 && documentoBuscaNumerico.includes(termoCPF)))) ||
            (tipoBusca === "placa" && termoPlaca.length > 0 && (placa1Busca.includes(termoPlaca) || placa2Busca.includes(termoPlaca) || placasListaBusca.includes(termoPlaca))) ||
            (tipoBusca === "local" && localBusca.includes(termo)) ||
            (tipoBusca === "pix" && ((chavePixBusca && chavePixBusca.includes(termo)) || (termoCPF.length > 0 && chavePixNumerica.includes(termoCPF))));

        // Fallback geral para reduzir falso-negativo quando o termo eh classificado no tipo errado.
        if (!encontrou && tipoBusca !== "nome" && tipoBusca !== "placa") {
            encontrou =
                buscaGeral.includes(termo) ||
                (termoCPF.length > 0 && (cpfBusca.includes(termoCPF) || documentoBuscaNumerico.includes(termoCPF))) ||
                (termoPlaca.length > 0 && (placa1Busca.includes(termoPlaca) || placa2Busca.includes(termoPlaca) || placasListaBusca.includes(termoPlaca))) ||
                (termoCPF.length > 0 && chavePixNumerica.includes(termoCPF));
        }

        if (!encontrou && tipoBusca === "placa" && termoPlaca.length > 0) {
            encontrou = placa1Busca.includes(termoPlaca) || placa2Busca.includes(termoPlaca) || placasListaBusca.includes(termoPlaca) || buscaGeral.includes(termoPlaca);
        }

        if (tipoBusca === "nome" && termo.length < 2) {
            encontrou = false;
        }

        if (encontrou) {
            resultados.pessoa.push(p);
            if (p.VEICULO_1_PLACA || p.VEICULO_2_PLACA || (Array.isArray(p.VEICULOS_LISTA) && p.VEICULOS_LISTA.length > 0)) {
                resultados.veiculo.push(p);
            }
            if (String(p.CHAVE_PIX || "").trim() !== "") {
                resultados.pix.push(p);
            }
            if (Array.isArray(p.BOLETINS) && p.BOLETINS.length > 0) {
                p.BOLETINS.forEach(boletim => {
                    resultados.boletim.push({ pessoa: p, boletim: boletim });
                });
            }
        }
    });

    let html = ``;

    if (resultados.pessoa.length === 0 && resultados.veiculo.length === 0 && resultados.pix.length === 0 && resultados.boletim.length === 0 && resultados.arma.length === 0) {
        html = `<div class="resultado">Nenhum resultado encontrado.</div>`;
        atualizarResumoResultados(0);
    } else {
        const cntPessoa = resultados.pessoa.length;
        const cntVeiculo = resultados.veiculo.length;
        const cntPix = resultados.pix.length;
        const cntBoletim = resultados.boletim.length;
        const cntArma = resultados.arma.length;
        const totalEncontrados = cntPessoa + cntVeiculo + cntPix + cntBoletim + cntArma;
        const exibirPainelCpf = (tipoBusca === "cpf" || tipoBusca === "nome") && cntPessoa > 0;
        const abaInicial = (tipoBusca === "placa" && cntVeiculo > 0)
            ? "veiculo"
            : (cntPessoa > 0
                ? "pessoa"
                : (cntVeiculo > 0
                    ? "veiculo"
                    : (cntPix > 0
                        ? "pix"
                        : (cntBoletim > 0 ? "boletim" : "arma"))));

        if (exibirPainelCpf) {
            html += montarPainelConsultaPorCpf(resultados.pessoa);
        }

        html += `
            <div class="abas-resultado">
                <button class="aba-btn ${abaInicial === "pessoa" ? "aba-ativo" : ""}" onclick="filtrarResultados('pessoa', this)">Pessoa Física (${cntPessoa})</button>
                <button class="aba-btn ${abaInicial === "veiculo" ? "aba-ativo" : ""}" onclick="filtrarResultados('veiculo', this)">Veículo (${cntVeiculo})</button>
                <button class="aba-btn ${abaInicial === "pix" ? "aba-ativo" : ""}" onclick="filtrarResultados('pix', this)">Consulta PIX (${cntPix})</button>
                <button class="aba-btn ${abaInicial === "boletim" ? "aba-ativo" : ""}" onclick="filtrarResultados('boletim', this)">BOLETIM OCORRENCIA (${cntBoletim})</button>
                <button class="aba-btn ${abaInicial === "arma" ? "aba-ativo" : ""}" onclick="filtrarResultados('arma', this)">Arma (${cntArma})</button>
            </div>
            <div id="abas-conteudo">
        `;

        if (cntPessoa > 0) {
            html += `<div class="tipo-resultado" id="tipo-pessoa" style="${abaInicial === "pessoa" ? "" : "display:none;"}">`;
            resultados.pessoa.forEach((p, idx) => {
                const indexGlobal = dados.indexOf(p);
                html += `
                    <div class="card-resultado" onclick="abrirDetalhe(${indexGlobal}, 'pessoa')"${obterEstiloCard(p)}>
                        <div class="card-titulo">${obterNomePessoa(p) || ""}</div>
                        <div class="card-info">
                            <div><strong>CPF:</strong> ${obterCPF(p) || ""}</div>
                            <div><strong>Data de Nascimento:</strong> ${p.DATA_NASCIMENTO || ""}</div>
                            <div><strong>Genitor 1:</strong> ${p.NOME_MAE || ""}</div>
                            <div><strong>Naturalidade:</strong> -</div>
                            <div><strong>Investigação:</strong> <span class="banco-dados">${obterBancoDadosPessoa(p)}</span> <span class="origem">Origem: ${obterOrigemPessoa(p)}</span></div>
                        </div>
                    </div>
                `;
            });
            html += `</div>`;
        }

        if (cntVeiculo > 0) {
            html += `<div class="tipo-resultado" id="tipo-veiculo" style="${abaInicial === "veiculo" ? "" : "display:none;"}">`;
            resultados.veiculo.forEach((p, idx) => {
                const indexGlobal = dados.indexOf(p);
                if (p.VEICULO_1_PLACA) {
                    const veiculo1Data = {
                        marca: p.VEICULO_1_MARCA || "",
                        modelo: p.VEICULO_1_MODELO || "",
                        placa: p.VEICULO_1_PLACA || "",
                        ano: p.VEICULO_1_ANO || "",
                        cor: p.VEICULO_1_COR || "",
                        renavam: p.VEICULO_1_RENAVAM_FICTICIO || "",
                        numero: 1
                    };
                    html += `
                        <div class="card-resultado" data-index="${indexGlobal}" data-veiculo="${encodeURIComponent(JSON.stringify(veiculo1Data))}"${obterEstiloCard(p)}>
                            <div class="card-titulo">${p.VEICULO_1_MARCA} ${p.VEICULO_1_MODELO}</div>
                            <div class="card-info">
                                <div><strong>Placa:</strong> ${p.VEICULO_1_PLACA || ""}</div>
                                <div><strong>Ano:</strong> ${p.VEICULO_1_ANO || ""}</div>
                                <div><strong>Cor:</strong> ${p.VEICULO_1_COR || ""}</div>
                                <div><strong>Proprietário:</strong> ${obterNomePessoa(p) || ""}</div>
                                <div><strong>Investigação:</strong> <span class="banco-dados">BANCO DE DADOS VEICULAR</span> <span class="origem">Origem: ${p.BASE_FICTICIA_VEICULO || p.BASE_FICTICIA || ""}</span></div>
                            </div>
                        </div>
                    `;
                }
                if (p.VEICULO_2_PLACA) {
                    const veiculo2Data = {
                        marca: p.VEICULO_2_MARCA || "",
                        modelo: p.VEICULO_2_MODELO || "",
                        placa: p.VEICULO_2_PLACA || "",
                        ano: p.VEICULO_2_ANO || "",
                        cor: p.VEICULO_2_COR || "",
                        renavam: p.VEICULO_2_RENAVAM_FICTICIO || "",
                        numero: 2
                    };
                    html += `
                        <div class="card-resultado" data-index="${indexGlobal}" data-veiculo="${encodeURIComponent(JSON.stringify(veiculo2Data))}"${obterEstiloCard(p)}>
                            <div class="card-titulo">${p.VEICULO_2_MARCA} ${p.VEICULO_2_MODELO}</div>
                            <div class="card-info">
                                <div><strong>Placa:</strong> ${p.VEICULO_2_PLACA || ""}</div>
                                <div><strong>Ano:</strong> ${p.VEICULO_2_ANO || ""}</div>
                                <div><strong>Cor:</strong> ${p.VEICULO_2_COR || ""}</div>
                                <div><strong>Proprietário:</strong> ${obterNomePessoa(p) || ""}</div>
                                <div><strong>Investigação:</strong> <span class="banco-dados">BANCO DE DADOS VEICULAR</span> <span class="origem">Origem: ${p.BASE_FICTICIA_VEICULO || p.BASE_FICTICIA || ""}</span></div>
                            </div>
                        </div>
                    `;
                }
            });
            html += `</div>`;
        }

        html += `<div class="tipo-resultado" id="tipo-pix" style="${abaInicial === "pix" ? "" : "display:none;"}">`;
        if (cntPix > 0) {
            resultados.pix.forEach(p => {
                const indexGlobal = dados.indexOf(p);
                html += `
                    <div class="card-resultado" onclick="abrirDetalhe(${indexGlobal}, 'pix')"${obterEstiloCard(p)}>
                        <div class="card-titulo">CONSULTA PIX: ${p.CHAVE_PIX || ""}</div>
                        <div class="card-info">
                            <div><strong>Chave:</strong> ${p.CHAVE_PIX || ""}</div>
                            <div><strong>Tipo:</strong> ${p.CHAVE_PIX_TIPO || ""}</div>
                            <div><strong>Status:</strong> ${p.CHAVE_PIX_STATUS || ""}</div>
                            <div><strong>CPF:</strong> ${p.CPF_FICTICIO || p.CPF || ""}</div>
                            <div><strong>Nome Proprietário:</strong> ${obterNomePessoa(p) || ""}</div>
                            <div><strong>Investigação:</strong> <span class="banco-dados">CONSULTA PIX</span> <span class="origem">Origem: ${p.BASE_FICTICIA_PESSOA || p.BASE_FICTICIA || ""}</span></div>
                        </div>
                    </div>
                `;
            });
        } else {
            html += `<div class="resultado">Nenhuma chave PIX relacionada encontrada.</div>`;
        }
        html += `</div>`;

        html += `<div class="tipo-resultado" id="tipo-boletim" style="${abaInicial === "boletim" ? "" : "display:none;"}">`;
        if (cntBoletim > 0) {
            resultados.boletim.forEach(item => {
                const pessoa = item.pessoa || {};
                const boletim = item.boletim || {};
                const indexGlobal = dados.indexOf(pessoa);
                html += `
                    <div class="card-resultado" onclick="abrirDetalhe(${indexGlobal}, 'boletim')"${obterEstiloCard(pessoa)}>
                        <div class="card-titulo">BOLETIM OCORRENCIA - ${pessoa.NOME_COMPLETO || ""}</div>
                        <div class="card-info">
                            <div><strong>Data:</strong> ${boletim.DATA || ""} <strong>Horario:</strong> ${boletim.HORARIO || ""}</div>
                            <div><strong>Local:</strong> ${boletim.LOCAL || ""}</div>
                            <div><strong>Natureza:</strong> ${boletim.NATUREZA || ""}</div>
                            <div><strong>Unidade:</strong> ${boletim.ORGAO || ""} - ${boletim.CIDADE_UNIDADE || ""}</div>
                            <div><strong>Envolvido:</strong> ${pessoa.NOME_COMPLETO || ""} - CPF ${pessoa.CPF_FICTICIO || ""}</div>
                            <div><strong>Historico:</strong> ${boletim.HISTORICO || ""}</div>
                        </div>
                    </div>
                `;
            });
        } else {
            html += `<div class="resultado">Nenhum boletim de ocorrencia relacionado encontrado.</div>`;
        }
        html += `</div>`;

        if (cntArma > 0) {
            html += `<div class="tipo-resultado" id="tipo-arma" style="${abaInicial === "arma" ? "" : "display:none;"}"><div class="resultado">Nenhuma arma relacionada encontrada.</div></div>`;
        }

        html += `</div>`;
        atualizarResumoResultados(totalEncontrados);
    }

    resultadoEl.innerHTML = html;
}

function filtrarResultados(tipo, botao = null) {
    document.querySelectorAll(".tipo-resultado").forEach(el => el.style.display = "none");
    document.querySelectorAll(".aba-btn").forEach(btn => btn.classList.remove("aba-ativo"));

    if (tipo === "pessoa") {
        const tipoPessoa = document.getElementById("tipo-pessoa");
        if (tipoPessoa) {
            tipoPessoa.style.display = "block";
        }
    } else if (tipo === "veiculo") {
        const tipoVeiculo = document.getElementById("tipo-veiculo");
        if (tipoVeiculo) {
            tipoVeiculo.style.display = "block";
        }
    } else if (tipo === "pix") {
        const tipoPix = document.getElementById("tipo-pix");
        if (tipoPix) {
            tipoPix.style.display = "block";
        }
    } else if (tipo === "boletim") {
        const tipoBoletim = document.getElementById("tipo-boletim");
        if (tipoBoletim) {
            tipoBoletim.style.display = "block";
        }
    } else if (tipo === "arma") {
        const tipoArma = document.getElementById("tipo-arma");
        if (tipoArma) {
            tipoArma.style.display = "block";
        }
    }

    if (botao) {
        botao.classList.add("aba-ativo");
    }
}

let registroSelecionado = null;
let tipoSelecionado = "pessoa";
let veiculoSelecionado = null;

function montarSecaoDetalhe(titulo, conteudo, expandido = true) {
    return `
        <div class="detalhe-secao ${expandido ? "expandido" : ""}">
            <div class="detalhe-secao-titulo" onclick="toggleSecao(this)">
                <span class="icone"><i class="fa-solid fa-chevron-down"></i></span>
                <h4>${titulo}</h4>
            </div>
            <div class="detalhe-secao-conteudo">${conteudo}</div>
        </div>
    `;
}

function obterVeiculosPessoa(pessoa, veiculo = null) {
    const veiculos = [];

    if (veiculo) {
        veiculos.push(veiculo);
        return veiculos;
    }

    if (pessoa.VEICULO_1_PLACA) {
        veiculos.push({
            placa: pessoa.VEICULO_1_PLACA || "-",
            marca: pessoa.VEICULO_1_MARCA || "-",
            modelo: pessoa.VEICULO_1_MODELO || "-",
            ano: pessoa.VEICULO_1_ANO || "-",
            cor: pessoa.VEICULO_1_COR || "-",
            renavam: pessoa.VEICULO_1_RENAVAM_FICTICIO || "-"
        });
    }

    if (pessoa.VEICULO_2_PLACA) {
        veiculos.push({
            placa: pessoa.VEICULO_2_PLACA || "-",
            marca: pessoa.VEICULO_2_MARCA || "-",
            modelo: pessoa.VEICULO_2_MODELO || "-",
            ano: pessoa.VEICULO_2_ANO || "-",
            cor: pessoa.VEICULO_2_COR || "-",
            renavam: pessoa.VEICULO_2_RENAVAM_FICTICIO || "-"
        });
    }

    return veiculos;
}

function isPessoaJuridica(pessoa) {
    const cnpj = normalizarCPF(pessoa.CNPJ || pessoa.DOCUMENTO || pessoa.CPF_CNPJ || "");
    return Boolean(cnpj && cnpj.length === 14 && pessoa.CNPJ);
}

function gerarSecaoDadosPessoais(pessoa) {
    const dataAtualizacao = pessoa.DATA_ATUALIZACAO || pessoa.DATA_ATUALIZACAO_ORIGEM || "30/11/2025";
    const enderecoPrincipal = [
        pessoa.LOGRADOURO,
        pessoa.NUMERO,
        pessoa.COMPLEMENTO ? `(${pessoa.COMPLEMENTO})` : "",
        pessoa.CIDADE,
        pessoa.UF ? `/${pessoa.UF}` : "",
        pessoa.CEP ? `CEP ${pessoa.CEP}` : ""
    ].filter(parte => String(parte || "").trim() !== "").join(" - ");
    const enderecoSecundario = String(pessoa.ENDERECO_2 || "").trim();
    const tags = String(pessoa.TAGS || "").trim();

    if (isPessoaJuridica(pessoa)) {
        return montarSecaoDetalhe("Dados Jurídicos", `
            <div class="detalhe-campo"><strong>Tags:</strong> ${tags || "-"}</div>
            <div class="detalhe-campo"><strong>CNPJ:</strong> ${pessoa.CNPJ || pessoa.DOCUMENTO || "-"}</div>
            <div class="detalhe-campo"><strong>Matriz/Filial:</strong> ${pessoa.MATRIZ_FILIAL || "-"}</div>
            <div class="detalhe-campo"><strong>Empresa (Razão Social):</strong> ${pessoa.PJ_RAZAO_SOCIAL || pessoa.NOME_COMPLETO || "-"}</div>
            <div class="detalhe-campo"><strong>Nome Fantasia:</strong> ${pessoa.NOME_FANTASIA || "-"}</div>
            <div class="detalhe-campo"><strong>Administrador / Responsável:</strong> ${pessoa.ADMINISTRADOR_RESPONSAVEL || "-"}</div>
            <div class="detalhe-campo"><strong>CPF do Responsável:</strong> ${pessoa.CPF_RESPONSAVEL || "-"}</div>
            <div class="detalhe-campo"><strong>RG do Responsável:</strong> ${pessoa.RG_RESPONSAVEL || "-"}</div>
            <div class="detalhe-campo"><strong>Endereço:</strong> ${enderecoPrincipal || "-"}</div>
            <div class="detalhe-campo"><strong>Endereço 2:</strong> ${enderecoSecundario || "-"}</div>
            <div class="detalhe-campo"><strong>Telefone:</strong> ${pessoa.TELEFONE_1 || "-"}</div>
            <div class="detalhe-campo"><strong>Email:</strong> ${pessoa.EMAIL_1 || "-"}</div>
            <div class="detalhe-campo"><strong>Situação Cadastral:</strong> ${pessoa.SITUACAO_CADASTRAL || "-"}</div>
            <div class="detalhe-campo"><strong>Data da Situação Cadastral:</strong> ${pessoa.DATA_SITUACAO_CADASTRAL || "-"}</div>
            <div class="detalhe-campo"><strong>Natureza Jurídica:</strong> ${pessoa.NATUREZA_JURIDICA || "-"}</div>
            <div class="detalhe-campo"><strong>Data de Início da Atividade:</strong> ${pessoa.DATA_INICIO_ATIVIDADE || "-"}</div>
            <div class="detalhe-campo"><strong>Porte:</strong> ${pessoa.PORTE_EMPRESA || "-"}</div>
            <div class="detalhe-campo"><strong>NIRE:</strong> ${pessoa.NIRE || "-"}</div>
            <div class="detalhe-campo"><strong>Capital Social:</strong> ${pessoa.CAPITAL_SOCIAL || "-"}</div>
            <div class="detalhe-campo"><strong>Atividade Principal (CNAE):</strong> ${pessoa.CNAE_PRINCIPAL || "-"}</div>
            <div class="detalhe-campo"><strong>Atividades Secundárias:</strong> ${[
                pessoa.CNAE_SECUNDARIO_1,
                pessoa.CNAE_SECUNDARIO_2,
                pessoa.CNAE_SECUNDARIO_3
            ].filter(item => String(item || "").trim() !== "").join("; ") || "-"}</div>
            <div class="detalhe-campo"><strong>Quadro Societário:</strong></div>
            <div class="detalhe-campo"><strong>• SÓCIO_PJ:</strong> ${pessoa.SOCIO_PJ || "-"}</div>
            <div class="detalhe-campo"><strong>• SÓCIO_PF:</strong> ${pessoa.SOCIO_PF || "-"}</div>
            <div class="detalhe-campo"><strong>• SÓCIO_EXT:</strong> ${pessoa.SOCIO_EXT || "-"}</div>
            ${pessoa.CONTADOR ? `<div class="detalhe-campo"><strong>Contador:</strong> ${pessoa.CONTADOR}</div>` : ""}
            ${pessoa.CPF_CONTADOR ? `<div class="detalhe-campo"><strong>CPF do Contador:</strong> ${pessoa.CPF_CONTADOR}</div>` : ""}
            ${pessoa.TELEFONE_CONTADOR ? `<div class="detalhe-campo"><strong>Telefone do Contador:</strong> ${pessoa.TELEFONE_CONTADOR}</div>` : ""}
            <div class="detalhe-campo"><strong>Data da Atualização:</strong> ${dataAtualizacao}</div>
        `);
    }

    const rgPessoa = pessoa.RG_NUMERO
        ? `${pessoa.RG_NUMERO}${pessoa.RG_ORGAO_EMISSOR ? ` - ${pessoa.RG_ORGAO_EMISSOR}` : ""}`
        : "-";
    const enderecoPrincipalPartesPessoa = [
        pessoa.LOGRADOURO,
        pessoa.NUMERO,
        pessoa.BAIRRO,
        (pessoa.CIDADE || pessoa.UF) ? `${pessoa.CIDADE || ""}/${pessoa.UF || ""}` : "",
        pessoa.CEP ? `CEP ${pessoa.CEP}` : ""
    ].filter(parte => String(parte || "").trim() !== "");
    const complementoEnderecoPessoa = pessoa.COMPLEMENTO ? `(${String(pessoa.COMPLEMENTO).trim()})` : "";
    const enderecoPrincipalPessoa = [...enderecoPrincipalPartesPessoa, complementoEnderecoPessoa]
        .filter(parte => String(parte || "").trim() !== "")
        .join(", ");
    const enderecoSecundarioPessoa = String(pessoa.ENDERECO_2 || "").trim();

    return montarSecaoDetalhe("Dados Pessoais", `
        <div class="detalhe-campo"><strong>Nome:</strong> ${pessoa.NOME_COMPLETO || ""}</div>
        <div class="detalhe-campo"><strong>CPF:</strong> ${obterCPF(pessoa) || "-"}</div>
        <div class="detalhe-campo"><strong>RG:</strong> ${rgPessoa}</div>
        <div class="detalhe-campo"><strong>Data de Nascimento:</strong> ${pessoa.DATA_NASCIMENTO || "-"}</div>
        <div class="detalhe-campo"><strong>Genitor 1:</strong> ${pessoa.NOME_MAE || "-"}</div>
        <div class="detalhe-campo"><strong>Genitor 2:</strong> ${pessoa.NOME_PAI || "-"}</div>
        <div class="detalhe-campo"><strong>Naturalidade:</strong> ${pessoa.NATURALIDADE || "-"}</div>
        <div class="detalhe-campo"><strong>UF Naturalidade:</strong> ${pessoa.UF_NATURALIDADE || "-"}</div>
        <div class="detalhe-campo"><strong>Estado Civil:</strong> ${pessoa.ESTADO_CIVIL || "-"}</div>
        <div class="detalhe-campo"><strong>Profissão:</strong> ${pessoa.PROFISSAO || "-"}</div>
        ${Array.isArray(pessoa.ENDERECOS) && pessoa.ENDERECOS.length > 0
            ? pessoa.ENDERECOS.map((end, i) => `<div class="detalhe-campo"><strong>Endereço ${i + 1}:</strong> ${end}</div>`).join("")
            : `<div class="detalhe-campo"><strong>Endereço:</strong> ${enderecoPrincipalPessoa || "-"}</div>
        <div class="detalhe-campo"><strong>Endereço 2:</strong> ${enderecoSecundarioPessoa || "-"}</div>`}
        <div class="detalhe-campo"><strong>Data da Atualização:</strong> ${dataAtualizacao}</div>
    `);
}

function gerarSecaoVeiculos(pessoa, veiculo = null) {
    if (Array.isArray(pessoa.VEICULOS_LISTA) && pessoa.VEICULOS_LISTA.length > 0 && !veiculo) {
        return montarSecaoDetalhe("Veículos",
            pessoa.VEICULOS_LISTA.map((v, i) => `<div class="detalhe-campo"><strong>Veículo ${i + 1}:</strong> ${v}</div>`).join("")
        );
    }

    const veiculos = obterVeiculosPessoa(pessoa, veiculo);

    if (veiculos.length === 0) {
        return montarSecaoDetalhe("Veículos", `<div class="detalhe-msg-vazia">Nenhum resultado encontrado.</div>`);
    }

    return montarSecaoDetalhe("Veículos", `
        <table class="detalhe-tabela" style="font-size:24px;">
            <thead>
                <tr>
                    <th style="font-size:24px;">Placa</th><th></th>
                    <th style="font-size:24px;">Marca/Modelo</th><th></th>
                    <th style="font-size:24px;">Ano</th><th></th>
                    <th style="font-size:24px;">Cor</th><th></th>
                    <th style="font-size:24px;">RENAVAM</th><th></th>
                </tr>
            </thead>
            <tbody>
                ${veiculos.map(item => `
                    <tr>
                        <td>${item.placa || "-"}</td><td></td>
                        <td>${item.marca || "-"} ${item.modelo || "-"}</td><td></td>
                        <td>${item.ano || "-"}</td><td></td>
                        <td>${item.cor || "-"}</td><td></td>
                        <td>${item.renavam || "-"}</td><td></td>
                    </tr>
                `).join("")}
            </tbody>
        </table>
    `);
}

function gerarSecaoVoos(pessoa) {
    const voos = Array.isArray(pessoa.VOOS) ? pessoa.VOOS : [];

    if (voos.length === 0) {
        return montarSecaoDetalhe("Dados dos Voos", `<div class="detalhe-msg-vazia">Nenhum resultado encontrado.</div>`);
    }

    return montarSecaoDetalhe("Dados dos Voos", `
        <div class="detalhe-tabela-wrapper">
            <table class="detalhe-tabela detalhe-tabela-voos">
                <thead>
                    <tr>
                        <th>Identificação do Voo <span class="th-acoes"><i class="fa-solid fa-arrow-up-down"></i> <i class="fa-solid fa-filter"></i></span></th>
                        <th>Companhia Aérea <span class="th-acoes"><i class="fa-solid fa-arrow-up-down"></i> <i class="fa-solid fa-filter"></i></span></th>
                        <th>Data Origem <span class="th-acoes"><i class="fa-solid fa-arrow-up-down"></i> <i class="fa-solid fa-filter"></i></span></th>
                        <th>Hora Origem <span class="th-acoes"><i class="fa-solid fa-arrow-up-down"></i> <i class="fa-solid fa-filter"></i></span></th>
                        <th>Data Destino <span class="th-acoes"><i class="fa-solid fa-arrow-up-down"></i> <i class="fa-solid fa-filter"></i></span></th>
                        <th>Hora Destino <span class="th-acoes"><i class="fa-solid fa-arrow-up-down"></i> <i class="fa-solid fa-filter"></i></span></th>
                        <th>Assento no Voo <span class="th-acoes"><i class="fa-solid fa-arrow-up-down"></i> <i class="fa-solid fa-filter"></i></span></th>
                        <th>Aeroporto de Origem <span class="th-acoes"><i class="fa-solid fa-arrow-up-down"></i> <i class="fa-solid fa-filter"></i></span></th>
                        <th>Aeroporto do Primeiro Destino <span class="th-acoes"><i class="fa-solid fa-arrow-up-down"></i> <i class="fa-solid fa-filter"></i></span></th>
                    </tr>
                </thead>
                <tbody>
                    ${voos.map(v => `
                        <tr>
                            <td>${v.id || v.localizador || "-"}</td>
                            <td>${v.cia || v.companhia || "-"}</td>
                            <td>${v.dataOrigem || v.dataDecolagem || "-"}</td>
                            <td>${v.horaOrigem || v.horaDecolagem || "-"}</td>
                            <td>${v.dataDestino || v.dataAterrissagem || "-"}</td>
                            <td>${v.horaDestino || v.horaAterrissagem || "-"}</td>
                            <td>${v.assento || v.bagagem || "-"}</td>
                            <td>${v.origem || v.aeroportoPartida || "-"}</td>
                            <td>${v.destino || v.aeroportoChegada || "-"}</td>
                        </tr>
                    `).join("")}
                </tbody>
            </table>
        </div>
    `);
}

function gerarSecaoPix(pessoa) {
    if (String(pessoa.CHAVE_PIX || "").trim() === "") {
        return montarSecaoDetalhe("Consulta PIX", `<div class="detalhe-msg-vazia">Nenhum resultado encontrado.</div>`);
    }

    return montarSecaoDetalhe("Consulta PIX", `
        <div class="detalhe-campo"><strong>Chave PIX:</strong> ${pessoa.CHAVE_PIX || "-"}</div>
        <div class="detalhe-campo"><strong>Tipo:</strong> ${pessoa.CHAVE_PIX_TIPO || "-"}</div>
        <div class="detalhe-campo"><strong>Status:</strong> ${pessoa.CHAVE_PIX_STATUS || "-"}</div>
        <div class="detalhe-campo"><strong>Nome do Titular:</strong> ${pessoa.NOME_COMPLETO || "-"}</div>
        <div class="detalhe-campo"><strong>CPF:</strong> ${obterCPF(pessoa) || "-"}</div>
    `);
}

function gerarSecaoBoletins(pessoa) {
    const boletins = Array.isArray(pessoa.BOLETINS) ? pessoa.BOLETINS : [];

    if (boletins.length === 0) {
        return montarSecaoDetalhe("Boletim Ocorrencia", `<div class="detalhe-msg-vazia">Nenhum resultado encontrado.</div>`);
    }

    return montarSecaoDetalhe("Boletim Ocorrencia", `
        ${boletins.map(boletim => `
            <div class="detalhe-campo"><strong>Data:</strong> ${boletim.DATA || "-"}</div>
            <div class="detalhe-campo"><strong>Horário:</strong> ${boletim.HORARIO || "-"}</div>
            <div class="detalhe-campo"><strong>Local:</strong> ${boletim.LOCAL || "-"}</div>
            <div class="detalhe-campo"><strong>Natureza:</strong> ${boletim.NATUREZA || "-"}</div>
            <div class="detalhe-campo"><strong>Unidade:</strong> ${boletim.ORGAO || "-"} ${boletim.CIDADE_UNIDADE ? `- ${boletim.CIDADE_UNIDADE}` : ""}</div>
            <div class="detalhe-campo"><strong>Histórico:</strong> ${boletim.HISTORICO || "-"}</div>
            <hr style="border:none; border-top:1px solid #d6dde8; margin:14px 0;">
        `).join("")}
    `);
}

function gerarSecaoArmas(pessoa) {
    const armas = Array.isArray(pessoa.ARMAS) ? pessoa.ARMAS : [];

    if (armas.length === 0) {
        return montarSecaoDetalhe("Armas", `<div class="detalhe-msg-vazia">Nenhum resultado encontrado.</div>`);
    }

    return montarSecaoDetalhe("Armas", `
        ${armas.map(arma => {
            if (arma.especie || arma.numeroSINARM || arma.marca) {
                return `
                    <div class="detalhe-campo"><strong>ARMA: ${arma.serie || "-"}</strong></div>
                    <div class="detalhe-campo"><strong>Espécie:</strong> ${arma.especie || "-"}</div>
                    <div class="detalhe-campo"><strong>Número SINARM:</strong> ${arma.numeroSINARM || "-"}</div>
                    <div class="detalhe-campo"><strong>Registro:</strong> ${arma.registro || "-"}</div>
                    <div class="detalhe-campo"><strong>Marca:</strong> ${arma.marca || "-"}</div>
                    <div class="detalhe-campo"><strong>Modelo:</strong> ${arma.modelo || "-"}</div>
                    <div class="detalhe-campo"><strong>Calibre:</strong> ${arma.calibre || "-"}</div>
                    <div class="detalhe-campo"><strong>Série:</strong> ${arma.serie || "-"}</div>
                    <div class="detalhe-campo"><strong>Tipo de Acabamento:</strong> ${arma.tipoAcabamento || "-"}</div>
                    <div class="detalhe-campo"><strong>Capacidade de Tiro:</strong> ${arma.capacidadeTiro || "-"}</div>
                    <div class="detalhe-campo"><strong>Comprimento do Cano:</strong> ${arma.comprimentoCano || "-"}</div>
                    <div class="detalhe-campo"><strong>Quantidade de Canos:</strong> ${arma.quantidadeCanos || "-"}</div>
                    <div class="detalhe-campo"><strong>Tipo da Alma:</strong> ${arma.tipoAlma || "-"}</div>
                    <div class="detalhe-campo"><strong>Quantidade de Raias:</strong> ${arma.quantidadeRaias || "-"}</div>
                    <div class="detalhe-campo"><strong>Sentido da Raia:</strong> ${arma.sentidoRaia || "-"}</div>
                    <div class="detalhe-campo"><strong>País de Fabricação:</strong> ${arma.paisFabricacao || "-"}</div>
                    <div class="detalhe-campo"><strong>Tipo de Funcionamento:</strong> ${arma.tipoFuncionamento || "-"}</div>
                    <div class="detalhe-campo"><strong>Situação:</strong> ${arma.ativo || "-"}</div>
                    <hr style="border:none; border-top:1px solid #d6dde8; margin:14px 0;">
                `;
            }
            return `
                <div class="detalhe-campo"><strong>Tipo:</strong> ${arma.tipo || "-"}</div>
                <div class="detalhe-campo"><strong>Situação:</strong> ${arma.ativo || "-"}</div>
                <div class="detalhe-campo"><strong>Data de Aquisição:</strong> ${arma.dataAquisicao || "-"}</div>
                <hr style="border:none; border-top:1px solid #d6dde8; margin:14px 0;">
            `;
        }).join("")}
    `);
}

function abrirDetalhe(index, tipo = "pessoa", veiculo = null) {
    registroSelecionado = dados[index];
    tipoSelecionado = tipo;
    veiculoSelecionado = veiculo;
    
    document.getElementById("resultado").style.display = "none";
    document.getElementById("detalhe-container").classList.add("ativo");
    
    if (tipo === "veiculo") {
        document.getElementById("det-nome").textContent = `${veiculo.marca || ""} ${veiculo.modelo || ""}`.trim() || registroSelecionado.NOME_COMPLETO || "";
        document.getElementById("det-investigacoes").innerHTML = `<strong>Investigação:</strong> <a href="#" style="color:#1f5f8f; text-decoration:underline;">Nenhum caso</a>`;
        document.getElementById("det-origem").innerHTML = `<strong>Origem:</strong> ${registroSelecionado.BASE_FICTICIA_VEICULO || registroSelecionado.BASE_FICTICIA || ""}`;
        gerarSecoesVeiculo();
    } else {
        const mapaTitulos = {
            pessoa: registroSelecionado.NOME_COMPLETO || "",
            veiculos: registroSelecionado.NOME_COMPLETO || "",
            voos: registroSelecionado.NOME_COMPLETO || "",
            pix: `CONSULTA PIX: ${registroSelecionado.CHAVE_PIX || registroSelecionado.NOME_COMPLETO || ""}`,
            boletim: `BOLETIM OCORRENCIA - ${registroSelecionado.NOME_COMPLETO || ""}`,
            arma: registroSelecionado.NOME_COMPLETO || ""
        };
        const mapaOrigens = {
            pessoa: obterOrigemPessoa(registroSelecionado),
            veiculos: registroSelecionado.BASE_FICTICIA_VEICULO || registroSelecionado.BASE_FICTICIA || "",
            voos: "Base Interna - Consulta Voo (Simulacao)",
            pix: "CONSULTA PIX",
            boletim: obterOrigemPessoa(registroSelecionado),
            arma: "BANCO DE DADOS ARMAS"
        };

        const investigacaoTexto = registroSelecionado.INVESTIGACOES || "Nenhum caso";
        const investigacaoHtml = registroSelecionado.INVESTIGACOES
            ? `<strong>Investigação:</strong> ${destacarTexto(investigacaoTexto)}`
            : `<strong>Investigação:</strong> <a href="#" style="color:#1f5f8f; text-decoration:underline;">${destacarTexto(investigacaoTexto)}</a>`;

        document.getElementById("det-nome").textContent = mapaTitulos[tipo] || registroSelecionado.NOME_COMPLETO || "";
        document.getElementById("det-investigacoes").innerHTML = investigacaoHtml;
        document.getElementById("det-origem").innerHTML = `<strong>Origem:</strong> ${mapaOrigens[tipo] || registroSelecionado.BASE_FICTICIA_PESSOA || registroSelecionado.BASE_FICTICIA || ""}`;
        gerarSecoes();
    }
}

function irPaginaInicial() {
    const buscaEl = document.getElementById("busca");
    const resultadoEl = document.getElementById("resultado");
    const detalheEl = document.getElementById("detalhe-container");
    const painelInsercaoEl = document.getElementById("painel-insercao");

    if (buscaEl) {
        buscaEl.value = "";
    }

    if (detalheEl) {
        detalheEl.classList.remove("ativo");
    }

    if (resultadoEl) {
        resultadoEl.style.display = "block";
        resultadoEl.innerHTML = "";
    }

    if (painelInsercaoEl) {
        painelInsercaoEl.classList.remove("ativo");
    }

    atualizarDestaqueBusca("");
    atualizarResumoResultados(0);
    exibirStatusInsercao("");

    registroSelecionado = null;
    tipoSelecionado = "pessoa";
    veiculoSelecionado = null;
    tempVeiculo = null;

    window.scrollTo({ top: 0, behavior: "smooth" });
}

function voltarBusca() {
    document.getElementById("detalhe-container").classList.remove("ativo");
    document.getElementById("resultado").style.display = "block";
    registroSelecionado = null;
}

function gerarSecoes() {
    const p = registroSelecionado;
    let html = gerarSecaoDadosPessoais(p);

    if (tipoSelecionado === "veiculos") {
        html += gerarSecaoVeiculos(p);
    } else if (tipoSelecionado === "voos") {
        html += gerarSecaoVoos(p);
    } else if (tipoSelecionado === "pix") {
        html += gerarSecaoPix(p);
    } else if (tipoSelecionado === "boletim") {
        html += gerarSecaoBoletins(p);
    } else if (tipoSelecionado === "arma") {
        html += gerarSecaoArmas(p);
    }

    document.getElementById("det-conteudo-secoes").innerHTML = html;
}

function gerarSecoesVeiculo() {
    const p = registroSelecionado;
    const html = gerarSecaoDadosPessoais(p) + gerarSecaoVeiculos(p, veiculoSelecionado);
    document.getElementById("det-conteudo-secoes").innerHTML = html;
}

function toggleSecao(elem) {
    const secao = elem.closest(".detalhe-secao");
    secao.classList.toggle("expandido");
}

function expandirTodasSecoes() {
    document.querySelectorAll("#det-conteudo-secoes .detalhe-secao").forEach(secao => {
        secao.classList.add("expandido");
    });
}

function recolherTodasSecoes() {
    document.querySelectorAll("#det-conteudo-secoes .detalhe-secao").forEach(secao => {
        secao.classList.remove("expandido");
    });
}

function gerarGrafo() {
    alert("Funcionalidade de gerar grafo será implementada.");
}

function adicionarFavorito() {
    alert("Funcionalidade de adicionar favoritos será implementada.");
}