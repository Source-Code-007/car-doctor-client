import { FaCartPlus, FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";
import logo from '../assets/logo.svg'
import { useContext } from "react";
import { authContext } from "../Provider/AuthProvider";
import { Circles } from 'react-loader-spinner'

const Nav = () => {
    const { user, setUser, logout, loading } = useContext(authContext)

    // handle signout function
    const handleSignOutFunc = () => {
        logout()
        .then(() => {
            setUser(null)
            console.log('logout');
        })
        .catch(e=> console.log(e.message))
    }

    const navItem = <>
        <li className="font-bold"><Link to={'/'}>Home</Link></li>
        <li className="font-bold"><Link to={'/about'}>About</Link></li>
        <li className="font-bold"><Link>Services</Link></li>
        <li className="font-bold"><Link>Blog</Link></li>
    </>
    return (
        <nav className="navbar shadow">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {navItem}
                    </ul>
                </div>
                <Link to={'/'}><img src={logo} className="w-20" alt="" /></Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navItem}
                </ul>
            </div>
            <div className="navbar-end gap-3">
                <span><FaCartPlus></FaCartPlus></span>
                <span><FaSearch></FaSearch></span>
                {
                loading ? <Circles
                height="50"
                width="50"
                color="#4fa94d"
                ariaLabel="circles-loading"
                wrapperStyle={{}}
                wrapperClass=""
                visible={true}
              /> :
                 user ? <><img src={user?.photoURL} className="h-10 w-10 rounded-full" alt="" /> <button onClick={handleSignOutFunc} className="btn btn-info">Signout</button> </> : <Link to={'/signin'}> <button className="btn btn-info">Signin</button> </Link>
                }
                {/* <button className="btn btn-outline btn-error">Appointment</button> */}
            </div>
        </nav>
    );
};

export default Nav;