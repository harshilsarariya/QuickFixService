import { SafeAreaView } from "react-native";
import React from "react";
import Form from "../components/Form/Form";

const FormScreen = ({ navigation }) => {
  return (
    <SafeAreaView>
      <Form navigation={navigation} />
    </SafeAreaView>
  );
};

export default FormScreen;
