import "./home.css";
import {
  Header,
  MainSection,
  HomeMiddleSec,
  OfferSection,
  BottomSec,
  Alert,
} from "../../helpers/imports";
import {
  footerData,
  sliderData,
  serviceSecData,
  aboutData,
} from "../../assets/data";
const Home = () => {
  return (
    <>
      <Alert />
      <Header />
      <MainSection aboutData={aboutData} />
      <HomeMiddleSec serviceSecData={serviceSecData} />
      <OfferSection />
      <BottomSec footerData={footerData} sliderData={sliderData} />
    </>
  );
};

export default Home;
