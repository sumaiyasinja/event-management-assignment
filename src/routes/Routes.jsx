import {createBrowserRouter,} from "react-router-dom";
import Root from "../layouts/Root";
import Home from "../pages/Home/Home";
import ErrorPage from "../pages/ErrorPage";
import ServiceDetails from './../pages/Shared/ServiceDetails';
import About from "../pages/Shared/About";
import Services from "../pages/Shared/Services";

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
      {
          path: '/view-details/:id',
          element: <ServiceDetails></ServiceDetails>,
          loader: () => fetch('/public/services.json'), 
      },
      {
        path: '/about',
        element: <About></About>
      },
      {
        path: '/services',
        element: <Services></Services>
      },
 
    ]
  },
]);


export default router;