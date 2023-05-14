import { Link, NavLink, useParams } from "react-router-dom";
import CompoBanner from "../../Shared/CompoBanner";
import { useEffect, useState } from "react";
import { FaArrowRight } from "react-icons/fa";
import logo from '../../assets/logo.svg'

const ServicesDetails = () => {
    const {id} = useParams() 
    const [service, setService] = useState({})
    const [allServices, setAllServices] = useState([])

    useEffect(() => {
        fetch(`http://localhost:8000/services/${id}`)
        .then(res => res.json())
        .then(data => setService(data))
        .catch(e => console.log(e.message))
    }, [id])

    useEffect(()=> {
        fetch(`http://localhost:8000/services`)
        .then(res => res.json())
        .then(data => setAllServices(data))
        .catch(e => console.log(e.message))
    }, [])

    const { _id, img, title, price, facility, description } = service
    return (
        <div>
            <CompoBanner>Services Details</CompoBanner>
            <div className="grid grid-cols-12 gap-5">
                <div className="col-span-8 p-8 space-y-4">
                    <img className="h-80 w-full rounded-lg" src={img} alt="" />
                    <h2 className="font-bold text-4xl">{title}</h2>
                    <p className="text-gray-600">{description}</p>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                        {
                            facility && facility.map((fac, ind) => {
                                const { name, details } = fac
                                return <div key={ind} className="p-5 rounded-lg border-t border-t-red-500 space-y-3 bg-gray-100">
                                    <h2 className="font-bold text-xl">{name}</h2>
                                    <p className="font-semibold text-gray-600">{details}</p>
                                </div>
                            })
                        }
                    </div>


                </div>
                <div className="col-span-4">
                    <div className="rounded-lg p-10 bg-gray-100 space-y-4">
                        <h2 className="font-bold text-3xl">Services</h2>
                        {
                            allServices.map((service, ind) => {
                                const { _id, title } = service
                                return <NavLink key={ind} className={ ({isActive, isPending})=> `block p-5 rounded ${isActive? `bg-red-500 text-white` : 'border border-red-500 text-black bg-slate-50'}`} to={`/services/${_id}`}><button className="w-full flex justify-between"> <span>{title}</span> <FaArrowRight></FaArrowRight></button></NavLink>
                            })
                        }
                    </div>
                    <div className="my-5 bg-black rounded-lg p-10 space-y-3 text-white">
                        <figure>
                            <img src={logo} className="mx-auto" alt="" />
                        </figure>
                        <p className="font-bold text-xl">Need help? We are here to help.</p>
                        <div className="rounded-lg bg-white p-6 pb-12 relative">
                            <p className="font-bold text-xl text-black"><span className="text-red-500">Car Doctor</span> special</p>
                            <p className="font-semibold text-gray-700">save up to <span className="text-red-500">60% off</span></p>
                            <button className="btn btn-error absolute -bottom-4 inset-x-0 w-fit mx-auto text-white">Get a quote</button>
                        </div>
                    </div>
                    <h2 className="font-bold text-3xl">Price: ${price}</h2>
                    <Link to={`/checkout/${_id}`}><button className="btn-lg btn-error rounded bg-red-500 w-full flex justify-between items-center text-white mt-3"> Proceed checkout <FaArrowRight></FaArrowRight></button></Link>
                </div>
            </div>

        </div>
    );
};

export default ServicesDetails;