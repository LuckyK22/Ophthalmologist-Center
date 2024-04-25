import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import App from './App'
import AboutPage from './pages/AboutPage'
import Login from './pages/Login'
import Register from './pages/Register'
import FrontPage from './pages/FrontPage'
import ServiceDescriptionPage from './components/ServiceDescriptionPage'
import Pop from './components/LoginModel'

const router =  createBrowserRouter([
  {
      path: '/',
      element : <App />,
      children : [
          {
              path : '/',
              element : <FrontPage />
          },
          {
              path : '/pop',
              element : <Pop />
          },
          {
              path : '/login',
              element : <Login />
          },
          {
              path : '/register',
              element : <Register />
          },
          {
            path : '/about',
            element : <AboutPage />
          },
          {
            path : '/serviceDescription',
            element : <ServiceDescriptionPage />
          }
      ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
