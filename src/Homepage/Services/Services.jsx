import { useEffect, useRef, useState } from "react";
import Service from "./Service";

const Services = () => {
    const [services, setServices] = useState([])
    const [priceSorting, setPriceSorting] = useState('')
    const [searchVal, setSearchVal] = useState('')
    const searchInp = useRef()

    useEffect(() => {
        fetch(`https://car-doctor-server-iota-woad.vercel.app/services?sort=${priceSorting}&search=${searchVal}`)
            .then(res => res.json())
            .then(data => {
                setServices(data)
            })
            .catch(e => console.log(e.message))
    }, [priceSorting, searchVal])

    return (
        <section className="py-16">
            <div className="space-y-4 text-center w-5/6 lg:w-3/6 mx-auto py-5">
                <h3 className='text-orange-500 font-bold text-xl'>Service</h3>
                <h4 className='font-bold text-5xl'>Our Service Area</h4>
                <p>the majority have suffered alteration in some form, by injected humour, or randomised words which do not look even slightly believable.</p>
            </div>

            <div className="space-y-5 py-5">
                <div className="form-control">
                    <div className="input-group justify-center">
                        <input ref={searchInp} type="text" placeholder="Search…" className="input input-bordered" />
                        <button onClick={() => setSearchVal(searchInp.current.value)} className="btn btn-square">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                        </button>
                    </div>
                </div>
                <select onChange={(e) => setPriceSorting(e.target.value)} defaultValue='default' className="select select-error !mt-5 flex focus:outline-none mx-auto">
                    <option disabled value='default'>Sort by price</option>
                    <option value='highToLow'>High to Low</option>
                    <option value='lowToHigh'>Low to High</option>
                </select>
            </div>

            {
                !services.length ? <div className="min-h-[40vh] flex justify-center items-center"><h2 className="font-bold rounded text-4xl bg-emerald-200 p-5">No data found</h2></div> :
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
            }
        </section>
    );
};

export default Services;