import logo from "../../assets/img/NeoLogo-preta.png"
import styles from "./Cabecalho.module.css"

const Cabecalho = ({logado , setLogado}) => {
    return(
        <header className={styles.container}>
            <div className={styles.left}>
                <img src={logo} alt=" " />
                <h2 className={styles.title}>Deus Ex Machina</h2>
            </div>
            { logado && (
                <a href="/br" className={styles.exit} onClick={() => setLogado(false)}>sair</a>
            )}
        </header>
    )
}

export default Cabecalho