import { createBrowserRouter } from "react-router-dom";
import LayoutOne from "../Layout/LayoutOne";
import Homepage from "../Homepage/Homepage";
import Signin from "../Pages/Signin/Signin";
import Signup from "../Pages/Signup/Signup";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <LayoutOne></LayoutOne>,
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
            }
        ]
    }
])