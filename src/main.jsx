import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Layout from './components/Layout/Layout';
import Errorpage from './components/Errorpage/Errorpage';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import Addproduct from './components/Addproduct/Addproduct';
import AuthProvider from './components/Provider/AuthProvider';
import ShowBrandProducts from './components/ShowBrandProducts/ShowBrandProducts';
import Details from './components/ShowBrandProducts/Details';
import UpdateProduct from './components/UpdateProduct/UpdateProduct';
import MyCarts from './components/MyCart/MyCarts';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import ContactUs from './components/ContactUs/ContactUs';
// import PropularProduct from './components/PropularProduct/PropularProduct';



const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    errorElement: <Errorpage></Errorpage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader:() => fetch('https://assignment-10-fashion-and-apparel-server-side-ibp4irthk.vercel.app/brand'),

      },
      {
        path: "/login",
        element: <Login></Login>
      },
      {
        path: "/register",
        element: <Register></Register>
      },
      {
        path: "/addproduct",
        element: <PrivateRoute><Addproduct></Addproduct></PrivateRoute>
      },
      {
        path:"/brandproduct/:brand",
        element: <ShowBrandProducts></ShowBrandProducts>,
        loader: ()=> fetch('https://assignment-10-fashion-and-apparel-server-side-ibp4irthk.vercel.app/product')
      },
      {
        path:"/details/:_id",
        element:<PrivateRoute><Details></Details>,</PrivateRoute>,
        loader: ()=> fetch('https://assignment-10-fashion-and-apparel-server-side-ibp4irthk.vercel.app/product')
      },
      {
        path:"/updateproduct/:id",
        element: <PrivateRoute><UpdateProduct></UpdateProduct></PrivateRoute>,
        loader: ({ params }) => fetch(`https://assignment-10-fashion-and-apparel-server-side-ibp4irthk.vercel.app/product/${params.id}`)
      },
      {
        path: "/mycart",
        element: <PrivateRoute><MyCarts></MyCarts></PrivateRoute>
      },
      {
        path: "/contact",
        element: <PrivateRoute> <ContactUs></ContactUs> </PrivateRoute>
      }
    ]
  },
]);




ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>,
)
