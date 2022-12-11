import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";

const PlumberInfoCard = ({ item, navigation }) => {
  return (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate("PlumberDetailsHome", { id: item._id });
      }}
      activeOpacity={0.6}
      className="flex flex-row items-center my-2 bg-slate-100 rounded-lg p-2"
    >
      <View className="ml-2">
        <FontAwesome5 name="user-circle" size={50} />
      </View>
      <View className="ml-5">
        <Text className="text-base font-semibold">{item.name}</Text>
        <Text className="text-gray-500 tracking-wider">{item.phone}</Text>
        <Text className="text-blue-500 ">Plumber</Text>
      </View>
    </TouchableOpacity>
  );
};

export default PlumberInfoCard;
