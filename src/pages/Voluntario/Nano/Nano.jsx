import Confidencial from "../../../components/Confidencial/Confidencial.jsx"
import FAQ from "../../../components/FAQ/FAQ.jsx"
import nanoData from './data.js'
import Diretorio from "../../../components/Diretorio/Diretorio.jsx"

const faqPerguntas = [
    {
        pergunta: 'Quais os principais usos de nanorobôs na medicina?',
        resposta: 'Tratamento contínuo e de fácil acesso para a recuperação, reparação e substituição de tecidos orgânicos. Além disso, facilitam a análise interna do paciente.'
    },
    {
        pergunta: 'Como esses nanorobôs se quer funcionam?',
        resposta: 'Nanorobôs estão conectados em uma rede e servem um propósito em comum, dessa forma, podem atuar em diferentes áreas do organismo humano para resolver um problema localizado. Todos são equipados com tecnologia de ponta, capaz de acelerar a replicação celular.'
    },
    {
        pergunta: 'Voluntários que sofreram mutações nos experimentos representam risco pra gente?',
        resposta: 'A segurança deve ser sempre prioridade. Não há com o que se preocupar.'
    },
]

const VoluntarioNano = () => {

    return(
        <>
            <Confidencial></Confidencial>

            <h1 className="titulo1">
                Projeto Deus Ex Machina
                <span className="titulo1" style={{fontSize: '32px'}}> / Período 1 / Nanotecnologia </span>
            </h1>

            <section>
                <p className="texto1">
                    Esta é a página referente aos primeiros testes de integração da nanotecnologia para restaurar tecidos orgânicos comprometidos, realizados no período inicial do Projeto <span className="dem">Deus Ex Machina</span>. 
                    Mais abaixo, você encontrará os registros realizados por nossos agentes ao longo da execução desses experimentos.
                </p>
                <br />
                <p className="texto1">
                    O objetivo principal dos testes aqui descritos foi usar dos recentes avanços da nanotecnologia para restaurar ou simular tecidos orgânicos, avaliar a compatibilidade de nanorobôs no corpo, e compreender quais suas possíveis aplicações e implicações na medicina moderna.
                </p>
            </section>

            <FAQ perguntas={faqPerguntas} />

            <section>
                <h2 className="titulo1"> Registros</h2>
                <br />
                <Diretorio data={nanoData} />
            </section>


        </>
    )

}

export default VoluntarioNano