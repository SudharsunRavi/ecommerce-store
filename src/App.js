import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";

import Header from "./components/Header";
import LandingPage from "./components/LandingPage"
import Login from "./components/Login"
import ProductPage from "./components/Products/ProductPage"
import Cart from "./components/Cart"
import { Provider } from "react-redux";
import appStore from "./utils/redux/appStore";

function App() {
  const appRouter=createBrowserRouter([
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
      path: "/cart",
      element: <Cart/>,
    },
  ])
  return (
    <Provider store={appStore}>
      <div className="mx-10 my-7">
        <RouterProvider router={appRouter}/>
      </div>
    </Provider>
    
  );
}

export default App;
