import { Link, useLocation, useNavigate } from 'react-router-dom';
import signinImg from '../../assets/images/login/login.svg'
import { useContext, useState } from 'react';
import { authContext } from '../../Provider/AuthProvider';
import SocialMediaSignin from '../../Shared/SocialMediaSignin';

const Signin = () => {
    const { setUser, setLoading, signingUserWithEmailPassFunc, } = useContext(authContext)
    const [error, setError] = useState('')
    const [success, setSuccess] = useState('')
    const location = useLocation()
    const navigate = useNavigate()
    const from = location.state?.pathname || '/'

    const handleSigninFunc = (e) => {
        e.preventDefault()
        setError('')
        setSuccess('')

        const form = e.target
        const email = form.email.value
        const password = form.password.value



        // Validate the email
        const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        if (!emailPattern.test(email)) {
            setError("Invalid email address.")
            return;
        }
        // Validate the password
        const passwordPattern = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
        if (!passwordPattern.test(password)) {
            setError("Invalid password. Must be at least 8 characters long and contain at least one letter and one number.")
            return;
        }

        signingUserWithEmailPassFunc(email, password)
        .then(res=>{
            const currUser = res.user
            setUser(currUser)
            setSuccess('user signin successfully')
            navigate(from)
        })
        .catch(e=> {
            setLoading(false)
            setError(e.message)
        })
    }

    return (
        <div className="hero min-h-screen">
            <div className="hero-content flex-col lg:flex-row w-full">
                <div className="text-center lg:text-left flex-1">
                    <img src={signinImg} alt="" />
                </div>
                <div className="card flex-shrink-0 flex-1 w-full shadow-2xl bg-base-100">
                    <form onSubmit={handleSigninFunc}>
                        <div className="card-body">
                            <h3 className='font-bold text-4xl text-center'>Login</h3>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="text" name='email' placeholder="email" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">password</span>
                                </label>
                                <input type="password" name='password' placeholder="password" className="input input-bordered" />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            {success && <p className='text-green-500'>{success}</p>}
                            {error && <p className='text-red-500'>*{error}</p>}
                            <div className="form-control mt-6">
                                <button className="btn btn-error">Login</button>
                            </div>
                            <div className='text-center my-5 space-y-3'>
                                <p className='text-xl'>or signin with</p>
                               <SocialMediaSignin></SocialMediaSignin>
                            </div>
                            <p>Do not have an account? <Link className='text-green-500' to={'/signup'}>Signup</Link></p>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Signin;