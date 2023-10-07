import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

const Service = ({ service }) => {
  const { id, title, details, img } = service;

  // Define a style for the background image and overlay
  const cardStyle = {
    backgroundImage: `url(${service.img})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    position: 'relative', // Make sure the container is positioned relatively
  };

  const overlayStyle = {
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Adjust the color and opacity as needed
  };

  return (
    <div
    className={`rounded-lg border border-transparent border-[#E7E7E7]
    flex justify-center items-center  
    ${
      id == 1 ?  'col-span-2 row-span-2':'col-span-1 row-span-1' 
    }`}

      // bg-gradient-to-b from-[#F3F3F3] to-transparent
      style={cardStyle} // Apply the background image style
    >
      <div className="overlay w-full h-full     flex justify-center items-center  
" style={overlayStyle}>
        {/* <figure className="flex items-center justify-center px-10 pt-10 mb-4"> */}
          {/* img */}
          {/* <img src={img} alt={title} className="rounded-xl" /> */}
        {/* </figure> */}
        <div className="card-body items-center text-center text-white">
          {/* title */}
          <h2 className="card-title mb-6 text-3xl text-white">{title}</h2>
          {/* description */}
          <p className="mb-8">{details}</p>
          <div className="card-actions mb-19">
            {/* arrow button */}
            <NavLink to="/">
              <button className="btn text-white border-none rounded-2xl hover:bg-amber-500 bg-gold">View Details</button>
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
