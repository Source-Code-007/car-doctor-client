import { FaCalendar, FaLocationArrow, FaPhone } from 'react-icons/fa';

const HaveAQuestion = () => {
    return (
        <section className='py-16 px-14 bg-black my-10 rounded-lg'>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-4 text-white font-bold'>
                <div className='flex items-center gap-5'>
                    <span className='text-red-500 text-3xl'><FaCalendar></FaCalendar></span>
                    <div>
                        <h4 className='text-gray-400'>We are open monday-friday</h4>
                        <h2>7:00 am - 9:00 pm</h2>
                    </div>
                </div>
                <div className='flex items-center gap-5'>
                    <span className='text-red-500 text-3xl'><FaPhone></FaPhone></span>
                    <div>
                        <h4 className='text-gray-400'>Have a question?</h4>
                        <h2>+8801608464718</h2>
                    </div>
                </div>
                <div className='flex items-center gap-5'>
                    <span className='text-red-500 text-3xl'><FaLocationArrow></FaLocationArrow></span>
                    <div>
                        <h4 className='text-gray-400'>Need a repair? our address</h4>
                        <h2>Liza Street, New York</h2>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HaveAQuestion;