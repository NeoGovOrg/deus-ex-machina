import logo from "../../assets/NeoLogo-preta.png"
import styles from "./Cabecalho.module.css"

const Cabecalho = () => {
    return(
        <header className={styles.container}>
            <div className={styles.left}>
                <img src={logo} alt=" " />
                <h2 className={styles.title}>Deus Ex Machina</h2>
            </div>
            <a href="/" className={styles.exit}>sair</a>
        </header>
    )
}

export default Cabecalho