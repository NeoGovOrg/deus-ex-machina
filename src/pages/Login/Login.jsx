import { useNavigate } from "react-router-dom"
import styles from "./Login.module.css"
import Acordeao from "../../components/Acordeao/Acordeao"

const Login = () => {
    const navigate = useNavigate()

    var credencial = "123"
    var senha = "123"

    function entrar() {
        let c = document.querySelector("#credencial").value
        let s = document.querySelector("#senha").value

        if(c === credencial && s === senha){
            navigate("/homepage")
        }
        else{
            alert("algo deu terrivelmente errado")
        }
    }

    return(
        <div className="Page">
            <p className={styles.introText}>Entre com as suas credenciais de agente da <span className="neo">NEO</span> para acessar o sistema desse projeto</p>
            <form>
                <div className={styles.inputs}>
                    <input type="text" className={styles.inputText} placeholder="Credencial" id="credencial"/>
                    <input type="password" className={styles.inputText} placeholder="Senha" id="senha"/>
                </div>            

                <button type="button" className={styles.submitBtn} onClick={entrar}>
                    enviar
                </button>
            </form>
            <Acordeao></Acordeao>
            <Acordeao></Acordeao>
        </div>
    )
}

export default Login