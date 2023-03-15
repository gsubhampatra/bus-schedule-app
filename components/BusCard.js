import { View, Text, Button } from "react-native";
import React from "react";

const BusCard = (BusD) => {
  return (
    <View className="h-[50px] w-[100px] bg-slate-200 border-black shadow-2xl ">
      <Text className=" text-black text-[22px] mt-2 ">{BusD.busNo}</Text>
      <Text className="text-blue-600  text-[20px] mt-2 ">{BusD.route}</Text>
    </View>
  );
};

export default BusCard;
