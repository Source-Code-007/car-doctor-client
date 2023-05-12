import React, { useContext } from 'react';
import { Circles } from "react-loader-spinner";
import { authContext } from '../Provider/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';


const PrivateRoute = ({children}) => {
    const {user, loading} = useContext(authContext)
    const {pathname} = useLocation()


    if (loading) {
        return <div className="h-[calc(100vh-70px)] flex justify-center items-center">
            <Circles
                height="50"
                width="50"
                color="#4fa94d"
                ariaLabel="circles-loading"
                wrapperStyle={{}}
                wrapperClass=""
                visible={true}
            />
        </div>
    }
    if(!user){
        return <Navigate to={'/signin'} state={pathname} replace></Navigate>
    }
    return children
};

export default PrivateRoute;