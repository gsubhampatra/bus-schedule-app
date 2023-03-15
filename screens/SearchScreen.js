import { View, Text ,ScrollView} from "react-native";
import React from "react";
import { useState, } from "react";
import SearchBar from "../components/SearchBar";

import DropdownMenu from "../components/DropdownMenu";
import BusCard from "../components/BusCard";
import getBusData from "../api";

const SearchScreen = () => {
  const [busData, setBusData] = useState([]);
  
    const timeSlotSelected = async (selectedtime) => {
      data = await getBusData(selectedtime);
      console.log(selectedtime);
      setBusData(data);
    };

  // const onSelect =(text)=>{
  //   busData.map((busD) => {
  //   text !== busD.route ? setBusData(busData): setBusData(busData)

  //   })
  // }
 

  const suggestion = [
    "Campus",
    "Gandhi Nagar",
    "Rukmani Hall",
    "SubRegistrar",
    "Shiva Shakti",
    "Ambamarket",
    "NH",
    "First Gate",
    "Tuilsinagar",
    "Gate Bazar",
    "Lanjipalli",
    "Courtpetta",
    "New Busstand",
    "Lochapada",
    "City Hospital",
    "Panitanki",
    "Tatabenz",
    "Bijipur",
    "Gosaninuagaon",
  ];
  return (
    <View>
      <View className="flex-row items-start mt-6 ml-1 justify-evenly ">
        <SearchBar placeholder={"Destination"} suggestions={suggestion}  />
        <DropdownMenu timeSlotSelected={timeSlotSelected} />
      </View>
      <ScrollView className="mt-12 " >
        {busData.length > 0 ? (
          <>
            {busData.map((busD) => {
              <BusCard data={busD} />;
            })}
          </>
        ) : (
          <>
            <View className="flex items-center justify-center">
              <Text className="text-black bg-red-200 text-[25px] p-6 rounded-md ">There is No Bus !</Text>
            </View>
          </>
        )}
      </ScrollView>
      </View>
  );
};

export default SearchScreen;
