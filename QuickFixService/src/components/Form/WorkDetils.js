import { View, Text, TextInput } from "react-native";
import React from "react";
import { Button } from "react-native-paper";

const WorkDetils = ({
  setCurrentPosition,
  setPincode,
  setCompanyName,
  setExperience,
  setWorkAddress,
  handleSubmit,
}) => {
  return (
    <View>
      <View className="p-5 bg-white h-full rounded-t-3xl w-screen">
        <Text className="text-xl font-semibold">Entry Work Details</Text>
        <View className="mt-5">
          <Text className="text-gray-400 text-base">Company Name</Text>
          <TextInput
            placeholder="Enter the company name"
            className="mt-1 bg-gray-100 rounded-lg p-2 text-lg"
            onChangeText={setCompanyName}
          />
        </View>
        <View className="mt-5">
          <Text className="text-gray-400 text-base">Experience</Text>
          <TextInput
            keyboardType="default"
            placeholder="Write your experience"
            className="mt-1 bg-gray-100 rounded-lg p-2 text-lg"
            onChangeText={setExperience}
          />
        </View>
        <View className="mt-5">
          <Text className="text-gray-400 text-base">Work Address</Text>
          <TextInput
            keyboardType="default"
            placeholder="Enter the work adress"
            className="mt-1 bg-gray-100 rounded-lg p-2 text-lg"
            onChangeText={setWorkAddress}
          />
        </View>
        <View className="mt-5">
          <Text className="text-gray-400 text-base">Pincode</Text>
          <TextInput
            keyboardType="number-pad"
            placeholder="Enter the pincode"
            className="mt-1 bg-gray-100 rounded-lg p-2 text-lg"
            onChangeText={setPincode}
          />
        </View>
        <View className="flex flex-row justify-between">
          <Button
            onPress={() => setCurrentPosition(1)}
            buttonColor="#000000f0"
            mode="contained-tonal"
            className="mt-5"
          >
            <Text className="text-white text-base w-32">Previous</Text>
          </Button>
          <Button
            buttonColor="#000000f0"
            mode="contained-tonal"
            className="mt-5"
            onPress={handleSubmit}
          >
            <Text className="text-white text-base w-32">Submit</Text>
          </Button>
        </View>
      </View>
    </View>
  );
};

export default WorkDetils;
