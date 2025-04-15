import styles from "./Home.module.css"
import InlineTitle from "../../components/InlineTitle/InlineTitle"

const Home = () => {
    return(
        <>
            <h1 className={styles.pageTitle}>
                Projeto Deus Ex Machina
            </h1>

            <InlineTitle title="Status do Projeto: " text="Encerrado"/>
        </>
    )
}

export default Home