import React, { useContext } from 'react';
import { Circles } from "react-loader-spinner";
import { authContext } from '../Provider/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';


const PrivateRoute = () => {
    const {user, loading} = useContext(authContext)
    const {pathname} = useLocation()

    if(!user){
        return <Navigate to={'/signin'} state={pathname}></Navigate>
    }

    if (loading) {
        return <div className="min-h-screen flex justify-center items-center">
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
    return children
};

export default PrivateRoute;