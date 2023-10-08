import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

const Service = ({ service }) => {
  const { id, title, details,price } = service;

  // style for the background image and overlay
  const cardStyle = {
    backgroundImage: `url(${service.img})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    position: 'relative', 
  };

  const overlayStyle = {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  };

  return (
    <div
    className={`rounded-lg border border-transparent border-[#E7E7E7]  
    flex justify-center items-center  
    ${
      id == 1 ?  'lg:col-span-2 row-span-2':'col-span-1 row-span-1' 
    }`}

      // bg-gradient-to-b from-[#F3F3F3] to-transparent
      style={cardStyle} // Apply the background image style
    >
      <div className="overlay bannertext  w-full h-full  flex justify-center items-center rounded-lg
" style={overlayStyle}>
        {/* <figure className="flex items-center justify-center px-10 pt-10 mb-4"> */}
          {/* img */}
          {/* <img src={img} alt={title} className="rounded-xl" /> */}
        {/* </figure> */}
        <div className="card-body items-center text-center text-white">
          {/* title */}
          <h2 className="card-title mb-6 text-3xl text-white navlogo">{title}</h2>
          {/* description */}
          <p className="mb-8">{details}</p>
          <p className="mb-8 ">{price}</p>
          <div className="card-actions mb-19">
            {/* arrow button */}
            <NavLink to={`/view-details/${id}`}>
              <button className="px-5 py-2 text-xl cursor-pointer text-white rounded-lg hover:bg-light-navy-blue bg-lavender">Details</button>
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

Service.propTypes = {
  service: PropTypes.object,
};

export default Service;
