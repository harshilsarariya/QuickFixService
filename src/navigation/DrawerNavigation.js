import * as React from "react";
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
} from "@react-navigation/drawer";
import { MaterialIcons } from "@expo/vector-icons";
import AntDesign from "react-native-vector-icons/AntDesign";

import HomeScreen from "../screens/HomeScreen";
import StackNavigation from "./StackNavigation";
import PlumberDetails from "../components/Home/PlumberDetails";

const Drawer = createDrawerNavigator();

const DrawerNavigation = () => {
  return (
    <Drawer.Navigator initialRouteName="Home">
      <Drawer.Screen
        name="Home"
        component={HomeScreen}
        options={{
          title: "Home",
          drawerIcon: ({ focused }) => (
            <AntDesign
              name="home"
              size={20}
              color={focused ? "#3973df" : "#514949"}
            />
          ),
        }}
      />
      <Drawer.Screen
        name="PlumberDetailsHome"
        component={PlumberDetails}
        options={{
          drawerItemStyle: {
            display: "none",
          },
        }}
      />
      <Drawer.Screen
        name="Service"
        component={StackNavigation}
        options={{
          title: "Service",
          drawerIcon: ({ focused }) => (
            <MaterialIcons
              name="miscellaneous-services"
              size={24}
              color={focused ? "#3973df" : "#514949"}
            />
          ),
        }}
      />
    </Drawer.Navigator>
  );
};

export default DrawerNavigation;
