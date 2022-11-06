import { View, Text, TextInput } from "react-native";
import React, { useState } from "react";
import StepIndicator from "react-native-step-indicator";
import PersonalDetails from "./PersonalDetails";
import IDProof from "./IDProof";
import WorkDetils from "./WorkDetils";

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

const labels = ["Personal Details", "ID Proof", "Work Detais"];

const Form = () => {
  const [currentPosition, setCurrentPosition] = useState(0);

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
            // currentPosition={2}
          />
        </View>
      </View>

      {currentPosition === 0 ? (
        <PersonalDetails setCurrentPosition={setCurrentPosition} />
      ) : currentPosition === 1 ? (
        <IDProof setCurrentPosition={setCurrentPosition} />
      ) : (
        <WorkDetils setCurrentPosition={setCurrentPosition} />
      )}
    </View>
  );
};

export default Form;
