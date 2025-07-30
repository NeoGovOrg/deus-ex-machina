import Confidencial from "../../components/Confidencial/Confidencial"
import InlineTitle from "../../components/InlineTitle/InlineTitle"
import LinkCard from "../../components/LinkCard/LinkCard"

const Voluntario = () => {
    return(
        <>
            <Confidencial></Confidencial>
            
            <h1 className="titulo1">
                Projeto Deus Ex Machina
                <span className="titulo1" style={{fontSize: '32px'}}> / Período 1 </span>
            </h1>

            <div className="projectInfos">
                <InlineTitle title="Status do Período: " text="Encerrado"/>
                <InlineTitle title="Duração: " text="2036 à 2047"/>
                <InlineTitle title="Nível de Prestígio: " text="A"/>
            </div>

            <p className="texto1">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam magni voluptatibus pariatur ex eius amet doloremque. Officia eum nam nesciunt expedita. Ea laudantium ducimus, perferendis natus unde magni animi recusandae voluptas nam asperiores architecto temporibus non, pariatur nesciunt sint laboriosam cumque iste? Et, dolorem at non reiciendis sunt vitae nulla.
            </p>
            
            <div className="cardsSection">
                <LinkCard title="Sincronização" text="Testes para melhor integração de implantes." link={'voluntary/sync'} />
                <LinkCard title="Nanotecnologia" text="Primeiros testes de integração para restaurar tecido orgânico"/>
            </div>

        </>
    )
}

export default Voluntario