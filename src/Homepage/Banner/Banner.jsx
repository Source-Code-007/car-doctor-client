import bannerOne from "../../assets/images/banner/1.jpg";
import bannerTwo from "../../assets/images/banner/2.jpg";
import bannerThree from "../../assets/images/banner/3.jpg";
import bannerFour from "../../assets/images/banner/4.jpg";

const Banner = () => {
    return (
        <div className="carousel w-full h-[calc(100vh-85px)] my-5">
            <div id="slide1" className="carousel-item relative w-full">
                <div className="relative h-full w-full">
                    <img src={bannerOne} className="h-full w-full rounded-lg" />
                    <div className="absolute top-0 left-0 rounded-lg bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0) 100%)] h-full w-full ">
                        <div className="absolute top-1/2 -translate-y-1/2 left-0 px-8 text-white space-y-3 w-6/6 md:w-4/6 lg:w-2/6">
                            <h2 className="font-bold text-6xl">Affordable Price For Car Servicing</h2>
                            <p className="text-gray-300">There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                            <button className="btn btn-error">Discover more</button>
                            <button className="btn btn-outline btn-error ml-3">Latest news</button>
                        </div>
                    </div>
                </div>
                <div className="absolute flex justify-end transform -translate-y-1/2 gap-4 right-8 bottom-5">
                    <a href="#slide4" className="btn btn-circle">❮</a>
                    <a href="#slide2" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide2" className="carousel-item relative w-full">
            <div className="relative h-full w-full">
                    <img src={bannerTwo} className="h-full w-full rounded-lg" />
                    <div className="absolute top-0 left-0 rounded-lg bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0) 100%)] h-full w-full ">
                        <div className="absolute top-1/2 -translate-y-1/2 left-0 px-8 text-white space-y-3 w-6/6 md:w-4/6 lg:w-2/6">
                            <h2 className="font-bold text-6xl">Affordable Price For Car Servicing</h2>
                            <p className="text-gray-300">There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                            <button className="btn btn-error">Discover more</button>
                            <button className="btn btn-outline btn-error ml-3">Latest news</button>
                        </div>
                    </div>
                </div>
                <div className="absolute flex justify-end transform -translate-y-1/2 gap-4 right-8 bottom-5">
                    <a href="#slide1" className="btn btn-circle">❮</a>
                    <a href="#slide3" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide3" className="carousel-item relative w-full">
            <div className="relative h-full w-full">
                    <img src={bannerThree} className="h-full w-full rounded-lg" />
                    <div className="absolute top-0 left-0 rounded-lg bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0) 100%)] h-full w-full ">
                        <div className="absolute top-1/2 -translate-y-1/2 left-0 px-8 text-white space-y-3 w-6/6 md:w-4/6 lg:w-2/6">
                            <h2 className="font-bold text-6xl">Affordable Price For Car Servicing</h2>
                            <p className="text-gray-300">There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                            <button className="btn btn-error">Discover more</button>
                            <button className="btn btn-outline btn-error ml-3">Latest news</button>
                        </div>
                    </div>
                </div>
                <div className="absolute flex justify-end transform -translate-y-1/2 gap-4 right-8 bottom-5">
                    <a href="#slide2" className="btn btn-circle">❮</a>
                    <a href="#slide4" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide4" className="carousel-item relative w-full">
            <div className="relative h-full w-full rounded-lg">
                    <img src={bannerFour} className="h-full w-full" />
                    <div className="absolute top-0 left-0 rounded-lg bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0) 100%)] h-full w-full ">
                        <div className="absolute top-1/2 -translate-y-1/2 left-0 px-8 text-white space-y-3 w-6/6 md:w-4/6 lg:w-2/6">
                            <h2 className="font-bold text-6xl">Affordable Price For Car Servicing</h2>
                            <p className="text-gray-300">There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                            <button className="btn btn-error">Discover more</button>
                            <button className="btn btn-outline btn-error ml-3">Latest news</button>
                        </div>
                    </div>
                </div>
                <div className="absolute flex justify-end transform -translate-y-1/2 gap-4 right-8 bottom-5">
                    <a href="#slide3" className="btn btn-circle">❮</a>
                    <a href="#slide1" className="btn btn-circle">❯</a>
                </div>
            </div>
        </div>
    );
};

export default Banner;