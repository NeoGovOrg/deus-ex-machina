import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createHashRouter , Navigate, RouterProvider } from 'react-router-dom'
import Home from './pages/Home/Home.jsx'
import Login from './pages/Login/Login.jsx'
import Voluntario from "./pages/Voluntario/Voluntario.jsx"
import Erro from './pages/ErrorPage/ErrorPage.jsx'

const router = createHashRouter([
    {
      path: "/",
      element: <App/>,
      errorElement: <Erro/>,
      children: [
        {
          path: "/",
          element: <Login/>
        },
        {
          path: "/login",
          element: <Login/>,
        },
        {
          path: "/homepage",
          element: <Home/>,
        },
        {
          path: "/periodo-voluntario",
          element: <Voluntario/>,
        },
      ]
    },
])


createRoot(document.getElementById('root')).render(
    <StrictMode>
        <RouterProvider router={router} />
    </StrictMode>,
)
