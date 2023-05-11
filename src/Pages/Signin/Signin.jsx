import { Link } from 'react-router-dom';
import signingImg from '../../assets/images/login/login.svg'
import { FaFacebook, FaGithub, FaGoogle } from 'react-icons/fa';
const Signin = () => {
    return (
        <div className="hero min-h-screen">
            <div className="hero-content flex-col lg:flex-row w-full">
                <div className="text-center lg:text-left">
                    <img src={signingImg} alt="" />
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form>
                        <div className="card-body">
                            <h3 className='font-bold text-4xl text-center'>Login</h3>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="text" placeholder="email" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="text" placeholder="password" className="input input-bordered" />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-error">Login</button>
                            </div>
                            <div className='text-center my-5 space-y-3'>
                            <p className='text-xl'>or signin with</p>
                            <ul className='flex gap-3 justify-center'>
                                <li><Link><FaFacebook></FaFacebook></Link></li>
                                <li><Link><FaGithub></FaGithub></Link></li>
                                <li><Link><FaGoogle></FaGoogle></Link></li>
                            </ul>
                            </div>
                            <p>Do not have an account? <Link to={'/signup'}>Signup</Link></p>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Signin;