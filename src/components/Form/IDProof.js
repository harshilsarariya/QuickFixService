import { View, Text, Image, SafeAreaView, ScrollView } from "react-native";
import React, { useState } from "react";
import { Button } from "react-native-paper";
import * as ImagePicker from "expo-image-picker";
import { MaterialIcons } from "@expo/vector-icons";

const IDProof = ({ setCurrentPosition }) => {
  const [selectedAadharImage, setSelectedAadharImage] = useState(null);
  const [selectedPanImage, setSelectedPanImage] = useState(null);

  let openImagePickerForAadharAsync = async () => {
    let pickerResult = await ImagePicker.launchImageLibraryAsync();
    if (pickerResult.cancelled === true) {
      return;
    }
    setSelectedAadharImage({ localUri: pickerResult.uri });
  };
  let openImagePickerForPanAsync = async () => {
    let pickerResult = await ImagePicker.launchImageLibraryAsync();
    if (pickerResult.cancelled === true) {
      return;
    }
    setSelectedPanImage({ localUri: pickerResult.uri });
  };

  return (
    <View className="p-5 bg-white h-full rounded-t-3xl w-screen">
      <Text className="text-xl font-semibold">Upload below documents</Text>
      <SafeAreaView>
        <ScrollView
          style={{ marginBottom: 426 }}
          horizontal={false}
          showsVerticalScrollIndicator={false}
        >
          <View className="mt-5">
            <View className="flex flex-row justify-between  items-center mb-5 ">
              <Text className="text-black text-lg ">Aadhar Card</Text>
              <MaterialIcons
                onPress={openImagePickerForAadharAsync}
                name="add-a-photo"
                size={24}
                color="black"
              />
            </View>
            {selectedAadharImage !== null ? (
              <View className="w-full h-52 ">
                <Image
                  source={{ uri: selectedAadharImage.localUri }}
                  style={{ resizeMode: "cover" }}
                  className="w-full h-full rounded-lg"
                />
              </View>
            ) : (
              <></>
            )}
          </View>
          <View className="mt-5">
            <View className="flex flex-row justify-between  items-center mb-5 ">
              <Text className="text-black text-lg ">Pan Card</Text>
              <MaterialIcons
                onPress={openImagePickerForPanAsync}
                name="add-a-photo"
                size={24}
                color="black"
              />
            </View>
            {selectedPanImage !== null ? (
              <View className="w-full h-52 ">
                <Image
                  source={{ uri: selectedPanImage.localUri }}
                  style={{ resizeMode: "cover" }}
                  className="w-full h-full rounded-lg"
                />
              </View>
            ) : (
              <></>
            )}
          </View>

          {/* Buttons */}
          <View className="flex flex-row justify-between pb-5">
            <Button
              onPress={() => setCurrentPosition(0)}
              buttonColor="#000000f0"
              mode="contained-tonal"
              className="mt-5 w-32"
            >
              <Text className="text-white text-base ">Previous</Text>
            </Button>
            <Button
              onPress={() => setCurrentPosition(2)}
              buttonColor="#000000f0"
              mode="contained-tonal"
              className="mt-5 w-32"
            >
              <Text className="text-white text-base ">Next</Text>
            </Button>
          </View>
        </ScrollView>
      </SafeAreaView>
    </View>
  );
};

export default IDProof;
