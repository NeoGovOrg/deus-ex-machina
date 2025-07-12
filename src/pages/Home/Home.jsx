import styles from "./Home.module.css"
import InlineTitle from "../../components/InlineTitle/InlineTitle"
import LinkCard from "../../components/LinkCard/LinkCard"

const Home = () => {
    return(
        <>
            <h1 className="titulo1">
                Projeto Deus Ex Machina
            </h1>

            <div className={styles.projectInfos}>
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

            <div className={styles.cardsSection}>
                <LinkCard title="Período 1" text="De 2036 até 2037" disabled="true"/>
                <LinkCard title="Período 1" text="De 2036 até 2037" disabled="true"/>
                <LinkCard title="Período 1" text="De 2036 até 2037" disabled="true"/>
            </div>

            
        </>
    )
}

export default Home