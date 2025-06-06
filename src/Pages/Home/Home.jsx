import { StatusBar } from "expo-status-bar";
import { Text, View } from "react-native";
import "../../../global.css";

export default function Home() {
  return (
    <View className="flex-1 items-center justify-center bg-white">
      <Text className="text-orange-500 text-2xl font-bold mb-6">
        Escoge la categoría
      </Text>
      <View className="flex gap-3 items-center">
        <Text>Entradas</Text>
        <Text>Plato principal</Text>
        <Text>Postres</Text>
        <Text>Bebidas</Text>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}
