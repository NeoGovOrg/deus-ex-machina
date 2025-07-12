import { useState } from "react"

const Acordeao = ({}) => {
    const [isOpen , setOpen] = useState(false)
    
    return(
        <>
        <button onClick={() =>{setOpen(!isOpen)} }> aaa </button>
        {isOpen && (
            <p>conteudinhozinho</p>
        )}
        </>
    )
}

export default Acordeao