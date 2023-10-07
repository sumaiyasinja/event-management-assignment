import PropTypes from 'prop-types';

const Service = ({service}) => {
    console.log(service)
    const{id,title,details,img}=service

    return (
        <div className="w-96 border border-transparent rounded-none border-[#E7E7E7] bg-gradient-to-b from-[#F3F3F3] to-transparent">
        <figure className="flex items-center justify-center px-10 pt-10 mb-4">
          {/* img */}
          <img src={img} alt={title} className="rounded-xl" />
        </figure>
        <div className="card-body items-center text-center">
          {/* title */}
          <h2 className="card-title mb-6 text-3xl ">{title}</h2> 
          {/* description */}
          <p className="text-base mb-8 ">
            {details}
          </p>
          <div className="card-actions mb-19">
              {/* arrow button */}
            <a href="">
              <img src="images/Frame.png"  />
            </a>
          </div>
        </div>
      </div>
    );
};

Service.propTypes = {
    service: PropTypes.object,
  };

export default Service;