import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import UserDetails from './components/UserDetails/UserDetails.jsx'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <App />,
    },
    {
      path: "/user/:id",
      element: <UserDetails />,
    },
  ]
);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
