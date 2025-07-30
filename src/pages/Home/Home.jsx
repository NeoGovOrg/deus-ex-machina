import styles from "./Home.module.css"
import InlineTitle from "../../components/InlineTitle/InlineTitle"
import LinkCard from "../../components/LinkCard/LinkCard"
import FAQ from "../../components/FAQ/FAQ"

const Home = () => {
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

    return(
        <>
            <h1 className="titulo1">
                Projeto Deus Ex Machina
            </h1>

            <div className="projectInfos">
                <InlineTitle title="Status do Projeto: " text="Encerrado"/>
                <InlineTitle title="Duração: " text="2036 à 2041"/>
                <InlineTitle title="Nível de Sigílo: " text="A"/>
            </div>

            <p className="texto1">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam magni voluptatibus pariatur ex eius amet doloremque. Officia eum nam nesciunt expedita. Ea laudantium ducimus, perferendis natus unde magni animi recusandae voluptas nam asperiores architecto temporibus non, pariatur nesciunt sint laboriosam cumque iste? Et, dolorem at non reiciendis sunt vitae nulla.
            </p>
            <p className="texto1">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam magni voluptatibus pariatur ex eius amet doloremque. Officia eum nam nesciunt expedita. Ea laudantium ducimus, perferendis natus unde magni animi recusandae voluptas nam asperiores architecto temporibus non, pariatur nesciunt sint laboriosam cumque iste? Et, dolorem at non reiciendis sunt vitae nulla.
            </p>

            <div className="cardsSection">
                <LinkCard title="Período 1" text="De 2036 até 2037" disabled="true" link={'/voluntario'} />
                <LinkCard title="Período 2" text="De 2038 até 2039" disabled="true"/>
                <LinkCard title="Período 3" text="De 2040 até 2041" disabled="true"/>
            </div>


        <FAQ perguntas={faqPerguntas} />
            
        </>
    )
}

export default Home