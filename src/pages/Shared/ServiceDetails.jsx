import { useLoaderData, useParams } from "react-router-dom";
import Navbar from "./Navbar";
import LittleFooter from "./LittleFooter";

const ServiceDetails = () => {
    const { id } = useParams();
    const services = useLoaderData();
    const service = services?.find(serve => (serve?.id == id));
    const { title, details, img,price } = service;
    console.log(service);

    return (
        <div className='container mx-auto p-4 '> 
        <Navbar></Navbar>
        {/* <ToastContainer></ToastContainer> */}
        <div className='relative bannertext'>
        <img className='rounded-lg mx-auto w-full' src={img} alt="" />
        
        <div className='absolute bottom-0 left-0 right-0 '>
            {/* Overlay */}
            <div className='bg-[#0B0B0B80] h-24 rounded-lg absolute inset-x-0 bottom-0'></div>
            <buttons className='cursor-pointer bg-lavender font-bold text-lg absolute mx-10  text-white py-4 px-6 rounded-lg z-10 bottom-4'>
            Book Now {price}
            </buttons>
        </div>
        </div>

           <div className="space-y-7 container mx-auto">
           <p className=' text-lavender font-bold text-5xl mb-6 mt-12'>{title}</p>
            <p className=' font-normal text-2xl text-[#0B0B0BB2]'>{details}</p>
            
            <ul className="list-disc list-inside space-y-2 ">
            <li className=' font-normal text-xl text-[#0B0B0BB2]'>
                <span className="font-bold text-xl">Package: </span>
                {service?.packageIncludes ? service?.packageIncludes : 'Not applicable'}</li>
            
                {
            service?.category_id == "Venue_Rental" ?  <>
             <li className=' font-normal text-xl text-[#0B0B0BB2]'>
            <span className="font-bold text-xl">Duration: </span>
            {service?.duration}</li>
            </>
            : ''
           }
            {
                service?.category_id == "music" ?  <li className=' font-normal text-xl text-[#0B0B0BB2]'>
                <span className="font-bold text-xl">Duration: </span>
                {service?.hoursIncluded}</li> : ''
            }
            {
                service?.category_id == "decoration" ?  <li className=' font-normal text-xl text-[#0B0B0BB2]'>
                <span className="font-bold text-xl">Setup Time: </span>
                {service?.setupTime}</li> : ''
            }
            {
                service?.category_id == "transportation" ?  <li className=' font-normal text-xl text-[#0B0B0BB2]'>
                <span className="font-bold text-xl">Capacity: </span>
                {service?.capacity}</li> : ''
            }
            <li className=' font-normal text-xl text-[#0B0B0BB2]'>
                <span className="font-bold text-xl">Photographer: </span>
                {service?.photographer ? service?.photographer : 'Not applicable'}</li>
            <li className=' font-normal text-xl text-[#0B0B0BB2]'>
                <span className="font-bold text-xl">Location: </span>
                {service?.location ? service?.location : 'Not applicable'}</li>
           {
            service?.id == 2 ?  <li className=' font-normal text-xl text-[#0B0B0BB2]'>
            <span className="font-bold text-xl">vegetarianOptions: </span>
            {service?.vegetarianOptions ? 'Yes available' : ''}</li>: ''
           }
           <li className=' text-xl text-gold font-bold'>Price: <span>{price}</span></li>
            </ul>
           
           </div>
            <div className="mt-10 bg-base-200">
            <LittleFooter></LittleFooter>
            </div>
        </div>

    );
};


export default ServiceDetails;