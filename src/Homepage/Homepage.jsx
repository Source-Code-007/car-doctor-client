import AboutUs from "./AboutUs/AboutUs";
import Banner from "./Banner/Banner";
import HaveAQuestion from "./HaveAQuestion/HaveAQuestion";
import Services from "./Services/Services";
import WhyChooseUs from "./WhyChooseUs/WhyChooseUs";

const Homepage = () => {
    return (
        <>
            <Banner></Banner>  
            <AboutUs></AboutUs>
            <Services></Services>
            <HaveAQuestion></HaveAQuestion>
            <WhyChooseUs></WhyChooseUs>
        </>
    );
};

export default Homepage;