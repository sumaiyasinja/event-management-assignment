import Service from "./Service";
import PropTypes from 'prop-types';


const Services = ({services}) => {
  return (
    <section className="container mx-auto mb-40 my-7">
           <div className="flex justify-center items-center"><img src="https://i.ibb.co/9G7xYVm/flowers.png" alt="flower" /></div>
        <p className="text-lavender text-center text-3xl font-bold">Our Services</p>
      <h1 className="headings text-light-navy-blue text-4xl text-center p-2">
      We Provide The Best Service For Your Event
      </h1>
      <p className="text-navy-blue text-center text-base p-4 mb-10">
      At Little Possum Parties, we take pride in offering top-notch event services that will make your event truly special. Our experienced team is dedicated to ensuring your event is a success, and we pay attention to every detail.

      </p>


      {/* card container  */}

      <div className="container grid gap-3 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 grid-rows-2">
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
