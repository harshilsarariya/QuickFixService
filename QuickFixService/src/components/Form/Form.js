import { View, Text, TextInput } from "react-native";
import React, { useEffect, useState } from "react";
import StepIndicator from "react-native-step-indicator";
import PersonalDetails from "./PersonalDetails";
import IDProof from "./IDProof";
import WorkDetils from "./WorkDetils";
import { searchPhoneNumber, updateUser } from "../../api/user";
import AsyncStorage from "@react-native-async-storage/async-storage";

const customStyles = {
  stepIndicatorSize: 25,
  currentStepIndicatorSize: 30,
  separatorStrokeWidth: 2,
  currentStepStrokeWidth: 3,
  stepStrokeCurrentColor: "#fe7013",
  stepStrokeWidth: 3,
  stepStrokeFinishedColor: "#fe7013",
  stepStrokeUnFinishedColor: "#aaaaaa",
  separatorFinishedColor: "#fe7013",
  separatorUnFinishedColor: "#aaaaaa",
  stepIndicatorFinishedColor: "#fe7013",
  stepIndicatorUnFinishedColor: "#ffffff",
  stepIndicatorCurrentColor: "#ffffff",
  stepIndicatorLabelFontSize: 13,
  currentStepIndicatorLabelFontSize: 13,
  stepIndicatorLabelCurrentColor: "#fe7013",
  stepIndicatorLabelFinishedColor: "#ffffff",
  stepIndicatorLabelUnFinishedColor: "#aaaaaa",
  labelColor: "#999999",
  labelSize: 13,
  currentStepLabelColor: "#fe7013",
  borderRadiusSize: 10,
};

const defaultUserInfo = {
  name: "",
  emailAddress: "",
  phone: "",
  isAdmin: false,
  pincode: "",
  state: "",
  district: "",
  area: "",
  aadharFront: { public_id: "", url: "" },
  aadharBack: { public_id: "", url: "" },
  pancard: { public_id: "", url: "" },
  companyName: "",
  experience: "",
  workAdress: "",
  isAgency: false,
  districts: "",
};

const labels = ["Personal Details", "ID Proof", "Work Detais"];

const Form = ({ navigation }) => {
  const [userId, setUserId] = useState("");
  const [currentPosition, setCurrentPosition] = useState(0);
  const [userInfo, setUserInfo] = useState(defaultUserInfo);
  const [name, setName] = useState("");
  const [emailAddress, setemailAddress] = useState("");
  const [phone, setPhone] = useState("");
  const [isAdmin, setIsAdmin] = useState(false);
  const [pincode, setPincode] = useState("");
  const [state, setState] = useState("");
  const [district, setDistrict] = useState("");
  const [area, setArea] = useState("");
  const [aadharFront, setAadharFront] = useState({ public_id: "", url: "" });
  const [aadharBack, setAadharBack] = useState({ public_id: "", url: "" });
  const [pancard, setPancard] = useState({ public_id: "", url: "" });
  const [companyName, setCompanyName] = useState("");
  const [experience, setExperience] = useState("");
  const [workAddress, setWorkAddress] = useState("");
  const [isAgency, setIsAgency] = useState(false);
  const [districts, setDistricts] = useState([]);

  const handleSubmit = async () => {
    setUserInfo({
      name: name,
      emailAddress: emailAddress,
      phone: phone,
      isAdmin: isAdmin,
      pincode: pincode,
      state: state,
      district: district,
      area: area,
      aadharFront: aadharFront,
      aadharBack: aadharBack,
      pancard: pancard,
      companyName: companyName,
      experience: experience,
      workAddress: workAddress,
      isAgency: isAgency,
      districts: districts,
    });
    try {
      console.log(userId);
      const { data } = await updateUser(userId, userInfo);
      if (data.success) {
        navigation.navigate("success");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const findUserId = async () => {
    let phoneNumber = await AsyncStorage.getItem("phoneNumber");
    setPhone(phoneNumber);
    const { data } = await searchPhoneNumber(phone);
    if (data.length > 0) {
      setUserId(data[0].id);
      console.log(userId);
    }
  };

  useEffect(() => {
    findUserId();
  }, []);

  return (
    <View className="pt-10 ">
      <View className="p-2 pb-5">
        <Text className="text-2xl ml-4">Upload Details</Text>
        <View className="mt-5">
          <StepIndicator
            stepCount={3}
            customStyles={customStyles}
            labels={labels}
            currentPosition={currentPosition}
          />
        </View>
      </View>

      {currentPosition === 0 ? (
        <PersonalDetails
          setName={setName}
          setPhone={setPhone}
          phone={phone}
          setemailAddress={setemailAddress}
          setCurrentPosition={setCurrentPosition}
        />
      ) : currentPosition === 1 ? (
        <IDProof
          setAadharFront={setAadharFront}
          setAadharBack={setAadharBack}
          setPancard={setPancard}
          setCurrentPosition={setCurrentPosition}
        />
      ) : (
        <WorkDetils
          setCompanyName={setCompanyName}
          setExperience={setExperience}
          setWorkAddress={setWorkAddress}
          setPincode={setPincode}
          setCurrentPosition={setCurrentPosition}
          handleSubmit={handleSubmit}
          navigation={navigation}
        />
      )}
    </View>
  );
};

export default Form;
