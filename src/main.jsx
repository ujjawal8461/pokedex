import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import PokemonDetail from './Components/PokemonDetail.jsx'

const route = createBrowserRouter([
  {
    path: '/',
    element: <App/>
  },
  {
    path: '/pokemondetail/:id',
    element: <PokemonDetail/>
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={route} />
  </React.StrictMode>,
)
