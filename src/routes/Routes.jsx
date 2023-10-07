import {createBrowserRouter,} from "react-router-dom";
import Root from "../layouts/Root";
import Home from "../pages/Home/Home";
import ErrorPage from "../pages/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children:[
      {
          path: '/',
          element: <Home></Home>,
          loader: () => fetch('/public/services.json'), 
      },
 
    ]
  },
]);


export default router;