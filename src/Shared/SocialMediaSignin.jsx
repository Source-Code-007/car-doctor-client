import { useContext } from 'react';
import { FaFacebook, FaGithub, FaGoogle } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { authContext } from '../Provider/AuthProvider';

const SocialMediaSignin = () => {
    const { user, setLoading, setUser, signinWithGoogleFunc, signinWithGithubFunc,} = useContext(authContext)

    const handleGoogleSigninFunc =()=>{
        signinWithGoogleFunc()
        .then(res=> {
            const currUser = res.user
            setUser(currUser)
        }).catch(e=> {
            setLoading(false)
            console.log(e.message);
        })
    }

    const handleGithubSigninFunc =()=>{
        signinWithGithubFunc()
        .then(res=> {
            const currUser = res.user
            setUser(currUser)
        })
        .catch(e => {
            setLoading(false)
            console.log(e.message);
        })
    }
    return (
        <ul className='flex gap-3 justify-center'>
            <li><Link><FaFacebook></FaFacebook></Link></li>
            <li><Link onClick={handleGithubSigninFunc}><FaGithub></FaGithub></Link></li>
            <li><Link onClick={handleGoogleSigninFunc}><FaGoogle></FaGoogle></Link></li>
        </ul>
    );
};

export default SocialMediaSignin;