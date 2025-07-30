import Confidencial from "../../../components/Confidencial/Confidencial"
import FAQ from "../../../components/FAQ/FAQ"
import InlineTitle from "../../../components/InlineTitle/InlineTitle"
import LinkCard from "../../../components/LinkCard/LinkCard"
import syncData from './data.js'
import Diretorio from "../../../components/Diretorio/Diretorio"

const faqPerguntas = [
    {
        pergunta: 'Pergunta 1',
        resposta: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Beatae, laborum? 1'
    },
    {
        pergunta: 'Pergunta 2',
        resposta: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Beatae, laborum? 2'
    },
    {
        pergunta: 'O que é ghost chroma?',
        resposta: 'Não há com o que se preocupar.'
    },
]

const VoluntarioNano = () => {

    return(
        <>
            <Confidencial></Confidencial>

            <h1 className="titulo1">
                Projeto Deus Ex Machina
                <span className="titulo1" style={{fontSize: '32px'}}> / Período 1 / Sincronização </span>
            </h1>

            <p className="texto1">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam magni voluptatibus pariatur ex eius amet doloremque. Officia eum nam nesciunt expedita. Ea laudantium ducimus, perferendis natus unde magni animi recusandae voluptas nam asperiores architecto temporibus non, pariatur nesciunt sint laboriosam cumque iste? Et, dolorem at non reiciendis sunt vitae nulla.
            </p>

            <FAQ perguntas={faqPerguntas} />

            <Diretorio data={syncData} />


        </>
    )

}

export default VoluntarioNano