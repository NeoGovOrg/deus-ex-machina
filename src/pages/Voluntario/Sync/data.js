import generateData from '../../../data/dataCommon.js'

const syncData = [
    {
        ano: 2037,
        sucesso: true,
        nome: {
            nome: 'Virgil',
            familia: 'Almeida',
        },
        data: {
            idade: 12,
            cpf: '834.593.649-11',
            filiacao: {
                parente1: undefined,
                parente2: undefined,
            },
            origem: 'O sujeito foi voluntariado pelos seus responsáveis legais, em troca do benefício de suporte total à vida oferecido pelo projeto.',
            abordagem: 'O voluntário foi submetido aos experimentos de sincronização com um implante apropriado, com o objetivo de aprimorar a comunicação cérebro-máquina.',
            resultados: 'O voluntário apresentou alta taixa de sincronização com o implante e, por um breve momento, modificou o funcionamento de aparelhos ao redor.',
            procedimentos: ['O voluntário foi designado a uma comunidade controlada a parte, habitata por demais voluntários e supervisionada por agentes.' , 'Usar a opção de autodestruição dos implantes usados na época dos experimentos.'],
            fotoBiometria: '1'
        }
    },
    {
        ano: 2036,
        sucesso: true,
        nome: {
            nome: 'Milena',
            familia: 'Lobato Neves',
        },
        data: {
            idade: 12,
            cpf: '011.235.813-21',
            filiacao: {
                parente1: undefined,
                parente2: 'Josephina Lobato Neves',
            },
            origem: 'O sujeito foi voluntariado pelos seus responsáveis legais, em troca do benefício de suporte total à vida oferecido pelo projeto.',
            abordagem: 'O voluntário foi submetido aos experimentos de sincronização com um implante apropriado, com o objetivo de aprimorar a comunicação cérebro-máquina.',
            resultados: 'O voluntário apresentou alta taixa de sincronização com o implante e, por um breve momento, modificou o funcionamento de aparelhos ao redor.',
            procedimentos: ['O voluntário foi designado a uma comunidade controlada a parte, habitata por demais voluntários e supervisionada por agentes.' , 'Usar a opção de autodestruição dos implantes usados na época dos experimentos.'],
            fotoBiometria: '1'
        }
    },
]

const anos = [2036, 2037]
const porcentagemSucesso = 55
const idade = [4, 34]
const origens = [
    'O sujeito foi voluntariado pelos seus responsáveis legais, em troca do benefício de suporte à vida oferecido pelo projeto.' , 'O sujeito foi voluntariado pelos seus responsáveis legais, em troca do benefício de suporte à fome oferecido pelo projeto.' , 'O sujeito foi voluntariado pelos seus responsáveis legais, com o objetivo de tratar uma condição cerebral grave.' ,
    'O sujeito se voluntariou, em troca do benefício de suporte à vida oferecido pelo projeto.' , 'O sujeito se voluntariou, em troca do benefício à fome oferecido pelo projeto.' , 'O sujeito se voluntariou, com o objetivo de tratar uma condição cerebral grave.' ,
    'O sujeito foi encontrado com uma condição cerebral grave.' , 'O sujeito foi enviado de um posto de saúde, onde profissionais qualificados julgaram sua situação como uma causa perdida.' , 'O sujeito foi encontrado inconsciente, com o cérebro suficientemente preservado para os experimentos.'
]
const abordagens = [
    'O voluntário foi submetido aos experimentos de sincronização com um implante apropriado, com o objetivo de aprimorar a comunicação cérebro-máquina.' , 'O voluntário foi submetido a testes de raciocínio lógico após substituição de um de seus lobos cerebrais por um implante.' , 'O voluntário foi submetido a estimulos sensoriais após substituição de um de seus lobos cerebrais por um implate.' , 'O voluntário foi submetido a testes motores após substituição de um de seus lobos cerebrais por um implante.' , 'O voluntário foi equipado com uma extensão cerebral na parte externa do crânio.' , 'O voluntário teve seu cérebro completamente removido e substituído por um implante total.' , 'O voluntário teve parte da sua medula espinal removida e substituída por um implante.'
]
const resultados = [
    ['O voluntário apresentou melhora em suas faculdades mentais após a abordagem.' , 'O voluntário apresentou aumento em sua atividade cerebral após a abordagem.' , 'O voluntário não apresentou congruências significantes após a abordagem, porém não sofreu danos.' , 'O voluntário foi capaz de, por um breve momento, fortalecer seu campo magnético. Devemos estudar as implicações desse resultado.' , 'O voluntário apresentou melhora em sua personalidade, estando mais sucetível e sendo mais recompensado ao fazer atividades recreativas.' , 'O voluntário não sofreu danos significativos.' , 'O voluntário apresentou alta taixa de sincronização com o implante e, por um breve momento, modificou o funcionamento de aparelhos ao redor.' , 'O corpo do voluntário se adaptou bem ao implante.' , 'O voluntário apresentou uma taxa de sincronização maior que a média.' , 'O voluntário alcançou o limite de taxa de sincronização.'] , 
    ['O voluntário não sobreviveu à abordagem.' , 'O estado do voluntário se tornou crítico horas depois dos experimentos começarem.' , 'A personalidade do voluntário se tornou instável e agressiva, apresentando surtos violentos.', 'O voluntário sofreu hemorragia cerebral logo após a implantação.', 'O implante rejeitou completamente o tecido cerebral do voluntário, causando necrose rápida.', 'O voluntário entrou em coma após a abordagem, e não demonstrou sinais de recuperação.', 'O voluntário perdeu completamente a capacidade de fala e coordenação motora.', 'O implante usado no voluntário apresentava defeitos que não puderam ser revertidos.', 'O voluntário sofreu perda total de memória e identidade.', 'O voluntário apresentou atividade cerebral errática, levando a convulsões constantes até o óbito.' , 'O voluntário não acordou da anestesia.']
]

const procedimentos = [
    ['O voluntário continuará recebendo o benefício até o prazo estipulado no contrato.' , 'O voluntário continuará sendo acompanhado a cada semestre.' , 'O voluntário foi designado ao Local SP-3.' , 'O voluntário e sua família foram designado ao Local SP-2.' , 'O voluntário e sua família foram designados ao Local SP-1' , 'O voluntário foi designado a uma comunidade controlada a parte, habitata por demais voluntários e supervisionada por agentes.' , 'O voluntário pôde voltar a normalidade, sendo supervisionado por questões de segurança.'] ,
    ['Localizar e neutralizar, tal qual seus próximos que tomaram conhecimento dos procedimentos.' , 'Aplicar amnésicos. Sem limitações' , 'Procedimento de Ocultação de Nível 1' , 'Procedimento de Ocultação de Nível 2' , 'Designar para uma das novas instalações do projeto, a mais distante de preferência.' , 'Usar a opção de autodestruição dos implantes usados na época dos experimentos.']
]

let dadosGerados = generateData(11235813213455 , anos , porcentagemSucesso , idade , origens , abordagens , resultados , procedimentos)

syncData.push(...dadosGerados)

export default syncData