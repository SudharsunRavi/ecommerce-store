import React, { lazy } from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";
import "./App.css";

import Header from "./components/Header";
import LandingPage from "./components/LandingPage"
import Login from "./components/Login"
import ProductPage from "./components/Products/ProductPage"
import Product from "./components/Products/Product"
import Cart from "./components/Cart"
import appStore from "./utils/redux/appStore";
import Footer from './components/Footer';
import Contact from './components/Contact';
import Error from './components/Error';

const AppLayout=()=>{
  return (
    <Provider store={appStore}>
        <Header/>
        <Outlet/>
        <Footer/>
    </Provider>
    
  );
}

const appRouter=createBrowserRouter([
  {
    path: "/",
    element: <AppLayout/>,
    children:[
      {
        path: "/",
        element: <LandingPage/>,
      },
      {
        path: "/login",
        element: <Login/>,
      },
      {
        path: "/products",
        element: <ProductPage/>,
      },
      {
        path: "/products/:pid",
        element: <Product/>,
      },
      {
        path: "/contact",
        element: <Contact/>,
      },
      {
        path: "/cart",
        element: <Cart/>,
      },
    ],
    errorElement : <Error/>,
  },
])

const root=ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={appRouter} />)
