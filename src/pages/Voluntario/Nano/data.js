import generateData from '../../../data/dataCommon.js'

const nanoData = [
    {
        ano: 2036,
        sucesso: true,
        nome: {
            nome: 'Vulgo',
            familia: '"NB"',
        },
        data: {
            idade: 28,
            cpf: '694.206.669-24',
            filiacao: {
                parente1: undefined,
                parente2: undefined,
            },
            origem: 'O sujeito se voluntariou, com propósito únicamente estético, visando melhorar seu visual e estima.',
            abordagem: 'O voluntário recebeu um implante externo contendo nanorobôs programadas para atingir o efeito necessário.',
            resultados: 'O implante do voluntário reage dependendo da sua atividade cerebral, modificando sua forma e cor. Tal resultado fez o voluntário divar horrores.',
            procedimentos: ['O voluntário pôde voltar a normalidade.'],
            fotoBiometria: '1'
        }
    },
]

const anos = [2036, 2037]
const porcentagemSucesso = 65
const idade = [18, 60]
const origens = [
    'O sujeito se voluntariou, em troca do benefício financeiro oferecido pelo projeto.' , 
    'O sujeito é paraplégico e se voluntariou, com o objetivo de recuperar funções motoras .' , 
    'O sujeito se voluntariou, devido a uma lesão grave na medula espinhal.' , 
    'O sujeito se voluntariou, com o objetivo de frear os efeitos do envelhecimento.',
    'O sujeito se voluntariou, com o objetivo de reverter alguns dos efeitos do envelhecimento.',
    'O sujeito se voluntariou, com propósito únicamente estético, visando melhorar seu visual e estima.',
    'O sujeito se voluntariou para reverter cicatrizes, com propósito únicamente estético.',
    'O sujeito se voluntariou para reverter anomalias na pele, com propósito únicamente estético.',
    'Devido a Guerra Latina, o sujeito foi gravemente ferido na fronteira com a Venezuela.',
    'O sujeito se voluntariou para tratar de uma recente queimadura de 3º grau.',
    'O sujeito se voluntariou para tratar de uma queimadura de 2º grau.',
    'O sujeito se voluntariou, buscando restaurar um órgão lesionado.',
    'O sujeito se voluntariou, buscando restaurar um órgão faltante.',
    'O sujeito foi encontrado com lesões recentes graves.',
    'O sujeito se voluntariou, buscando restaurar um membro amputado.',
    'O sujeito foi encontrado com um de seus membros amputados recentemente.' ,
    'O sujeito é portador de câncer em estado inicial, e se voluntariou para evitar o avanço da doença ',
    'O sujeito é portador de câncer em estado terminal, e se voluntariou para evitar insuficiência do órgão afetado.',
    'O sujeito é portador de insuficiência cardíaca, e se voluntariou para evitar falência dos órgãos.',
    'O sujeito é portador de um quadro diabético grave, e se voluntariou para evitar amputações necessárias decorrentes ao estado de sua doença.',
    'O sujeito sofreu uma fratura óssea, e se voluntariou para evitar arcar com custos de tratamentos.',
    'O sujeito se voluntariou, devido ao diagnóstico avançado de câncer de ██.',
    'O sujeito se voluntariou, buscando reverter um quadro de queda de cabelo avançado.',
    'O sujeito se voluntariou, buscando reverter um quadro de impotência sexual e perda de libido.',
    'O sujeito se voluntariou, na tentativa de reverter um quadro de infertilidade.',
    'O sujeito se voluntariou, buscando forçar infertilidade, com propósitos contraceptivos.',
    'O sujeito se voluntariou após diagnóstico irreversível de falência múltipla de órgãos.',
    'Após sofrer complicações devido a uma cirurgia prévia, o sujeito foi convocado a se voluntariar pelo posto de saúde, e aceitou.',
    'O sujeito estava em estado vegetativo e foi voluntariado pelos seus responsáveis legais, buscando melhora.',
    'O sujeito foi voluntariado pelos seus responsáveis legais, com o objetivo de interromper a progressão de uma doença degenerativa rara.',
    'O sujeito foi encaminhado por recomendação médica, diante de prognóstico de morte iminente.' ,
    'O sujeito foi enviado de um posto de saúde, onde profissionais qualificados julgaram sua situação como um caso perdido.' ,
    'O sujeito foi encontrado inconsciente, suficientemente preservado para os experimentos.',
]

