import {
  View,
  Text,
  TouchableOpacity,
  Image,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
  Platform,
} from "react-native";
import React, { useState } from "react";
import { TextInput, Button } from "react-native-paper";

const Signup = ({ navigation }) => {
  const [email, setEmail] = useState("");

  return (
    <View style={{ flex: 1, justifyContent: "space-around" }}>
      <View className="p-5 items-center">
        <Image
          source={require("../../assets/Images/signup.png")}
          style={{ resizeMode: "cover" }}
          className="w-screen h-72"
        />
      </View>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        className=" bg-white "
        style={{ flex: 1 }}
      >
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View className="bg-white h-full p-3 ">
            <Text className="text-3xl font-semibold">Sign up</Text>
            <TextInput
              email
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
            <TextInput
              secureTextEntry
              mode="outlined"
              label="Confirm password"
              placeholder="Confirm password"
              className="mt-3"
            />
            <View className="mt-5">
              <Button buttonColor="#0065FF" mode="contained">
                <Text className="text-lg">Sign up</Text>
              </Button>
            </View>

            <View className="flex flex-row justify-center mt-2">
              <Text className="text-base">Already in QuickFix?</Text>
              <TouchableOpacity onPress={() => navigation.navigate("Login")}>
                <Text className="text-blue-600 text-base">Login</Text>
              </TouchableOpacity>
            </View>
          </View>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </View>
  );
};

export default Signup;
