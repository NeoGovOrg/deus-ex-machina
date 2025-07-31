import Confidencial from "../../../components/Confidencial/Confidencial"
import FAQ from "../../../components/FAQ/FAQ"
import syncData from './data.js'
import Diretorio from "../../../components/Diretorio/Diretorio"

const faqPerguntas = [
    {
        pergunta: 'Como os efeitos identificados até agora podem ser relevantes?',
        resposta: 'Altas taxas de sincronização indicam maior sinergia entre indivíduo e implante. O objetivo é entender os fatores que favorecem essa compatibilidade para aprimorar o desenvolvimento de novos modelos.'
    },
    {
        pergunta: 'Por que a maioria dos testes de sincronização são feitos em crianças?',
        resposta: 'Por estarem em fase de maturação cerebral, crianças e adolescentes têm maior "maleabilidade" neural, o que facilita a integração com os implantes e permite observar resultados de forma mais crua.'
    },
    {
        pergunta: 'Qual o motivo de designar voluntários para comunidades controladas?',
        resposta: 'Maioria dos indivíduos em tais instalações se voluntariaram por conta do benefício Suporte Total à Vida oferecido pelo projeto. Além disso, garante maior eficiência em ações de controle de danos, se necessário.'
    },
]

const VoluntarioSync = () => {

    return(
        <>
            <Confidencial></Confidencial>

            <h1 className="titulo1">
                Projeto Deus Ex Machina
                <span className="titulo1" style={{fontSize: '32px'}}> / Período 1 / Sincronização </span>
            </h1>

            <section>
                <p className="texto1">
                    Esta é a página referente aos primeiros testes de sincronização realizados no período inicial do Projeto <span className="dem">Deus Ex Machina</span>. 
                    Mais abaixo, você encontrará os registros realizados por nossos agentes ao longo da execução desses experimentos.
                </p>
                <br />
                <p className="texto1">
                    O objetivo principal dos testes aqui descritos foi avaliar a compatibilidade de implantes neurais com diferentes perfis de voluntários, compreender os limites da integração cérebro-computador e identificar padrões que possam ampliar a eficácia de futuros projetos da nossa organização.
                </p>
            </section>

            <FAQ perguntas={faqPerguntas} />

            <section>
                <h2 className="titulo1"> Registros</h2>
                <br />
                <Diretorio data={syncData} />
            </section>


        </>
    )

}

export default VoluntarioSync