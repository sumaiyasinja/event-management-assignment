import { useState, useEffect } from 'react';

const Banner = () => {
  const [textIndex, setTextIndex] = useState(0);
  const bannerTexts = ['Birthday', 'Weddings', 'Engamements', ' Anniversaries','Retirement Parties', 'Baby shower'];

  useEffect(() => {
    // Create an interval to change the text every few seconds
    const interval = setInterval(() => {
      setTextIndex((prevIndex) => (prevIndex + 1) % bannerTexts.length);
    }, 3000); // Change text every 3 seconds

    // Clear the interval when the component unmounts
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative ">
      <img src="https://i.ibb.co/d6VHtdF/banner.jpg" alt="Banner Image"
       className="w-full bg-cover opacity-70" />
      <p className="absolute top-[30%] left-0 right-0 text-5xl bannertext text-white text-center py-4 bg-opacity-70 bg-transparent">
      <span className='font-black text-[180px] text-white navlogo'>{bannerTexts[textIndex]}</span> <br /> <br />
        <span className='text-gray-700 w-full'>Let Us Plan Your Next Event Together..</span>
      </p>
    </div>
  );
};

export default Banner;
