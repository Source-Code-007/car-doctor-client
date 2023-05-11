import bannerOne from "../../assets/images/banner/1.jpg";
import bannerTwo from "../../assets/images/banner/2.jpg";
import bannerThree from "../../assets/images/banner/3.jpg";
import bannerFour from "../../assets/images/banner/4.jpg";

const Banner = () => {
    return (
        <div className="carousel w-full h-[calc(100vh-60px)]">
            <div id="slide1" className="carousel-item relative w-full">
                <img src={bannerOne} className="w-full" />
                <div className="absolute flex justify-end transform -translate-y-1/2 gap-4 right-8 bottom-5">
                    <a href="#slide4" className="btn btn-circle">❮</a>
                    <a href="#slide2" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide2" className="carousel-item relative w-full">
                <img src={bannerTwo} className="w-full" />
                <div className="absolute flex justify-end transform -translate-y-1/2 gap-4 right-8 bottom-5">
                    <a href="#slide1" className="btn btn-circle">❮</a>
                    <a href="#slide3" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide3" className="carousel-item relative w-full">
                <img src={bannerThree} className="w-full" />
                <div className="absolute flex justify-end transform -translate-y-1/2 gap-4 right-8 bottom-5">
                    <a href="#slide2" className="btn btn-circle">❮</a>
                    <a href="#slide4" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide4" className="carousel-item relative w-full">
                <img src={bannerFour} className="w-full" />
                <div className="absolute flex justify-end transform -translate-y-1/2 gap-4 right-8 bottom-5">
                    <a href="#slide3" className="btn btn-circle">❮</a>
                    <a href="#slide1" className="btn btn-circle">❯</a>
                </div>
            </div>
        </div>
    );
};

export default Banner;