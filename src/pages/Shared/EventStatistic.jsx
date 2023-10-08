import PropTypes from 'prop-types';

const EventStatistic = ({singledata}) => {
    // console.log(singledata)
    return (
        <div className='flex flex-col items-center'>
            <p className='text-5xl font-semibold text-gold'>  {singledata.count}</p>
            <p  className='text-2xl font-medium text-white' >{singledata.label}</p>
        </div>
    );
};

EventStatistic.propTypes = {
    singledata: PropTypes.object,
  };

export default EventStatistic;