import { View, Text, Image, SafeAreaView, ScrollView } from "react-native";
import React, { useEffect, useState } from "react";
import { Button } from "react-native-paper";
import * as ImagePicker from "expo-image-picker/src/ImagePicker";
import { MaterialIcons } from "@expo/vector-icons/build/Icons";

const IDProof = ({
  setCurrentPosition,
  setAadharFront,
  setAadharBack,
  setPancard,
}) => {
  const [selectedAadharFrontImage, setSelectedAadharFrontImage] =
    useState(null);
  const [selectedAadharBackImage, setSelectedAadharBackImage] = useState(null);
  const [selectedPanImage, setSelectedPanImage] = useState(null);

  let openImagePickerForAadharFrontAsync = async () => {
    let pickerResult = await ImagePicker.launchImageLibraryAsync();
    if (pickerResult.cancelled === true) {
      return;
    }
    setSelectedAadharFrontImage({ localUri: pickerResult.uri });
    let newFile = {
      uri: pickerResult.uri,
      type: `test/${pickerResult.uri.split(".")[1]}`,
      name: `test.${pickerResult.uri.split(".")[1]}`,
    };
    await handleUpload(newFile);
    setAadharFront({ public_id: finalData.public_id, url: finalData.url });
  };

  let openImagePickerForAadharBackAsync = async () => {
    let pickerResult = await ImagePicker.launchImageLibraryAsync();
    if (pickerResult.cancelled === true) {
      return;
    }
    setSelectedAadharBackImage({ localUri: pickerResult.uri });
    let newFile = {
      uri: pickerResult.uri,
      type: `test/${pickerResult.uri.split(".")[1]}`,
      name: `test.${pickerResult.uri.split(".")[1]}`,
    };
    await handleUpload(newFile);
    setAadharBack({ public_id: finalData.public_id, url: finalData.url });
  };
  let openImagePickerForPanAsync = async () => {
    let pickerResult = await ImagePicker.launchImageLibraryAsync();
    if (pickerResult.cancelled === true) {
      return;
    }
    setSelectedPanImage({ localUri: pickerResult.uri });
    let newFile = {
      uri: pickerResult.uri,
      type: `test/${pickerResult.uri.split(".")[1]}`,
      name: `test.${pickerResult.uri.split(".")[1]}`,
    };
    await handleUpload(newFile);
    setPancard({ public_id: finalData.public_id, url: finalData.url });
  };

  let finalData;
  const handleUpload = async (image) => {
    const data = new FormData();
    data.append("file", image);
    data.append("upload_preset", "quickfix");
    data.append("cloud_name", "dqvmojbav");

    await fetch("https://api.cloudinary.com/v1_1/dqvmojbav/image/upload", {
      method: "post",
      body: data,
    })
      .then((res) => res.json())
      .then((data) => {
        finalData = data;
      });
  };

  useEffect(() => {
    setAadharFront(selectedAadharFrontImage);
  }, [selectedAadharFrontImage]);

  useEffect(() => {
    setAadharBack(selectedAadharBackImage);
  }, [selectedAadharBackImage]);

  useEffect(() => {
    setPancard(selectedPanImage);
  }, [selectedPanImage]);

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
              <Text className="text-black text-lg ">Aadhar Card Front</Text>
              <MaterialIcons
                onPress={openImagePickerForAadharFrontAsync}
                name="add-a-photo"
                size={24}
                color="black"
              />
            </View>
            {selectedAadharFrontImage !== null ? (
              <View className="w-full h-52 ">
                <Image
                  source={{ uri: selectedAadharFrontImage.localUri }}
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
              <Text className="text-black text-lg ">Aadhar Card Back</Text>
              <MaterialIcons
                onPress={openImagePickerForAadharBackAsync}
                name="add-a-photo"
                size={24}
                color="black"
              />
            </View>
            {selectedAadharBackImage !== null ? (
              <View className="w-full h-52 ">
                <Image
                  source={{ uri: selectedAadharBackImage.localUri }}
                  style={{ resizeMode: "cover" }}
                  className="w-full h-full rounded-lg"
                />
              </View>
            ) : (
              <></>
            )}
          </View>

          {/* pancard */}
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
