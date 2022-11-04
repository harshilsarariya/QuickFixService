import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ServiceScreen from "../screens/ServiceScreen";

const Stack = createNativeStackNavigator();

const StackNavigation = () => {
  return (
    <Stack.Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName="ServiceScreen"
    >
      <Stack.Screen name="ServiceScreen" component={ServiceScreen} />
    </Stack.Navigator>
  );
};

export default StackNavigation;
