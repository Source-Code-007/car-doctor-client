import { Link } from 'react-router-dom';
import signupImg from '../../assets/images/login/login.svg'
import { FaFacebook, FaGithub, FaGoogle } from 'react-icons/fa';
const Signup = () => {
    return (
        <div className="hero min-h-screen">
        <div className="hero-content flex-col lg:flex-row w-full">
            <div className="text-center lg:text-left flex-1">
                <img src={signupImg} alt="" />
            </div>
            <div className="card flex-shrink-0 flex-1 w-full max-w-xl shadow-2xl bg-base-100">
                <form>
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
                            <input type="password" name='confirm-password' placeholder="confirm password" className="input input-bordered" />
                            <label className="label mt-2">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-error">Login</button>
                        </div>
                        <div className='text-center my-5 space-y-3'>
                        <p className='text-xl'>or signup with</p>
                        <ul className='flex gap-3 justify-center'>
                            <li><Link><FaFacebook></FaFacebook></Link></li>
                            <li><Link><FaGithub></FaGithub></Link></li>
                            <li><Link><FaGoogle></FaGoogle></Link></li>
                        </ul>
                        </div>
                        <p>Already have an account? <Link to={'/sigin'}>Signin</Link></p>
                    </div>
                </form>
            </div>
        </div>
    </div>
    );
};

export default Signup;