import Footer from '../Shared/Footer';
import Nav from '../Shared/Nav';
import { Outlet } from 'react-router-dom';

const LayoutOne = () => {
    return (
        <div className='my-container'>
            <Nav></Nav>   
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default LayoutOne;