import { useEffect, useState } from "react";
import { LuHeartHandshake} from 'react-icons/lu';
import { BiHappyBeaming } from 'react-icons/bi';
import { FaUserFriends } from 'react-icons/fa';
import { SiTrustpilot } from 'react-icons/si';
import Navbar from "./Navbar";
import AOS from 'aos';
import 'aos/dist/aos.css';


const About = () => {
    const [data,setData] = useState([])

    useEffect(()=>{
        fetch('/event_statistics.json')
        .then(res => res.json())
        .then(data => {
            setData(data.data)
        })
    },[])
    useEffect(() => {
        AOS.init({
          duration: 1000, // Animation duration in milliseconds
          easing: 'ease-in-out', // Animation timing function
        });
      }, []);

    return (
        <div className="">  
        <Navbar></Navbar>
            <p  className="text-5xl text-light-navy-blue font-semibold text-center m-20">Our Company State</p>
            <div data-aos="fade-right" className="flex flex-col md:flex-row justify-between items-center ">

                { data && data.length &&
                    data?.map((singledata)=>(
                        <div className="flex flex-col items-center text-2xl space-y-6 font-semibold text-light-navy-blue"
                         key={singledata?.id}>
                            {/* <img src={singledata?.icon} alt="{singledata?.label}" /> */}
                            {
                                singledata?.id == 1 && <LuHeartHandshake className="text-red-400 text-5xl"></LuHeartHandshake> ||
                                singledata.id == 2 && <SiTrustpilot className="text-amber-400 text-5xl"></SiTrustpilot> ||
                                singledata.id == 3 && <BiHappyBeaming className="text-yellow-400 text-5xl"></BiHappyBeaming> ||
                                singledata.id == 4 && <FaUserFriends className="text-blue-400 text-5xl"></FaUserFriends>
                            }
                            
                            <span className="font-bold text-4xl text-green-400">{singledata?.count}</span> <br />
                            {singledata?.label}
                            </div>
                    ))
                }
            </div>
        </div>
    );
};

export default About;