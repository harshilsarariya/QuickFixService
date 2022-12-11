import React, { useEffect, useState } from "react";
import { View, Text, FlatList, SafeAreaView } from "react-native";
import PlumberInfoCard from "./PlumberInfoCard";
import { getAllUsers } from "../../api/user";
import { ActivityIndicator, MD2Colors } from "react-native-paper";

const RecentlyJoined = ({ navigation }) => {
  const [users, setUsers] = useState([{}]);
  const [loading, setLoading] = useState(false);

  const renderItem = ({ item }) => (
    <PlumberInfoCard navigation={navigation} item={item} />
  );

  const fetchUsers = async () => {
    setLoading(true);
    const data = await getAllUsers();
    setLoading(false);

    setUsers(data);
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <View className="bg-white m-2 p-2 rounded-lg">
      <Text className="text-xl font-semibold">Recently Joined</Text>
      <SafeAreaView className="bg-white my-2 rounded-md  pt-1 mb-16">
        {loading === false ? (
          <>
            <FlatList
              className="h-full"
              showsVerticalScrollIndicator={false}
              scrollEnabled={true}
              data={users}
              renderItem={renderItem}
              keyExtractor={(item, index) => {
                return index.toString();
              }}
            />
          </>
        ) : (
          <ActivityIndicator
            size={"large"}
            className="h-full"
            animating={true}
            color={MD2Colors.blue800}
          />
        )}
      </SafeAreaView>
    </View>
  );
};

export default RecentlyJoined;
