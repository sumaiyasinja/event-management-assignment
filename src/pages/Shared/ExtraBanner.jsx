import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
const ExtraBanner = () => {
    useEffect(() => {
        AOS.init({
          duration: 1000, // Animation duration in milliseconds
          easing: 'ease-in-out', // Animation timing function
        });
      }, []);
      

    return (
        <div  data-aos="fade-right"
        data-aos-easing="linear"
        data-aos-duration="1500" className="space-y-2 text-3xl m-4 h-[300px] py-20 bg-white text-center
         flex flex-col items-center justify-center text-navy-blue rounded-3xl border border-s-2 borde-s-lavender">
           <img src="https://i.ibb.co/9G7xYVm/flowers.png" alt="flower" />
           <p> Welcome to Little Possum Parties, a premier catering and event planning <br /> 
            company in New York, USA.
            <br /> ===
            </p>
            <div data-aos="fade-up"
     data-aos-anchor-placement="center-bottom">
</div>
        </div>

    );
};

export default ExtraBanner;