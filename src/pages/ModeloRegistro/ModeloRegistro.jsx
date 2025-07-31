import { useLocation } from "react-router-dom"
import styles from "./ModeloRegistro.module.css"
import InlineTitle from "../../components/InlineTitle/InlineTitle"
import biometria0 from '../../assets/img/biometria/biometria0.png'
import biometria1 from '../../assets/img/biometria/biometria1.png'
import biometria2 from '../../assets/img/biometria/biometria2.png'
import biometria3 from '../../assets/img/biometria/biometria3.png'
import biometria4 from '../../assets/img/biometria/biometria4.png'

const ModeloRegistro = () => {
    const location = useLocation()
    const sujeito = location.state

    
    const nome = sujeito.nome.nome + ' ' + sujeito.nome.familia
    const idade = sujeito.data.idade
    const parente1 = sujeito.data.filiacao.parente1
    const parente2 = sujeito.data.filiacao.parente2
    const cpf = sujeito.data.cpf
    const origem = sujeito.data.origem

    const biometria = [biometria0 , biometria1 , biometria2 , biometria3 , biometria4]
    const img = sujeito.data.fotoBiometria
    
    const abordagem = sujeito.data.abordagem
    const resultados = sujeito.data.resultados
    const procedimentos = sujeito.data.procedimentos

    return (
        <div className={styles.container}>
            <h1 className={styles.nome}>
                {nome}
            </h1>

            <div className={styles.informacoesPessoas}>
                <div className={styles.infoTexto}>
                    <InlineTitle title='Idade: ' text={idade ? idade : '█'} />
                    <InlineTitle title='CPF: ' text={cpf ? cpf : '███████'} />

                    <section className={styles.filiacao}>
                        <span className={styles.inTitulo}> Filiação: </span>
                        <ul>
                            <li className={styles.inTexto}> {parente1 ? parente1 : '██████'}</li>
                            <li className={styles.inTexto}> {parente2 ? parente2 : '█████████'}</li>
                        </ul>
                    </section>

                    <InlineTitle title='Origem: ' text={origem ? origem : '██████████████████████ █████████████'} />
                </div>
  
                <div className={styles.infoBiometria}>
                    <img src={biometria[img]} alt="" />
                </div>
            </div>

            <hr />

            <div className={styles.informacoesExperimento}>
                <InlineTitle title='Abordagem: ' text={abordagem ? abordagem : '██████████████████████████████ █████████████████'} />
                <span className={styles.inTexto}>Ao fim de cada um dos experimentos, amnésicos suficientes foram aplicados.</span>
                <p className={styles.inTexto} style={{marginTop:'10px'}}>
                </p>

                <InlineTitle title='Resultados: ' text={resultados ? resultados : '███████████████████████████████████ ███████'} />

                <section className={styles.procedimentos}>
                    <span className={styles.inTitulo}> Procedimentos: </span>
                    { procedimentos ? (
                        <>
                            <span className={styles.inTexto} style={procedimentos[1] && ({textDecoration:'line-through'}) }>
                                {procedimentos[0]}
                            </span>

                            {procedimentos[1] && (
                                <p className={styles.inTexto} style={{marginTop:'10px'}}> 
                                    {procedimentos[1]} 
                                </p>
                            )}
                        </>
                    ) : (
                         <span className={styles.inTexto} > █████████████████████████ </span>
                    )}

                </section>
            </div>
        </div>
    )
}

export default ModeloRegistro