import Service from "./Service";
import PropTypes from 'prop-types';


const Services = ({services}) => {
  
  return (
    <section id="services" className="container mx-auto mb-40 my-7">
           <div className="flex justify-center items-center"><img src="https://i.ibb.co/9G7xYVm/flowers.png" alt="flower" /></div>
        <p className="text-lavender text-center text-3xl font-bold">Our Services</p>
      <h1 className="headings text-light-navy-blue text-4xl text-center p-4 mb-5">
      We Provide The Best Service For Your Event
      </h1>

      {/* card container  */}

      <div className="container grid gap-3 grid-cols-1
       md:grid-cols-2 lg:grid-cols-3
       ">
        {/* CARD  will add here */}
            {
                services.map(service => <Service key={service.id} service={service}></Service>)
            }
        {/* Add more card components for other services */}
      </div>
    </section>
  );
};


Services.propTypes = {
  services: PropTypes.array.isRequired,
};
export default Services;
