import { useEffect, useState } from "react";
import Service from "./Service";

const Services = () => {
    const [services, setServices] = useState([])
    useEffect(() => {
        fetch('https://car-doctor-server-iota-woad.vercel.app/services')
            .then(res => res.json())
            .then(data => setServices(data))
            .catch(e => console.log(e.message))
    }, [])
    return (
        <section className="py-16">
            <div className="space-y-4 text-center w-5/6 lg:w-3/6 mx-auto py-5">
                <h3 className='text-orange-500 font-bold text-xl'>Service</h3>
                <h4 className='font-bold text-5xl'>Our Service Area</h4>
                <p>the majority have suffered alteration in some form, by injected humour, or randomised words which do not look even slightly believable.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
                {
                    services.map(service => {
                        return <Service
                            key={service._id}
                            service={service}
                        ></Service>
                    })
                }
            </div>
        </section>
    );
};

export default Services;