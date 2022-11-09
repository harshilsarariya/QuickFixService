import React from "react";
import { View, Text, FlatList, SafeAreaView } from "react-native";
import PlumberInfoCard from "./PlumberInfoCard";

const DATA = [
  {
    id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
    title: "Harshil Sarariya",
  },
  {
    id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
    title: "Utsav Sarariya",
  },
  {
    id: "58694a0f-2da1-471f-bd96-145571e29d72",
    title: "Ankit Sarariya",
  },
  {
    id: "bd7acbea-c2b1-46c2-aed5-3ad53abb28ba",
    title: "Harshil Sarariya",
  },
  {
    id: "3ac68afc-c35-48d3-a4f8-fbd91aa97f63",
    title: "Utsav Sarariya",
  },
  {
    id: "58694a0f-3da1-471f-bd96-145571e29d72",
    title: "Ankit Sarariya",
  },
  {
    id: "3ac618afc-c35-48d3-a4f8-fbd91aa97f63",
    title: "Utsav Sarariya",
  },
  {
    id: "58694fa0f-3da1-471f-bd96-145571e29d72",
    title: "Ankit Sarariya",
  },
  {
    id: "3aq68afc-c35-48d3-a4f8-fbd91aa97f63",
    title: "Utsav Sarariya",
  },
  {
    id: "586w4a0f-3da1-471f-bd96-145571e29d72",
    title: "Ankit Sarariya",
  },
];

const RecentlyJoined = ({ navigation }) => {
  const renderItem = ({ item }) => (
    <PlumberInfoCard navigation={navigation} title={item.title} />
  );

  return (
    <View className="bg-white m-2 p-2 rounded-lg">
      <Text className="text-xl font-semibold">Recently Joined</Text>
      <SafeAreaView className="mb-10">
        <FlatList
          className="h-5/6"
          showsVerticalScrollIndicator={false}
          scrollEnabled={true}
          data={DATA}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
        />
      </SafeAreaView>
    </View>
  );
};

export default RecentlyJoined;
