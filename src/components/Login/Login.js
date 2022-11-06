import { View, Text, TouchableOpacity, Image } from "react-native";
import React, { useState } from "react";
import { TextInput, Button } from "react-native-paper";

const Login = ({ navigation }) => {
  const [email, setEmail] = useState("");

  return (
    <View className="mt-10 flex h-96">
      <View className="items-center">
        <Image
          source={require("../../assets/Images/login.png")}
          style={{ resizeMode: "cover" }}
          className="w-screen h-full"
        />
      </View>
      <View className="h-full p-3">
        <Text className="text-3xl font-semibold">Login</Text>
        <TextInput
          mode="outlined"
          label="Email"
          placeholder="abc@xyz.com"
          className="mt-3"
        />
        <TextInput
          secureTextEntry
          mode="outlined"
          label="Password"
          placeholder="Enter the password"
          className="mt-3"
        />
        <View className="mt-5">
          <Button buttonColor="#0065FF" mode="contained">
            <Text className="text-lg">Login</Text>
          </Button>
        </View>

        <View className="flex flex-row justify-center mt-2">
          <Text className="text-base">New to QuickFix?</Text>
          <TouchableOpacity onPress={() => navigation.navigate("Signup")}>
            <Text className="text-blue-600 text-base">Register</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Login;
