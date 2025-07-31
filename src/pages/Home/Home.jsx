import styles from "./Home.module.css"
import InlineTitle from "../../components/InlineTitle/InlineTitle"
import LinkCard from "../../components/LinkCard/LinkCard"
import FAQ from "../../components/FAQ/FAQ"

const Home = () => {
    const faqPerguntas = [
        {
            pergunta: 'Por que o site trocou tantas vezes de endereço?',
            resposta: 'Desde que mudamos do Período 1 para o Período 2, diversas vezes a integridade do projeto foi colocada em risco. O estopim foi graças ao funcionário ████████, que agiu de má fé contra nós e a nossa organização. Os devidos cuidados estão sendo tomados. Tenham ele de exemplo.'
        },
        {
            pergunta: 'Por que o nome "Deus Ex Machina"?',
            resposta: 'Do latim “Deus que Encarna na Máquina”. Um termo teatral comumente usado quando, em uma obra, um problema aparentemente insolúvel é resolvido com uma solução inesperada.'
        },
        {
            pergunta: 'O que é ghost chroma?',
            resposta: 'Para evitar comoção desnecessária, a organização e seus agentes são instruídos a assegura que Ghost Chroma é apenas um drone venezuelano inofensivo. Vocês saberão da verdade caso isso represente um risco real à nossa integridade. Por enquanto, não há com o que se preocupar.'
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
                Boas vindas ao Projeto <span className="dem">Deus Ex Machina</span>. Nosso objetivo com este projeto é usar os avanços tecnológicos recentes para elevar as capacidades humanas ao máximo. Instalações foram alocadas ao redor de diversos dos países afiliados à <span className="neo">NEO</span> para realizar os estudos e os experimentos necessários para alcançar nosso objetivo. Tais estudos usam como base sujeitos voluntariados/necessitados, que nos ajudam a fazer o mundo girar mais veloz.
            </p>
            <p className="texto1">
                O projeto foi encerrado com três períodos. Para ver mais detalhes de um período, tal como registros dos experimentos, clique no respectivo link abaixo.
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