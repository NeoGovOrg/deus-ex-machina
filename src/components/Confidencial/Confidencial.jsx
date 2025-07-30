import styles from "./Confidencial.module.css"

const Confidencial = () => {
    return(
        <div className={styles.container}>
            <p className={styles.topText}><b>Aviso:</b> esse banco de dados pertence a <span> neo </span> e é</p>
            <h1 className={styles.midText}>CONFIDENCIAL</h1>
            <p className={styles.bottomText}>Acesso não autorizado ou vazamento de dados são estritamente proibidos e resultarão em punições severas aos envolvidos.</p>
        </div>
    )
}

export default Confidencial