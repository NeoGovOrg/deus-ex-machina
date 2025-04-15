import styles from "./InlineTitle.module.css"

const InlineTitle = ({title , text}) => {
    return(
        <>
        <span className={styles.title}> {title} </span>
        <span className={styles.content}> {text} </span>
        </>
    )
}

export default InlineTitle