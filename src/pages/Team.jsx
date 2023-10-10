import { useEffect } from "react";
import Navbar from "./Shared/Navbar";
import AOS from "aos";
import "aos/dist/aos.css";

const Team = () => {
  useEffect(() => {
    AOS.init({
        duration: 800, // Animation duration in milliseconds
    });
}, []);

    return (
        <div>
            <Navbar></Navbar>
            <p className="text-4xl text-lavender text-center py-10">Our Team</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div 
                 data-aos="fade-up" 
                 data-aos-duration="800"
                className="bg-white shadow-lg rounded-lg overflow-hidden">
                    <div className="relative">
                        <img
                            src="https://i.ibb.co/6HQ37Kh/stefan-stefancik-QXev-Dflbl8-A-unsplash.jpg"
                            alt="Sumaiya Sinja"
                            className="w-full h-56 object-cover object-center"
                        />
                    </div>
                    <div className="py-4 px-6">
                        <h2 className="text-2xl font-semibold text-gray-800">Sumaiya Sinja</h2>
                        <p className="text-gray-600">CEO and Founder</p>
                    </div>
                </div>

                <div 
                   data-aos="fade-up" 
                   data-aos-duration="800"
                   className="bg-white shadow-lg rounded-lg overflow-hidden">
                    <div className="relative">
                        <img
                            src="https://i.ibb.co/QnF7Lv6/370162076-1353948895532758-114744159248260084-n.jpg"
                            alt="Mr. X"
                            className="w-full h-56 object-cover object-center"
                        />
                    </div>
                    <div className="py-4 px-6">
                        <h2 className="text-2xl font-semibold text-gray-800">Mr. X</h2>
                        <p className="text-gray-600">Founder & Team Manager</p>
                    </div>
                </div>

                <div
                   data-aos="fade-up" 
                   data-aos-duration="800"
                    className="bg-white shadow-lg rounded-lg overflow-hidden">
                    <div className="relative">
                        <img
                            src="https://i.ibb.co/dQF58hy/384862078-3596194700650498-1752904254446908345-n.jpg"
                            alt="Ms. Ana"
                            className="w-full h-56 object-cover object-center"
                        />
                    </div>
                    <div className="py-4 px-6">
                        <h2 className="text-2xl font-semibold text-gray-800">Ms. Ana</h2>
                        <p className="text-gray-600">Chef</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Team;
