import { View, Text, Image } from "react-native";
import React from "react";

const Success = () => {
  return (
    <View className="bg-white h-full">
      <View className="flex items-center">
        <Image
          source={require("../../assets/Images/success.gif")}
          style={{
            width: 200,
            height: 200,
            resizeMode: "cover",
            marginTop: 200,
          }}
        />
      </View>
      <View className="items-center mx-5">
        <Text className="text-2xl">Form submitted succesfully!</Text>
      </View>
    </View>
  );
};

export default Success;
