import './App.css'
import Cabecalho from './components/Cabecalho/Cabecalho';
import RoutesApp from './routes';

function App() {
    return (
        <div className='App'>
            <div className="logo-underlay" />

            <Cabecalho />

            <div className="Conteudo">
                <RoutesApp />
            </div>


        </div>
    );
}

export default App