const abordagens = [
    'O voluntário foi submetido à infusão controlada de nanorobôs regenerativas no tecido alvo.',
    'O voluntário foi submetido a uma injeção de nanorobôs em sua corrente sanguínea.',
    'O voluntário passou por substituição parcial de órgãos danificados por matrizes artificiais com suporte nanotecnológico.',
    'O voluntário recebeu um implante interno contendo nanorobôs programadas para reconstrução celular progressiva.',
    'O voluntário teve um dos órgãos lesionados integrado a uma máquina interna auxiliar.',
    'O voluntário passou por reativação forçada de regiões necróticas, utilizando nanorobôs capazes de emitir estímulos elétricos.',
    'As lesões do voluntário foram tratadas com uma rede de nanorobôs.',
    'O voluntário foi submetido a uma série de cirurgias guiadas única e exclusivamente por nanorobôs autônomos.',
    'Durante todo o período de experimentos, o voluntário foi instruído a consumir capsulas biodegradáveis, que continham nanorobôs.',
    'O voluntário foi colocado em câmara hiperbárica para potencializar a ação das nanomáquinas implantadas.',
    'O voluntário recebeu transplantes de um tecido nanorobotico que simula o funcionamento do órgão alvo.',
]
const resultados = [
    ['O voluntário apresentou regeneração do tecido alvo, excedendo as previsões iniciais.',
    'O voluntário recuperou parcialmente funções orgânicas comprometidas, sem sinais aparentes de rejeição.',
    'O voluntário apresentou regeneração levemente acelerada do tecido alvo.',
    'O voluntário recuperou-se rapidamente de cada experimento.',
    'Três anos da idade biológica do voluntário foram restaurados.',
    'Cinco anos da idade biológica do voluntário foram restaurados.',
    'O corpo do voluntário aceitou bem o implante.',
    'A rede de nanotecnologia manteve comunicação estável por todo período dos experimentos, assim como o seu sistema de monitoramento manteve contato.',
    'O voluntário demonstrou melhora expressiva em exames de imagem realizados no pós-operatório.',
    'O voluntário não demonstrou melhora significativa em seu quadro, porém o corpo não rejeitou ou sofreu com a abordagem escolhida.',
    'O uso de nanotecnologia resultou não só em melhora no quadro a ser tratado, mas também em outras complicações não explicitadas pelo voluntário.',
    'O equipamento implantado no voluntário aumentou a capacidade do seu organismo... até demais.',
    ], 
    ['O voluntário desenvolveu massas teciduais descontroladas, levando à necessidade de remoção urgente.',
    'A regeneração apresentou falhas graves, resultando em crescimento assimétrico de órgãos.',
    'A comunicação necessária para a nanotecnologia foi comprometida, levando a deformações nos tecídos.',
    'O voluntário sofreu dor extrema e deformidades causadas por replicação celular fora de controle.',
    'O voluntário se ██████████████',
    'O voluntário explodiu.',
    'Alguns tecidos orgânicos do voluntário se fundiram completamente com a nanotecnologia, impossibilitando uma forma estável.',
    'O corpo do voluntário se liquefez.',
    'O voluntário desenvolveu lesões purulentas e necrose no local tratado.',
    'Após a abordagem, voluntário apresentou um quadro contínuo de falência múltipla dos órgãos.',
    'O corpo do voluntário rejeitou completamente as nanomáquinas, provocando ██████████████████.',
    'O voluntário foi encontrado em estado de mutação irreversível, exigindo contenção imediata.',
    'O processo de encerramento da replicação celular falhou, resultando em protuberâncias disformes.',
    'O voluntário sofreu perda total de consciência, mantendo apenas reflexos motores involuntários. Irônico né...',
    'O voluntário apresentou █████████████.',
    'De acordo com os relatos dos agentes presentes, o voluntário se tornou um █████████████.',
    '"O voluntário se tornou um monstro".',
    'Error', 'null', 'NaN']
]

const procedimentos = [
    ['O voluntário continuará recebendo o benefício até o prazo estipulado no contrato.' , 
    'O voluntário será acompanhado semanalmente para monitoramento das alterações teciduais.',
    'O voluntário foi transferido para o Local SP-4 para acompanhamento prolongado.',
    'O voluntário continuará recebendo auxílio da organização durante a recuperação.',
    'Nova coleta de material regenerado agendada para estudo interno.',
    'O voluntário pôde voltar à normalidade, sendo monitorado por questões de segurança',
    'O voluntário se submeteu a coleta periódica de amostras sanguíneas e teciduais para análise.',
    'O voluntário se .',
], 
    ['O voluntário será mantido sob observação em ala restrita do projeto.',
    'Designar para ██████████████████ do projeto. Escolher a que seja mais distânte de preferência.',
    'Iniciar protocolo de neutralização imediata.',
    'Aplicar amnésicos nos envolvidos. Sem limitações',
    'Esterealizar área dos experimentos e o que restou do voluntário',
    'Procedimento de Ocultação de Nível 2',
    'Procedimento de Ocultação de Nível 3',
    'Localizar e neutralizar, tal qual seus próximos que tomaram conhecimento dos procedimentos.',
    'Procedimento de Ocultação de Nível ██ para registros associados ao voluntário.',
    'Forçar parada cardíaca com a opção de autodestruição instalada nos nanorobôs.',
    'Procedimento de contenção especial ativado devido a possível mutação irreversível.',
    'Error', 'null', 'NaN']
]

let dadosGerados = generateData(1248163264 , anos , porcentagemSucesso , idade , origens , abordagens , resultados , procedimentos)

nanoData.push(...dadosGerados)

export default nanoData