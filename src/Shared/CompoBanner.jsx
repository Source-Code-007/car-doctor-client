import bgImg from '../../src/assets/images/checkout/checkout.png'

const CompoBanner = ({children}) => {
    return (
        <div className='h-44 bg-slate-700 bg-blend-overlay p-14 my-5 rounded bg-center flex justify-center items-center' style={{backgroundImage: `url(${bgImg})`}}>
            <p className='font-bold text-4xl text-white'>{children}</p>
        </div>
    );
};

export default CompoBanner;