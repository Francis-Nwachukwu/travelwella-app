import {
  View,
  Text,
  SafeAreaView,
  TextInput,
  Image,
  ScrollView,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import React, { useEffect, useState, useLayoutEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { FontAwesome } from "@expo/vector-icons";

import { Avatar, Hotels, Attractions, Restaurants, NotFound } from "../assets";
import MenuContainer from "../components/MenuContainer";
import ItemCardcontainer from "../components/ItemCardcontainer";
import { getPlacesData } from "../api";

const Discover = () => {
  const navigation = useNavigation();

  const [type, setType] = useState("restaurants");
  const [isLoading, setIsLoading] = useState(false);
  const [mainData, setMainData] = useState([]);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  useEffect(() => {
    setIsLoading(true);
    getPlacesData().then((data) => {
      setMainData(data);
      setInterval(() => {
        setIsLoading(false);
      }, 2000);
    });
  }, []);

  return (
    <SafeAreaView className="flex-1 bg-white relative">
      <View className="flex-row items-center justify-between px-8">
        <View>
          <Text className="text-[40px] text-[#0B646B] font-bold">Discover</Text>
          <Text className="text-[#527283] text-[36px]">the beauty today</Text>
        </View>

        <View className="w-12 h-12 bg-gray-400 rounded-md items-center justify-center shadow-lg">
          <Image
            source={Avatar}
            className="w-full h-full rounded-md object-cover"
          />
        </View>
      </View>

      <View className="flex-row items-center bg-white mt-4 mx-4 rounded-xl py-1 px-4 shadow-lg">
        <TextInput
          placeholder="Search"
          className="w-full p-2 border border-[#00BCC9]"
        />
      </View>

      {/* Menu container */}
      {isLoading ? (
        <View className="flex-1 items-center justify-center">
          <ActivityIndicator size="large" color="#0B646B" />
        </View>
      ) : (
        <ScrollView>
          <View className="flex-row items-center justify-between px-6 mt-8">
            <MenuContainer
              key={"hotel"}
              title="Hotels"
              imageSrc={Hotels}
              type={type}
              setType={setType}
            />
            <MenuContainer
              key={"attractions"}
              title="Attractions"
              imageSrc={Attractions}
              type={type}
              setType={setType}
            />
            <MenuContainer
              key={"restaurants"}
              title="Restaurants"
              imageSrc={Restaurants}
              type={type}
              setType={setType}
            />
          </View>
          {/* Top Tips */}
          <View>
            <View className="flex-row justify-between items-center px-4 mt-8">
              <Text className="text-[#2C7379] text-[28px] font-bold">
                Top Tips
              </Text>
              <TouchableOpacity className="flex-row justify-center items-center space-x-2">
                <Text className="text-[#A0C4C7] text-[20px] font-bold">
                  Explore
                </Text>
                <FontAwesome
                  name="long-arrow-right"
                  size={24}
                  color="#A0C4C7"
                />
              </TouchableOpacity>
            </View>
          </View>

          {/* Cards */}
          <View className="mt-8 flex-row items-center justify-evenly flex-wrap">
            {mainData?.length > 0 ? (
              <>
                {mainData?.map((data, i) => (
                  <ItemCardcontainer
                    key={i}
                    imageSrc={
                      data?.photo?.images?.medium?.url
                        ? data?.photo?.images?.medium?.url
                        : "https://images.pexels.com/photos/1267320/pexels-photo-1267320.jpeg?auto=compress&cs=tinysrgb&w=400"
                    }
                    title={data?.name}
                    location={data?.location_string}
                    data={data}
                  />
                ))}
              </>
            ) : (
              <>
                <View className="w-full h-[400px] items-center space-y-8 justify-center">
                  <Image source={NotFound} className="w-32 h-32 object-cover" />
                  <Text className="text-2xl text-[#428288] font-semibold">
                    Oops... No Data Found
                  </Text>
                </View>
              </>
            )}
          </View>
        </ScrollView>
      )}
    </SafeAreaView>
  );
};

export default Discover;
