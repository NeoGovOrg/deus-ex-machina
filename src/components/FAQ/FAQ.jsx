import { useState } from "react"
import styles from './FAQ.module.css'

const FAQ = ({perguntas}) => {
    const [aberto, setAberto] = useState(null)

    function toggle(index) {
        index === aberto ? setAberto(null) : setAberto(index)
    }
    
    return(
        <div className={styles.container}>
            <h4 className={styles.titulo}>FAQ</h4>

            <div className={styles.questions}>
                { perguntas.map((p, index) => (
                    <div className={styles.card} onClick={() => toggle(index)} key={index}>

                        <div className={styles.pergunta}>
                            <h5> {p.pergunta} </h5>
                            <i className="bi bi-caret-down-fill"></i>
                        </div>

                        { aberto === index && (
                            <p className={styles.resposta}> {p.resposta} </p>
                        )}
                    </div>
                ))}
            </div>

        </div>
    )
}

export default FAQ