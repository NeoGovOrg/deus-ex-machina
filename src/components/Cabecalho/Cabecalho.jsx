import { Link } from "react-router-dom"
import logo from "../../assets/img/NeoLogo-preta.png"
import styles from "./Cabecalho.module.css"

const Cabecalho = ({logado , setLogado}) => {
    return(
        <header className={styles.container}>
            <Link to='/' className={styles.left}>
                <img src={logo} alt=" " />
                <h2 className={styles.title}>Deus Ex Machina</h2>
            </Link>
            { logado && (
                <a href="/" className={styles.exit} onClick={() => setLogado(false)}>sair (bananilson)</a>
            )}
        </header>
    )
}

export default Cabecalho