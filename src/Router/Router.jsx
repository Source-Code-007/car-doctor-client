import { createBrowserRouter } from "react-router-dom";
import LayoutOne from "../Layout/LayoutOne";
import Homepage from "../Homepage/Homepage";
import Signin from "../Pages/Signin/Signin";
import Signup from "../Pages/Signup/Signup";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Checkout from "../Pages/Checkout/Checkout";

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
                path: '/checkout',
                element: <Checkout></Checkout>
            }
        ]
    }
])