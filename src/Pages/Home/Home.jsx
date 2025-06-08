import { StatusBar } from "expo-status-bar";
import { Text, View } from "react-native";

export default function Home() {
  const styles = "text-2xl bg-white shadow-sm py-3 rounded-xl mb-4";
  return (
    <View className="flex-1 justify-center items-center bg-white">
      <Text className="text-orange-500 text-3xl mb-10 font-bold">
        Escoge la categoría
      </Text>
      <View className="flex gap-3 items-center">
        <Text className={`px-16 ${styles}`}>Entradas</Text>
        <Text className={`px-10 ${styles}`}>Plato principal</Text>
        <Text className={`px-20 ${styles}`}>Postres</Text>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}
