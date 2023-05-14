import { createBrowserRouter } from "react-router-dom";
import LayoutOne from "../Layout/LayoutOne";
import Homepage from "../Homepage/Homepage";
import Signin from "../Pages/Signin/Signin";
import Signup from "../Pages/Signup/Signup";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Checkout from "../Pages/Checkout/Checkout";
import MyOrder from "../Pages/MyOrder/MyOrder";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import ServicesDetails from "../Pages/ServicesDetails/ServicesDetails";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <LayoutOne></LayoutOne>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Homepage></Homepage>
            },
            {
                path: '/signin',
                element: <Signin></Signin>
            },
            {
                path: '/signup',
                element: <Signup></Signup>
            },
            {
                path: `/checkout/:id`,
                element: <Checkout></Checkout>,
                loader: ({params}) => fetch(`http://localhost:8000/services/${params.id}`)
            },
            {
                path: `/my-order`,
                element: <MyOrder></MyOrder>
            },
            {
                path: 'services/:id',
                element: <PrivateRoute><ServicesDetails></ServicesDetails></PrivateRoute>,
            }
        ]
    }
])