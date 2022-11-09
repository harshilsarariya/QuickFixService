import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ServiceScreen from "../screens/ServiceScreen";
import PlumberDetails from "../components/Service/PlumberDetails";

const Stack = createNativeStackNavigator();

const StackNavigation = () => {
  return (
    <Stack.Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName="ServiceScreen"
    >
      <Stack.Screen name="ServiceScreen" component={ServiceScreen} />
      <Stack.Screen name="PlumberDetailsService" component={PlumberDetails} />
    </Stack.Navigator>
  );
};

export default StackNavigation;
