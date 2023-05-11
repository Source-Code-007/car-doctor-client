import AboutUs from "./AboutUs/AboutUs";
import Banner from "./Banner/Banner";
import HaveAQuestion from "./HaveAQuestion/HaveAQuestion";
import Services from "./Services/Services";

const Homepage = () => {
    return (
        <>
            <Banner></Banner>  
            <AboutUs></AboutUs>
            <Services></Services>
            <HaveAQuestion></HaveAQuestion>
        </>
    );
};

export default Homepage;