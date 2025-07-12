import styles from "./LinkCard.module.css"

const LinkCard = ({title , text , link , disabled}) => {
    return(
        <a className={`${styles.card} ${disabled ? styles.disabled : ""}`} href={link}>
            <h3 className="titulo2"> {title}<i className="bi bi-link-45deg"></i> </h3>
            <p className="texto1">{text}</p>
        </a>
    )
}

export default LinkCard