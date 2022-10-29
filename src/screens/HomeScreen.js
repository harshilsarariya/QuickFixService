import { View, Text } from "react-native";
import * as React from "react";
import PopularServices from "../components/Home/PopularServices";
import RecentlyJoined from "../components/Home/RecentlyJoined";

const HomeScreen = ({ navigation }) => {
  return (
    <View>
      <PopularServices navigation={navigation} />
      <RecentlyJoined />
    </View>
  );
};

export default HomeScreen;
