import { Routes, Route } from "react-router-dom";

import Erro from "./pages/ErrorPage/ErrorPage";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import Voluntario from "./pages/Voluntario/Voluntario";
import VoluntarioSync from "./pages/Voluntario/Sync/Sync";
import ModeloRegistro from "./pages/ModeloRegistro/ModeloRegistro";

const RoutesApp = ({ logado, setLogado }) => {
    return(
        <Routes>
            <Route 
                path='/' 
                element={ logado ? <Home /> : <Login setLogado={setLogado}/>} 
            />
            <Route 
                path='/br' 
                element={ logado ? <Home /> : <Login setLogado={setLogado}/>} 
            />
            <Route 
                path='/period/voluntary' 
                element={ logado ? <Voluntario /> : <Login setLogado={setLogado}/>} 
            />
            <Route 
                path='/period/voluntary/sync' 
                element={ logado ? <VoluntarioSync /> : <Login setLogado={setLogado}/>} 
            />
            <Route 
                path='/period/data/subject-register' 
                element={ logado ? <ModeloRegistro /> : <Login setLogado={setLogado}/>} 
            />
            <Route path='/erro' element={<Erro />} />
        </Routes>
    )
}

export default RoutesApp