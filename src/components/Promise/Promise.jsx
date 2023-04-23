import logo from "../../assets/mik-plaid-promise-v2.png.png"
const Promise = () => {
    return (
        <div className="flex bg-info items-center lg:px-52 gap-10">
            <img src={logo} className="w-[280px]" alt="" />
            <div className="text-white">
                <p>Our Promises</p>
                <p className="mb-5">Exceptional service, quality products, respect for your property, clear communication, guaranteed satisfaction.</p>
                <button className="bg-secondary border  text-primary font-bold border-primary rounded-2xl py-1 px-6">Why MVP?</button>
            </div>
        </div>
    );
};

export default Promise;