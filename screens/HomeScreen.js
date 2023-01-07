import {
  SafeAreaView,
  Image,
  View,
  Text,
  TouchableOpacity,
} from "react-native";
import React, { useLayoutEffect } from "react";
import { useNavigation } from "@react-navigation/native";

import { HeroImage } from "../assets";

const HomeScreen = () => {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);
  return (
    <SafeAreaView className="bg-white-100 flex-1 relative">
      {/* first section */}
      <View className="flex-row px-6 mt-8 items-center space-x-2">
        <View className="w-16 h-16 bg-blue-400 rounded-full items-center justify-center">
          <Text className="text-white font-bold px-2">Travel</Text>
        </View>
        <Text className="font-bold font-2xl">Wella</Text>
      </View>

      {/* Second section */}
      <View className="px-6 mt-6 space-y-2">
        <Text className="text-[#3c6072] font-bold text-[42px]">
          Enjoy the trip with
        </Text>
        <Text className="text-blue-700 text-[38px] font-bold">
          Good Moments.
        </Text>
        <Text className="text-[#3C6072] text-base">
          Get rewarded for your travels - unlock instant savings of 10% or more
          with a free TravelWella account.
        </Text>
      </View>

      {/* circle section */}
      <View className="w-[300px] h-[300px] bg-blue-700 rounded-full absolute bottom-36 -right-36"></View>
      <View className="w-[300px] h-[300px] bg-[#3c6072] rounded-full absolute -bottom-28 -left-36"></View>

      {/* image container */}
      <View className="flex-1 relative items-center justify-center">
        <Image
          animation="fadeOut"
          easing="ease-in-out"
          source={HeroImage}
          className="w-full h-full object-cover mt-20"
        />
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("Discover");
          }}
          className="absolute bottom-20 w-24 h-24 border-l-2 border-r-2 border-t-4 border-blue-400 rounded-full items-center justify-center"
        >
          <View className="w-20 h-20 items-center justify-center rounded-full bg-blue-400">
            <Text className="text-gray-50 text-[20px] font-bold">Travel</Text>
          </View>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
