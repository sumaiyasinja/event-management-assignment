import PropTypes from 'prop-types';
import { LuHeartHandshake} from 'react-icons/lu';
import { BiHappyBeaming } from 'react-icons/bi';
import { FaUserFriends } from 'react-icons/fa';
import { SiTrustpilot } from 'react-icons/si';

const EventStatistic = ({singledata}) => {
    // console.log(singledata)
    return (
        <div className='flex flex-col items-center space-y-4'>
            {
                singledata?.id == 1 && <LuHeartHandshake className="text-white text-5xl"></LuHeartHandshake> ||
                singledata.id == 2 && <SiTrustpilot className="text-white  text-5xl"></SiTrustpilot> ||
                singledata.id == 3 && <BiHappyBeaming className="text-white  text-5xl"></BiHappyBeaming> ||
                singledata.id == 4 && <FaUserFriends className="text-white text-5xl"></FaUserFriends>
            }
            <p className='text-5xl font-semibold text-gold'>  {singledata.count}</p>
            <p  className='text-2xl font-medium text-white' >{singledata.label}</p>
        </div>
    );
};

EventStatistic.propTypes = {
    singledata: PropTypes.object,
  };

export default EventStatistic;