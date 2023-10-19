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
import MyCard from './components/MyCard/MyCard';
import AuthProvider from './components/Provider/AuthProvider';
import ShowBrandProducts from './components/ShowBrandProducts/ShowBrandProducts';
import Details from './components/ShowBrandProducts/Details';
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
        loader:
          () => fetch('http://localhost:5000/brand'),

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
        element: <Addproduct></Addproduct>
      },
      {
        path:"/brandproduct/:brand",
        element: <ShowBrandProducts></ShowBrandProducts>,
        loader: ()=> fetch('http://localhost:5000/product')
      },
      {
        path:"/details/:_id",
        element: <Details></Details>,
        loader: ()=> fetch('http://localhost:5000/product')
      },
      // {
      //   path:"/popularproduct",
      //   element: <PropularProduct></PropularProduct>,
      //   loader: ()=> fetch('http://localhost:5000/product')
      // },
      {
        path: "/mycard",
        element: <MyCard></MyCard>
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
