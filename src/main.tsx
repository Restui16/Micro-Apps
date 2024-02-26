import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './pages/Home'
import Vote from './pages/Vote'
import Dashboard from './pages/Dashboard'
import ListPaslon from './pages/ListPaslon'
import ListPartai from './pages/ListPartai'
import AddPaslon from './pages/AddPaslon'
import AddPartai from './pages/AddPartai'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />
  },
  {
    path: "/vote",
    element: <Vote />
  },
  {
    path: "/dashboard",
    element: <Dashboard />
  },
  {
    path: "/list-paslon",
    element: <ListPaslon />
  },
  {
    path: "/list-partai",
    element: <ListPartai />
  },
  {
    path: "/add-paslon",
    element: <AddPaslon />
  },
  {
    path: "/add-partai",
    element: <AddPartai />
  },
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
