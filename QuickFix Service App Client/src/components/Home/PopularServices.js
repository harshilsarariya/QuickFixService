import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";

const PopularServices = ({ navigation }) => {
  return (
    <View className="p-2 bg-white rounded-lg m-2">
      <Text className="text-xl font-semibold mb-3">Popular Services</Text>
      <View className="flex flex-row">
        <TouchableOpacity
          className="bg-gray-100 rounded-lg p-2 flex justify-center items-center "
          onPress={() => navigation.navigate("Service")}
        >
          <MaterialIcons name="plumbing" size={30} />
          <Text>Plumber</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default PopularServices;
