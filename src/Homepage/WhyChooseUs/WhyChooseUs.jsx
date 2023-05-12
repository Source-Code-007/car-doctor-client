import { FaAirbnb, FaHandsHelping, FaSignal, FaStopwatch, FaTeamspeak, FaWatchmanMonitoring } from "react-icons/fa";

const WhyChooseUs = () => {
    return (
        <div className="py-16">
            <div className="space-y-4 text-center w-5/6 lg:w-3/6 mx-auto py-5">
                <h3 className='text-orange-500 font-bold text-xl'>Core Features</h3>
                <h4 className='font-bold text-5xl'>Why Choose Us</h4>
                <p>the majority have suffered alteration in some form, by injected humour, or randomized words which do not look even slightly believable.</p>
            </div>
            <div className="grid gap-4 grid-cols-2 md:grid-cols-3 xl:grid-cols-6 py-10">
                <div className="font-bold text-xl py-8 px-4 rounded space-y-2 text-center shadow">
                    <span className="text-3xl text-orange-500"><FaTeamspeak className="mx-auto"></FaTeamspeak></span>
                    <p>Expert Team</p>
                </div>
                <div className="font-bold text-xl py-8 px-4 rounded space-y-2 text-center text-white bg-orange-500 shadow">
                    <span className="text-3xl"><FaWatchmanMonitoring className="mx-auto"></FaWatchmanMonitoring></span>
                    <p>Timely Delivery</p>
                </div>
                <div className="font-bold text-xl py-8 px-4 rounded space-y-2 text-center shadow">
                    <span className="text-3xl text-orange-500"><FaHandsHelping className="mx-auto"></FaHandsHelping></span>
                    <p>24/7 support</p>
                </div>
                <div className="font-bold text-xl py-8 px-4 rounded space-y-2 text-center shadow">
                    <span className="text-3xl text-orange-500"><FaAirbnb className="mx-auto"></FaAirbnb></span>
                    <p>Best equipment</p>
                </div>
                <div className="font-bold text-xl py-8 px-4 rounded space-y-2 text-center shadow">
                    <span className="text-3xl text-orange-500"><FaSignal className="mx-auto"></FaSignal></span>
                    <p>100% Guranty</p>
                </div>
                <div className="font-bold text-xl py-8 px-4 rounded space-y-2 text-center shadow">
                    <span className="text-3xl text-orange-500"><FaStopwatch className="mx-auto"></FaStopwatch></span>
                    <p>Timely Delivery</p>
                </div>
            </div>
        </div>
    );
};

export default WhyChooseUs;