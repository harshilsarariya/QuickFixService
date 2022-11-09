import React, { useEffect, useState } from "react";
import { SafeAreaView, FlatList } from "react-native";
import { getAllUsers } from "../api/user";
import PlumberInfoCard from "../components/Service/PlumberInfoCard";
import SearchBar from "../components/Service/SearchBar";

const ServiceScreen = ({ navigation }) => {
  const [users, setUsers] = useState([{}]);

  const renderItem = ({ item }) => (
    <PlumberInfoCard item={item} navigation={navigation} />
  );

  const fetchUsers = async () => {
    const { data } = await getAllUsers();
    setUsers(data);
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <>
      <SearchBar />

      <SafeAreaView className="bg-white m-2 rounded-md px-2 pt-1 mb-16">
        <FlatList
          className="h-full"
          showsVerticalScrollIndicator={false}
          scrollEnabled={true}
          data={users}
          renderItem={renderItem}
          keyExtractor={(item) => item._id}
        />
      </SafeAreaView>
    </>
  );
};

export default ServiceScreen;
