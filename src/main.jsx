import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './Component/Home/Home';
import Oder from './Component/Oders/Oder';
import Products from './Component/Productes/Products';
import Inventory from './Component/Inventory/Inventory';
import Login from './Component/Login/Login';
import loaderData from './Component/Loaderdata/Loaderdata';
import Singup from './Component/singup/Singup';
import Authprovider from './Authprovider/Authprovider';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    children: [
      {
        path: "/",
        element: <Products></Products>
      },

      {
        path: "/oders",
        element: <Oder></Oder>,
        loader: loaderData
      },
      {
        path: "/inventory",
        element: <Inventory></Inventory>
      },
      {
        path: "/singup",
        element: <Singup></Singup>
      },
      {
        path: '/login',
        element: <Login></Login>
      }

    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Authprovider>
      <RouterProvider router={router} />
    </Authprovider>

  </React.StrictMode>,
)
