import { View, Text } from "react-native";
import React from "react";
import Signup from "../components/Signup/Signup";

const SignupScreen = ({ navigation }) => {
  return (
    <View className="bg-white h-full">
      <Signup navigation={navigation} />
    </View>
  );
};

export default SignupScreen;
