import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import styles from './Diretorio.module.css'

const Diretorio = ({data}) => {

    const [registros, setRegistros] = useState([])

    useEffect(() => {
        setRegistros(
            data.sort((a, b) => {
                if (a.ano !== b.ano) {
                    return a.ano - b.ano
                }
    
                if (a.sucesso !== b.sucesso) {
                    return a.sucesso === true ? -1 : 1
                }
    
                let nomeA = `${a.nome.nome.replace(' ', '')} ${a.nome.familia}`
                let nomeB = `${b.nome.nome.replace(' ', '')} ${b.nome.familia}`
                return nomeA.localeCompare(nomeB)
            })
        )

    }, [])

    const [anos, setAnos] = useState([])

    useEffect(() => {
        setAnos( [...new Set(registros.map(d => d.ano))] )
    }, [registros])

    // Navegação
    const navigate = useNavigate()
    const handleClick = (registro) => {
        navigate('/period/data/subject-register', {
            state: registro
        })
    }

    // Abre e Fecha
    const [anosAbertos, setAnosAbertos] = useState([])
    const [sucessosAbertos, setSucessosAbertos] = useState([])

    function toggleAno(index){
        setAnosAbertos((prev) => 
            prev.includes(index)
            ? prev.filter((i) => i !== index)
            : [...prev, index]
        )
    }

    function toggleSucesso(index){
        setSucessosAbertos((prev) => 
            prev.includes(index)
            ? prev.filter((i) => i !== index)
            : [...prev, index]
        )
    }

    return (
        <div className={styles.container}>

            {anos.map((ano, anoIndex) => (
                
                <div className={styles.diretorioAno}>
                    {/* ANOS */}
                    <h5 className={styles.diretorio} onClick={() => toggleAno(anoIndex)}> {ano}</h5>

                    {anosAbertos.includes(anoIndex) && (

                    <>
                    {/* BEM SUCEDIDOS */}
                    <section className={styles.diretorioSucesso}>
                        
                        <h6 className={styles.diretorio} onClick={() => toggleSucesso(`${anoIndex}1`)}> Experimentos Bem Sucedidos </h6>

                            {/* Registros */}
                            { sucessosAbertos.includes(`${anoIndex}1`) && (
                            <section className={styles.registros}>
                                { registros
                                    .filter(registro => registro.ano === ano && registro.sucesso === true)
                                    .map(r => (
                                        <p className={styles.registro} 
                                            onClick={ r.data !== undefined 
                                            ? () => handleClick(r)
                                            : undefined } 
                                            style={r.data === undefined 
                                            ? {color:'red'}
                                            : {color:'currentColor'}
                                        }>

                                            {/* Nomes */}
                                            {r.nome.nome} {r.nome.familia}
                                        </p>
                                    ))
                                }
                            </section>
                            )}

                    </section>


                    {/* MAL SUCEDIDOS */}
                    <section className={styles.diretorioSucesso}>
                        
                        <h6 className={styles.diretorio} onClick={() => toggleSucesso(`${anoIndex}2`)}> Experimentos Mal Sucedidos </h6>

                            {/* Registros */}
                            { sucessosAbertos.includes(`${anoIndex}2`) && (
                            <section className={styles.registros}>
                                { registros
                                    .filter(registro => registro.ano === ano && registro.sucesso === false)
                                    .map(r => (
                                        <p className={styles.registro} 
                                            onClick={ r.data !== undefined 
                                            ? () => handleClick(r)
                                            : undefined } 
                                            style={r.data === undefined 
                                            ? {color:'red'}
                                            : {color:'currentColor'}
                                        }>

                                            {/* Nomes */}
                                            {r.nome.nome} {r.nome.familia}
                                        </p>
                                    ))
                                }
                            </section>
                            )}

                    </section>
                    </>

                    )}
                </div>
            ))}
        </div>
    )
}

export default Diretorio