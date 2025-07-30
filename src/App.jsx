import './App.css'
import Cabecalho from './components/Cabecalho/Cabecalho';
import RoutesApp from './routes';
import { useEffect, useState } from 'react';

function App() {

    const [logado, setLogado] = useState( () => {
        return localStorage.getItem('logado') === 'true'
    })

    useEffect(() => {
        localStorage.setItem('logado', logado)
    }, [logado])

    return (
        <div className='App'>
            <div className="logo-underlay" />

            <Cabecalho logado={logado} setLogado={setLogado}/>

            <div className="Conteudo">
                <RoutesApp logado={logado} setLogado={setLogado} />
            </div>


        </div>
    );
}

export default App
