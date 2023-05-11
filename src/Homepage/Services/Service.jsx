import { FaArrowRight } from "react-icons/fa";

const Service = ({ service }) => {
    const { img, title, price } = service
    return (
        <div className="card card-compact bg-base-100 shadow-xl">
            <figure>
                <img className="h-80 w-full" src={img} />
            </figure>
            <div className="card-body space-y-4">
                <h2 className="card-title">{title}</h2>
                <div className="card-actions justify content-between items-center">
                    <p className="text-red-500 font-bold">Price: ${price}</p>
                    <span className="text-red-500"><FaArrowRight></FaArrowRight></span>
                </div>
            </div>
        </div>
    );
};

export default Service;