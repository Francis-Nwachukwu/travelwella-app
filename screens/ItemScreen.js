import { View, Text } from "react-native";
import React, { useLayoutEffect } from "react";
import { useNavigation } from "@react-navigation/native";

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
    <View>
      <Text>ItemScreen</Text>
    </View>
  );
};

export default ItemScreen;
