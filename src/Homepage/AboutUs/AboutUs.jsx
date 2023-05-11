import person from '../../assets/images/about_us/person.jpg'
const AboutUs = () => {
    return (
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-10 py-20'>
            <div>
                <img src={person} className='max-w-full rounded' alt="" />
            </div>
            <div className='flex flex-col space-y-4 justify-between'>
                    <h3 className='text-orange-500 font-bold text-3xl'>About Us</h3>
                    <h4 className='font-bold text-5xl'>We are qualified & of experience in this field</h4>
                    <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomized words which do not look even slightly believable. </p>
                    <p>the majority have suffered alteration in some form, by injected humour, or randomized words which do not look even slightly believable. </p>
                    <button className="btn btn-error w-fit">Get More Info</button>
            </div>
        </div>
    );
};

export default AboutUs;