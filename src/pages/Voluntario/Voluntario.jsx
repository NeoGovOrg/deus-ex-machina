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
                <InlineTitle title="Duração: " text="2036 à 2037"/>
                <InlineTitle title="Nível de Prestígio: " text="A"/>
            </div>

            <div>
                <p className="texto1">
                    Este é o registro do Período 1 do Projeto <span className="dem">Deus Ex Machina</span>, que se estendeu de 2036 a 2037. Nesta etapa inicial, nossos esforços se concentraram em dois eixos principais: o estudo prático do potencial da nanotecnologia no organismo humano, e os experimentos feitos para melhorar os atuais implantes neurais.
                </p>
                <br />
                <p className="texto1">
                    Todos os registros de tais estudos e experimentos foram compilados a partir dos relatórios enviados pelos agentes ativos do projeto. Veja mais detalhes sobre os estudos e experimentos clicando no link respectivo abaixo.
                </p>
            </div>

            
            <div className="cardsSection">
                <LinkCard title="Nanotecnologia" text="Primeiros testes de integração para restaurar tecido orgânico" link={'voluntary/nano'}/>
                <LinkCard title="Sincronização" text="Testes para melhor integração de implantes." link={'voluntary/sync'} />
            </div>

        </>
    )
}

export default Voluntario