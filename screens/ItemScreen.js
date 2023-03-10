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
            <View className="flex-row rounded-md space-x-2 items-center bg-teal-100">
              {/* <Text className="text-[12px] font-bold text-gray-100">
                {data?.price_level}
              </Text> */}
              <Text className="text-[24px] px-2 py-1 font-bold text-black">
                {data?.price ? data?.price : ""}
              </Text>
            </View>
            <View className="px-2 py-1  rounded-md bg-teal-100">
              <Text className="font-bold">
                {data?.open_now_text ? data?.open_now_text : "Open Now"}
              </Text>
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
          {data?.price_level && (
            <View className="flex-row items-center space-x-2">
              <View className="w-12 h-12 rounded-2xl bg-red-100 items-center justify-center shadow-md">
                <MaterialIcons name="attach-money" size={24} color="black" />
              </View>
              <View>
                <Text className="text-[#515151]">{data?.price_level}</Text>
                <Text className="text-[#515151]">Price level</Text>
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

        {data?.description ? (
          <View>
            <Text className="mt-4 tracking-wide text-[16px] font-semibold">
              {data?.description}
            </Text>
          </View>
        ) : (
          <View>
            <Text className="mt-4 tracking-wide text-[16px] font-semibold text-[#97A6Af]">
              No description for this restaurant.
            </Text>
          </View>
        )}

        {data?.cuisine ? (
          <View className="flex-row gap-2 items-center justify-start flex-wrap mt-4">
            {data?.cuisine.map((item) => (
              <TouchableOpacity
                key={item.key}
                className="px-2 py-1 rounded-md bg-emerald-100"
              >
                <Text>{item.name}</Text>
              </TouchableOpacity>
            ))}
          </View>
        ) : (
          <View>
            <Text className="mt-4 tracking-wide text-[16px] font-semibold text-[#97A6Af]">
              No cuisine available.
            </Text>
          </View>
        )}

        {data?.ranking ? (
          <View>
            <Text className="mt-4 tracking-wide text-[16px] font-semibold">
              {data?.ranking}
            </Text>
          </View>
        ) : (
          <View>
            <Text className="mt-4 tracking-wide text-[16px] font-semibold text-[#97A6Af]">
              No ranking available.
            </Text>
          </View>
        )}
        <View className="space-y-2 mt-4 bg-gray-100 rounded-2xl px-4 py-2">
          {data?.phone ? (
            <View className="items-center flex-row space-x-6">
              <FontAwesome name="phone" size={24} color="#428288" />
              <Text className="text-lg">{data?.phone}</Text>
            </View>
          ) : (
            <View className="items-center flex-row space-x-6">
              <FontAwesome name="phone" size={24} color="#428288" />
              <Text className="text-lg text-[#97A6Af]">No phone</Text>
            </View>
          )}
          {data?.email ? (
            <View className="items-center flex-row space-x-6">
              <FontAwesome name="phone" size={24} color="#428288" />
              <Text className="text-lg ">{data?.email}</Text>
            </View>
          ) : (
            <View className="items-center flex-row space-x-6">
              <FontAwesome name="phone" size={24} color="#428288" />
              <Text className="text-lg text-[#97A6Af]">No email</Text>
            </View>
          )}
          {data?.address ? (
            <View className="items-center flex-row space-x-6">
              <FontAwesome name="phone" size={24} color="#428288" />
              <Text className="text-lg">{data?.address}</Text>
            </View>
          ) : (
            <View className="items-center flex-row space-x-6">
              <FontAwesome name="phone" size={24} color="#428288" />
              <Text className="text-lg text-[#97A6Af]">
                Address not available.
              </Text>
            </View>
          )}
        </View>
        <View className="mt-4 px-4 py-4 rounded-lg bg-[#06B2BE] items-center justify-center mb-12">
          <Text className="text-3xl font-semibold uppercase tracking-wider text-gray-100">
            Book Now
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ItemScreen;
