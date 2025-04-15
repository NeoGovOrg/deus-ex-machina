import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter , RouterProvider } from 'react-router-dom'
import Home from './pages/Home/Home.jsx'
import Login from './pages/Login/Login.jsx'
import Erro from './pages/ErrorPage/ErrorPage.jsx'

const router = createBrowserRouter([
    {
      path: "/",
      element: <App/>,
      errorElement: <Erro/>,
      children: [
        {
          path: "/",
          element: <Login/>,
        },
        {
          path: "/homepage",
          element: <Home/>,
        },
      ]
    },
])


createRoot(document.getElementById('root')).render(
    <StrictMode>
        <RouterProvider router={router} />
    </StrictMode>,
)
