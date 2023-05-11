import Footer from '../Shared/Footer';
import Nav from '../Shared/Nav';
import { Outlet } from 'react-router-dom';

const LayoutOne = () => {
    return (
        <>
            <Nav></Nav>   
            <Outlet></Outlet>
            <Footer></Footer>
        </>
    );
};

export default LayoutOne;