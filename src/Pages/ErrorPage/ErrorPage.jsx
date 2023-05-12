import { Link } from 'react-router-dom';
import errPhoto from '../../assets/images/404.gif'
const ErrorPage = () => {
    return (
        <div className='min-h-screen bg-center bg-no-repeat relative' style={{backgroundImage: `url(${errPhoto})`}}>
            <div className='absolute top-5 left-1/2 -translate-x-1/2'>
                <Link to={'/'}><button className="btn btn-error">Back to Homepage</button></Link>
            </div>
        </div>
    );
};

export default ErrorPage;