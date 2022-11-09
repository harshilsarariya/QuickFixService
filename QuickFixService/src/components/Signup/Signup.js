import {
  View,
  Text,
  TouchableOpacity,
  Image,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
  Platform,
  Alert,
} from "react-native";
import React, { useRef, useState } from "react";
import {
  TextInput,
  Button,
  Snackbar,
  MD2Colors,
  ActivityIndicator,
} from "react-native-paper";
import { addUser } from "../../api/user";
import PhoneInput from "react-native-phone-number-input";
// import { firebaseConfig } from "../../../fireabaseConfig";
// import firebase from "firebase/compat/app";
import { useEffect } from "react";
// import { FirebaseRecaptchaVerifierModal } from "expo-firebase-recaptcha";
import AsyncStorage from "@react-native-async-storage/async-storage";
const defaultInfo = {
  phone: "",
  password: "",
  isAdmin: false,
};

const Signup = ({ navigation }) => {
  const [phone, setPhone] = useState("");
  // const [code, setCode] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [userInfo, setUserInfo] = useState(defaultInfo);
  const [loading, setLoading] = useState(false);
  const [visible, setVisible] = useState(false);
  const [message, setMessage] = useState("");
  // const phoneInput = useRef(null);
  // const [verificationID, setVerificationID] = useState(null);
  // const recaptchaVerifier = useRef(null);

  const onDismissSnackBar = () => setVisible(false);

  // const sendVerification = () => {
  //   const phoneProvider = new firebase.auth.PhoneAuthProvider();
  //   phoneProvider
  //     .verifyPhoneNumber(phone, recaptchaVerifier.current)
  //     .then(setVerificationID);
  //   setPhone("");
  //   console.log(recaptchaVerifier.current);
  // };

  // const confirmCode = () => {
  //   const credential = firebase.auth.PhoneAuthProvider.credential(
  //     verificationID,
  //     code
  //   );
  //   firebase
  //     .auth()
  //     .signInWithCredential(credential)
  //     .then(() => {
  //       setCode("");
  //     })
  //     .catch((error) => {
  //       alert(error);
  //     });
  //   Alert.alert("Login Successfully");
  // };

  const handleSubmit = async () => {
    setUserInfo({
      phone: "91" + phone,
      password: password,
      isAdmin: false,
    });
    await AsyncStorage.setItem("phoneNumber", "91" + phone);
    console.log(userInfo);
    if (password == confirmPassword) {
      setLoading(true);
      let { data } = await addUser(userInfo);
      console.log(data);
      setLoading(false);
      try {
        if (data !== undefined) {
          if (data.success) {
            navigation.navigate("Form");
          } else {
            setMessage(data.errors[0]);
            setVisible(true);
          }
        }
      } catch (error) {
        setMessage(data.error);
        setVisible(true);
        console.log(error);
      }
    } else {
      setMessage("Password and confirm password does not match");
      setVisible(true);
    }
  };

  return (
    <View style={{ flex: 1, justifyContent: "space-around" }}>
      {loading === false ? (
        <>
          {/* <FirebaseRecaptchaVerifierModal
            ref={recaptchaVerifier}
            firebaseConfig={firebaseConfig}
          /> */}
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
                {/* <PhoneInput
                  ref={phoneInput}
                  defaultValue={phone}
                  defaultCode="IN"
                  layout="first"
                  onChangeText={(text) => {
                    setPhone(text);
                  }}
                  countryPickerProps={{ withAlphaFilter: true }}
                  withShadow
                  autoFocus
                />
                <View className="mt-5">
                  <Button
                    onPress={sendVerification}
                    buttonColor="#0065FF"
                    mode="contained"
                  >
                    <Text className="text-lg">Send OTP</Text>
                  </Button>
                </View> */}
                <TextInput
                  secureTextEntry
                  mode="outlined"
                  label="Phone Number"
                  placeholder="Enter the phone number"
                  className="mt-3"
                  keyboardType="phone-pad"
                  onChangeText={setPhone}
                />
                {/* <TextInput
                  secureTextEntry
                  mode="outlined"
                  label="Confirm Code"
                  placeholder="Enter the code"
                  className="mt-3"
                  keyboardType="number-pad"
                  onChangeText={setCode}
                /> */}
                <TextInput
                  secureTextEntry
                  mode="outlined"
                  label="Password"
                  placeholder="Enter the password"
                  className="mt-3"
                  onChangeText={setPassword}
                />
                <TextInput
                  secureTextEntry
                  mode="outlined"
                  label="Confirm password"
                  placeholder="Confirm password"
                  className="mt-3"
                  onChangeText={setConfirmPassword}
                />
                <View className="mt-5">
                  <Button
                    onPress={handleSubmit}
                    buttonColor="#0065FF"
                    mode="contained"
                  >
                    <Text className="text-lg">Sign up</Text>
                  </Button>
                </View>

                <View className="flex flex-row justify-center mt-2">
                  <Text className="text-base">Already in QuickFix?</Text>
                  <TouchableOpacity
                    onPress={() => navigation.navigate("Login")}
                  >
                    <Text className="text-blue-600 text-base">Login</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </TouchableWithoutFeedback>
          </KeyboardAvoidingView>
          <Snackbar
            visible={visible}
            onDismiss={onDismissSnackBar}
            action={{
              label: "Okay",
            }}
          >
            {message}
          </Snackbar>
        </>
      ) : (
        <ActivityIndicator
          size={"large"}
          animating={true}
          color={MD2Colors.blue800}
        />
      )}
    </View>
  );
};

export default Signup;
