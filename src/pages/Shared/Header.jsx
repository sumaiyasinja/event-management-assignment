import Banner from "./Banner";
import Navbar from "./Navbar";
import moment from 'moment';

const Header = () => {
    return (
        <div>
            {/* <div className="flex justify-center items-center flex-col"> */}
            <div className="mb-4 flex flex-col-reverse lg:flex-row justify-between gap-6 items-center">
            
                <p className="text-teal-500">12356 Glassford Street <br />
               <span className=" font-bold text-xl text-black">Glasgow New York, USA</span> </p>
                
                <p>Office Hours: <br /><span className="font-bold text-lavender text-xl">9:00 - 5:00 pm</span>
                </p>

                <img src="https://i.ibb.co/SwfSbnv/attachment-20786756-removebg-preview.png" 
                alt="logo" width={200}/>

                <p className="text-dark-gray">Support <br /><span className=" text-xl text-lavender font-bold">1800 - 123 456 789</span></p>
                <button  className="hidden lg:block bg-lavender  hover:bg-light-navy-blue text-white font-bold py-2 px-4 rounded">
                    <a href="#services">Book Now</a>
                </button>
                {/* <p className="text-2xl font-bold text-blue-400">MAKE YOUR SPECIAL DAY MORE SPECIAL WITH US</p>
             <p className='text-base text-[#333366 ] capitalize'>{moment().format("dddd, MMMM D, YYYY")}</p> */}
            
            </div>
            <Navbar></Navbar>

            {/* Bnner */}
           <Banner></Banner>
        </div>
    );
};

export default Header;