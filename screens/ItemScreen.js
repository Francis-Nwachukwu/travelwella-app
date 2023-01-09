import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  Image,
  TouchableOpacity,
} from "react-native";
import React, { useLayoutEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { FontAwesome, MaterialIcons } from "@expo/vector-icons";

const ItemScreen = ({ route }) => {
  const navigation = useNavigation();

  const data = route?.params?.param;

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  console.log(data);

  return (
    <SafeAreaView className="flex-1 bg-white relative">
      <ScrollView className="flex-1 px-4 py-6">
        {/* image container section */}
        <View className="relative bg-white shadow-lg">
          <Image
            source={{
              uri: data?.photo?.images?.large?.url
                ? data?.photo?.images?.large?.url
                : "https://images.pexels.com/photos/1267320/pexels-photo-1267320.jpeg?auto=compress&cs=tinysrgb&w=400",
            }}
            className="w-full h-72 object-cover rounded-2xl"
          />
          <View className="absolute flex-row inset-x-0 top-5 px-6 justify-between">
            <TouchableOpacity
              onPress={() => {
                navigation.navigate("Discover");
              }}
              className="w-10 h-10 rounded-md items-center justify-center bg-white"
            >
              <FontAwesome name="chevron-left" size={24} color="#06B2BE" />
            </TouchableOpacity>
            <TouchableOpacity className="w-10 h-10 rounded-md items-center justify-center bg-[#06B2BE]">
              <FontAwesome name="heartbeat" size={24} color="#fff" />
            </TouchableOpacity>
          </View>

          <View className="absolute flex-row flex-wrap inset-x-0 bottom-5 px-6 justify-between">
            <View className="flex-row space-x-2 items-center">
              {/* <Text className="text-[12px] font-bold text-gray-100">
                {data?.price_level}
              </Text> */}
              <Text className="text-[32px] font-bold text-gray-100">
                {data?.price}
              </Text>
            </View>
            <View className="px-2 py-1 rounded-md bg-teal-100">
              <Text>{data?.open_now_text}</Text>
            </View>
          </View>
        </View>

        {/* items details */}
        <View className="mt-6">
          <Text className="text-[#428288] text-[24px] font-bold">
            {data?.name}
          </Text>
          <View className="flex-row items-center space-x-2">
            <FontAwesome name="map-marker" size={25} color="#8C9EA6" />
            <Text className="text-[#8C9EA6] text-[20px] font-bold">
              {data?.location_string}
            </Text>
          </View>
        </View>

        <View className="mt-4 flex-row items-center justify-between">
          {data?.rating && (
            <View className="flex-row items-center space-x-2">
              <View className="w-12 h-12 rounded-2xl bg-red-100 items-center justify-center shadow-md">
                <FontAwesome name="star" size={24} color="#058574" />
              </View>
              <View>
                <Text className="text-[#515151]">{data?.rating}</Text>
                <Text className="text-[#515151]">Ratings</Text>
              </View>
            </View>
          )}
          {data?.price && (
            <View className="flex-row items-center space-x-2">
              <View className="w-12 h-12 rounded-2xl bg-red-100 items-center justify-center shadow-md">
                <MaterialIcons name="attach-money" size={24} color="black" />
              </View>
              <View>
                <Text className="text-[#515151]">{data?.price}</Text>
                <Text className="text-[#515151]">Price</Text>
              </View>
            </View>
          )}
          {data?.bearing && (
            <View className="flex-row items-center space-x-2">
              <View className="w-12 h-12 rounded-2xl bg-red-100 items-center justify-center shadow-md">
                <FontAwesome name="map-signs" size={24} color="#000" />
              </View>
              <View>
                <Text className="text-[#515151]">{data?.bearing}</Text>
                <Text className="text-[#515151]">Bearing</Text>
              </View>
            </View>
          )}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ItemScreen;
