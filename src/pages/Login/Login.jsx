import { useNavigate } from "react-router-dom"
import styles from "./Login.module.css"
import { useState } from "react"

const Login = ({setLogado}) => {

    const [inputCredencial, setInputCredencial] = useState('')
    const [inputSenha, setInputSenha] = useState('')

    const credencial = "bananilson"
    const senha = "123"

    function entrar() {
        if(inputCredencial.toLowerCase() === credencial 
        && inputSenha.toLowerCase() === senha){
            setLogado(true)
        }
        else{
            setLogado(false)
            alert("Credenciais não correspondem. Certifique-se que pode consultar os dados do projeto DEUS EX MACHINA.")
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