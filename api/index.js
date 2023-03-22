import axios from "axios";
import data from "../response/data"
const today = new Date().toLocaleDateString("en-GB", {
  day: "numeric",
  month: "numeric",
  year: "numeric",
});
function htmlToJSON(rawdata) {
  const timeString = rawdata.slice(1, -1);
  const timeArray = timeString.split("%");
  // const timeslots = {
  //   timeslot: timeArray,
  // };
  return timeArray;
}
function formatBusData(busSchedules) {
  const busRoutes = []; // Initialize an empty array to store the bus routes

  // Loop through each schedule in the data array
  for (let schedule of busSchedules.data) {
    // Loop through each schedule's bus numbers
    for (let i = 0; i < schedule.schedules.length; i++) {
      const busNos = schedule.schedules[i]["Bus Number(s)"]; // Get the bus numbers
      const routes = schedule.schedules[i]["Route"]; // Get the routes array
      
      // Loop through each bus number and add its corresponding routes to the busRoutes array
      for (let k = 0; k < busNos.length; k++) {
        const busNo = busNos[k];
        for (let j = 0; j < routes.length; j++) {
          busRoutes.push({
            busNo: busNo,
            routeNo: j + 1,
            route: routes[j]
          });
        }
      }
    }
  }

  return busRoutes; // Return the bus routes array
}


export const getBusData = async (selectedtime) => {
     
    await axios.post(
      "",
      {
        "time_slots": [selectedtime],
        "slot_date": today,
      }
    )
    .then((response)=>{
    const finalData=  formatBusData(response) || formatBusData(data)

    return finalData
    })
    .catch((err)=>{
      console.log(err);
    
    })

  
  

}

export const getTimeSlot = () => {
  try {
    rawdata =
      "#06:15 AM%08:15 AM%02:00 PM%03:15 PM%05:15 PM%06:00 PM%08:00 PM#";
    timeslots = htmlToJSON(rawdata);
    return timeslots;
  } catch (error) {
    return null;
  }
};
