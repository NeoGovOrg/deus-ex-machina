import styles from "./InlineTitle.module.css"

const InlineTitle = ({title , text}) => {
    return(
        <div>
            <span className={styles.title}> {title} </span>
            <span className={styles.content}> {text} </span>
        </div>
    )
}

export default InlineTitle