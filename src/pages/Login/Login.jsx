import { useNavigate } from "react-router-dom"
import styles from "./Login.module.css"
import Acordeao from "../../components/Acordeao/Acordeao"
import { useState } from "react"

const Login = () => {

    const [inputCredencial, setInputCredencial] = useState('')
    const [inputSenha, setInputSenha] = useState('')
    const navigate = useNavigate()

    const credencial = "123"
    const senha = "123"

    function entrar() {
        if(inputCredencial === credencial && inputSenha === senha){
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
                    <input type="text" className={styles.inputText} placeholder="Credencial" onChange={(e) => setInputCredencial(e.target.value)} />
                    <input type="password" className={styles.inputText} placeholder="Senha" onChange={(e) => setInputSenha(e.target.value)}/>
                </div>            

                <button type="button" className={styles.submitBtn} onClick={entrar}>
                    enviar
                </button>
            </form>
        </div>
    )
}

export default Login