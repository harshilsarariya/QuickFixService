import React, { useEffect, useState } from "react";
import { SafeAreaView, FlatList } from "react-native";
import { getAllUsers } from "../api/user";
import PlumberInfoCard from "../components/Service/PlumberInfoCard";
import SearchBar from "../components/Service/SearchBar";
import { ActivityIndicator, MD2Colors } from "react-native-paper";

const ServiceScreen = ({ navigation }) => {
  const [users, setUsers] = useState([{}]);
  const [loading, setLoading] = useState(false);

  const renderItem = ({ item }) => (
    <PlumberInfoCard item={item} navigation={navigation} />
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
    <>
      <SearchBar />

      <SafeAreaView className="bg-white m-2 rounded-md px-2 pt-1 mb-16">
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
    </>
  );
};

export default ServiceScreen;
