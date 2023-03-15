import React, { useState, useEffect } from "react";
import { View, Text, Modal, TouchableOpacity } from "react-native";
import { getTimeSlot } from "../api";

const DropdownMenu = ({timeSlotSelected}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState("");
  const [dropdownValues, setDropdownValues] = useState([]);

  const handleSelectValue = (value) => {
    setSelectedValue(value);
    setIsOpen(false);
    timeSlotSelected(value)
  };
  useEffect(() => {
    setDropdownValues(getTimeSlot());
  }, []);

  return (
    <View className="px-4 py-3 bg-blue-200 border border-blue-700 rounded-md ">
      <TouchableOpacity onPress={() => setIsOpen(true)}>
        <Text className="text-lg font-bold text-black " >{selectedValue || "Select Time"}</Text>
      </TouchableOpacity>
      <Modal visible={isOpen} animationType="slide">
        <View className="flex items-center justify-center ">
          {dropdownValues.map((value) => (
            <TouchableOpacity
              className="items-center p-3 mt-2 bg-blue-400 border border-blue-800 rounded-2xl w-52 "
              key={value}
              onPress={() => handleSelectValue(value)}
            >
              <Text className="text-lg font-bold text-gray-800 ">{value}</Text>
            </TouchableOpacity>
          ))}
          <TouchableOpacity
            className="items-center p-3 mt-2 bg-red-400 border border-red-600 rounded-2xl w-52 "
            onPress={() => setIsOpen(false)}
          >
            <Text>Close</Text>
          </TouchableOpacity>
        </View>
      </Modal>
    </View>
  );
};

export default DropdownMenu;
