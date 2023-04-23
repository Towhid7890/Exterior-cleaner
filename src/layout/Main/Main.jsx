import Banner from "../../components/Banner/Banner";
import Footer from "../../components/Footer/Footer";
import Mission from "../../components/Mission/Mission";
import Navbar from "../../components/Navbar/Navbar";
import Promise from "../../components/Promise/Promise";
import ServiceMain from "../../components/ServiceMain/ServiceMain";
import Services from "../../components/Services/Services";
import WhyUs from "../../components/WhyUs/WhyUs";
import Work from "../../components/Work/Work";

const Main = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Banner></Banner>
            <Mission></Mission>
            <ServiceMain></ServiceMain>
            <WhyUs></WhyUs>
            <Promise></Promise>
            <Work></Work>
            <Services></Services>
            <Footer></Footer>
        </div>
    );
};

export default Main;