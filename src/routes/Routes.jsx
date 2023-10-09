import {createBrowserRouter,} from "react-router-dom";
import Root from "../layouts/Root";
import Home from "../pages/Home/Home";
import ErrorPage from "../pages/ErrorPage";
import ServiceDetails from './../pages/Shared/ServiceDetails';
import About from "../pages/Shared/About";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import UserDashboard from "../pages/Shared/UserDashboard/UserDashboard";
import PrivateRoutes from "./PrivateRoutes";
import Team from "../pages/Team";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children:[
      {
          path: '/',
          element: <Home></Home>,
          loader: () => fetch('/services.json'), 
      },
      {
          path: '/view-details/:id',
          element: <PrivateRoutes><ServiceDetails></ServiceDetails></PrivateRoutes>,
          loader: () => fetch('/services.json'), 
      },
      {
        path: '/about',
        element: <About></About>
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/register',
        element: <Register></Register>
      },
      {
        path: '/dashboard',
        element: <PrivateRoutes><UserDashboard></UserDashboard></PrivateRoutes>
      },
      {
        path: '/ourteam',
        element: <PrivateRoutes><Team></Team></PrivateRoutes>
      },

 
    ]
  },
]);


export default router;