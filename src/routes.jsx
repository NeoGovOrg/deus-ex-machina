import { BrowserRouter, Routes, Route } from "react-router-dom";

import Erro from "./pages/ErrorPage/ErrorPage";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import Voluntario from "./pages/Voluntario/Voluntario";

const RoutesApp = () => {
    return(
        <Routes>
            <Route path='/' element={<Login />} />
            <Route path='/homepage' element={<Home />} />
            <Route path='/voluntario' element={<Voluntario />} />
            <Route path='/erro' element={<Erro />} />
        </Routes>
    )
}

export default RoutesApp