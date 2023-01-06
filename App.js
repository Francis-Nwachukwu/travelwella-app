import { StatusBar } from "expo-status-bar";
import { Text, View } from "react-native";
import { SafeAreaView } from "react-native";
import { TailwindProvider } from "tailwindcss-react-native";

export default function App() {
  return (
    <TailwindProvider>
      <SafeAreaView className="flex1 items-center justify-center">
        <Text className="text-red-600">Makaing !</Text>
        <StatusBar style="auto" />
      </SafeAreaView>
    </TailwindProvider>
  );
}
