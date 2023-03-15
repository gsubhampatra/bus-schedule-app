import { View, Text, Image, Pressable } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

const HomeScreen = () => {
    const navigation = useNavigation();

  return (
    <View className="flex-1 items-center">
      <Text className="text-[25px] text-black font-semibold ">
        Bus Schedule App
      </Text>

      <Image
        className="h-[200px] w-[400px] object-cover mt-6"
        source={{
          uri: "https://cdn.pixabay.com/photo/2014/04/03/10/03/bus-309718__340.png",
        }}
      />
      <View className="mt-20 w-22 h-12 bg-teal-300 justify-center items-center p-3 rounded-full " >
        <Pressable onPress={()=>{navigation.navigate("SearchScreen")}} >
          <Text className=" text-10 " >Find your bus</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default HomeScreen;
