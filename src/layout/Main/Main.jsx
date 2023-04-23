import Banner from "../../components/Banner/Banner";
import Experience from "../../components/Experience/Experience";

import Mission from "../../components/Mission/Mission";

import Promise from "../../components/Promise/Promise";
import Quality from "../../components/Quality/Quality";
import Review from "../../components/Review/Review";
import ServiceMain from "../../components/ServiceMain/ServiceMain";
import Services from "../../components/Services/Services";
import WhyUs from "../../components/WhyUs/WhyUs";
import Work from "../../components/Work/Work";

const Main = () => {
  return (
    <div>
      <Banner></Banner>
      <Mission></Mission>
      <ServiceMain></ServiceMain>
      <WhyUs></WhyUs>
      <Promise></Promise>
      <Work></Work>
      <Services></Services>
      <Quality></Quality>
      <Review></Review>
      <Experience></Experience>
    </div>
  );
};

export default Main;
