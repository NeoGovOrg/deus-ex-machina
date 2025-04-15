import './App.css'
import Cabecalho from './components/Cabecalho/Cabecalho';
import { Outlet } from 'react-router-dom';

function App() {
    return (
        <div className='App'>
            <div className="logo-underlay" />

            <Cabecalho/>

            <div className="Conteudo">
                <Outlet/>
            </div>

        </div>
    );
}

export default App
