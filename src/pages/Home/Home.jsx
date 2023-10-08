import { useLoaderData } from "react-router-dom";
import Footer from "../../layouts/Footer";
import Header from "../Shared/Header";
import Services from "../Shared/Services";
import ExtraBanner from "../Shared/ExtraBanner";
import EventStatistics from "../Shared/EventStatistics";

const Home = () => {
    const services= useLoaderData();

    return (
       <div>
            <Header></Header>
            <ExtraBanner></ExtraBanner>
            <Services  services={services} key={services.id}></Services>
            <EventStatistics></EventStatistics>
            <Footer></Footer>
       </div>
    );
};

export default Home;