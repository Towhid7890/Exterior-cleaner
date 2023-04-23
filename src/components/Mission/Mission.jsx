/* eslint-disable react/no-unescaped-entities */
import border from "../../assets/div.tp-bdr-pttrn-blk-acc.png"
const Mission = () => {
    return (
        <div>
            <div className="mt-5"><img src={border} alt="" /></div>
            <div className="text-center text-primary text-lg mt-5">
                <p>Our mission at MVP Exterior Cleaning is to deliver <br /> exceptional, reliable, and customer-focused exterior <br /> cleaning services that exceed our clients' expectations.</p>
            </div>
            <div className="text-center text-green-500 text-lg py-5">
                <p>We are dedicated to enhancing the beauty and <br />
value of your property while providing a seamless <br />
and stress-free experience.</p>
            </div>
        </div>
    );
};

export default Mission;