import { Link } from 'react-router-dom';
import signupImg from '../../assets/images/login/login.svg'
import { FaFacebook, FaGithub, FaGoogle } from 'react-icons/fa';
import { useContext, useState } from 'react';
import { authContext } from '../../Provider/AuthProvider';

const Signup = () => {
    const { logout, createUserWithEmailPassFunc, updateProfileFunc } = useContext(authContext)
    const [error, setError] = useState('')
    const [success, setSuccess] = useState('')

    const handleSignupFunc = e => {
        e.preventDefault()
        setError('')
        setSuccess('')

        const form = e.target
        const name = form.name.value
        const photo = form.photo.value
        const email = form.email.value
        const password = form.password.value
        const confirmPassword = form.confirmPassword.value



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
        if (password !== confirmPassword) {
            setError('Your password is not match')
            return
        }

        createUserWithEmailPassFunc(email, password)
            .then((res) => {
                const currUser = res.user
                setSuccess('user created Successfully')
                updateProfileFunc(currUser, name, photo)
                    .then(() => { })
                    .catch(e => console.log(e.message))
                    logout().then({})
            })
            .catch(e => setError(e.message))
    }
    return (
        <div className="hero min-h-screen">
            <div className="hero-content flex-col lg:flex-row w-full">
                <div className="text-center lg:text-left flex-1">
                    <img src={signupImg} alt="" />
                </div>
                <div className="card flex-shrink-0 flex-1 w-full max-w-xl shadow-2xl bg-base-100">
                    <form onSubmit={handleSignupFunc}>
                        <div className="card-body">
                            <h3 className='font-bold text-4xl text-center'>Signup</h3>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" name='name' placeholder="name" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Photo</span>
                                </label>
                                <input type="text" name='photo' placeholder="photo" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="text" name='email' placeholder="email" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name='password' placeholder="password" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Confirm Password</span>
                                </label>
                                <input type="password" name='confirmPassword' placeholder="confirm password" className="input input-bordered" />
                                <label className="label mt-2">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            {success && <p className='text-green-500'>{success}</p>}
                            {error && <p className='text-red-500'>*{error}</p>}
                            <div className="form-control mt-6">
                                <button className="btn btn-error">Signup</button>
                            </div>
                            <div className='text-center my-5 space-y-3'>
                                <p className='text-xl'>or signup with</p>
                                <ul className='flex gap-3 justify-center'>
                                    <li><Link><FaFacebook></FaFacebook></Link></li>
                                    <li><Link><FaGithub></FaGithub></Link></li>
                                    <li><Link><FaGoogle></FaGoogle></Link></li>
                                </ul>
                            </div>
                            <p>Already have an account? <Link to={'/signin'} className='text-green-500'>Signin</Link></p>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Signup;