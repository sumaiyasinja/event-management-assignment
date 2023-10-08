import { useEffect, useState } from "react";
import EventStatistic from "./EventStatistic";

const EventStatistics = () => {
    const [data,setData] = useState([])
    

    useEffect(() => {
        fetch('../../../public/event_statistics.json')
        .then(res => res.json())
          .then(jsondata => {
            setData(jsondata.data);
          });
      }, []);     

      
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 justify-between 
        bg-light-navy-blue p-6 py-9 my-9  rounded-3xl">
            
            {data.map((singledata)=>
                <EventStatistic singledata={singledata} key={singledata.id}></EventStatistic>
            )}
            
        </div>
    );
};

export default EventStatistics;