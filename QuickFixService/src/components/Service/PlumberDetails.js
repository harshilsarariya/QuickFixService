import { View, Text, Image } from "react-native";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import React, { useEffect, useState } from "react";
import { getUser } from "../../api/user";

const PlumberDetails = ({ route }) => {
  const prmId = route.params.id;
  const [userInfo, setUserInfo] = useState({});

  const fetchData = async () => {
    const { data } = await getUser(prmId);
    setUserInfo(data);
    console.log(userInfo);
  };
  useEffect(() => {
    fetchData();
  }, [prmId]);

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <View>
      <View>
        {userInfo.data.name !== undefined ? (
          <Text className="">{userInfo.data.name}</Text>
        ) : (
          <></>
        )}
        {userInfo.data.emailAddress !== undefined ? (
          <Text>{userInfo.data.emailAddress}</Text>
        ) : (
          <></>
        )}
        {userInfo.data.phone !== undefined ? (
          <Text>{userInfo.data.phone}</Text>
        ) : (
          <></>
        )}
        {userInfo.data.isAdmin !== undefined ? (
          <Text>{userInfo.data.isAdmin}</Text>
        ) : (
          <></>
        )}
        {userInfo.data.pincode !== undefined ? (
          <Text>{userInfo.data.pincode}</Text>
        ) : (
          <></>
        )}
        {userInfo.data.state !== undefined ? (
          <Text>{userInfo.data.state}</Text>
        ) : (
          <></>
        )}
        {userInfo.data.district !== undefined ? (
          <Text>{userInfo.data.district}</Text>
        ) : (
          <></>
        )}
        {userInfo.data.area !== undefined ? (
          <Text>{userInfo.data.area}</Text>
        ) : (
          <></>
        )}
        {userInfo.data.aadharFront !== undefined ? (
          <Text>{userInfo.data.aadharFront}</Text>
        ) : (
          <></>
        )}
        {userInfo.data.aadharBack !== undefined ? (
          <Text>{userInfo.data.aadharBack}</Text>
        ) : (
          <></>
        )}
        {userInfo.data.pancard !== undefined ? (
          <Text>{userInfo.data.pancard}</Text>
        ) : (
          <></>
        )}
        {userInfo.data.companyName !== undefined ? (
          <Text>{userInfo.data.companyName}</Text>
        ) : (
          <></>
        )}
        {userInfo.data.experience !== undefined ? (
          <Text>{userInfo.data.experience}</Text>
        ) : (
          <></>
        )}
        {userInfo.data.workAddress !== undefined ? (
          <Text>{userInfo.data.workAddress}</Text>
        ) : (
          <></>
        )}
        {userInfo.data.isAgency !== undefined ? (
          <Text>{userInfo.data.isAgency}</Text>
        ) : (
          <></>
        )}
        {userInfo.data.districts !== undefined ? (
          <Text>{userInfo.data.districts}</Text>
        ) : (
          <></>
        )}
      </View>
    </View>
  );
};

export default PlumberDetails;
