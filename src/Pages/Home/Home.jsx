import { StatusBar } from "expo-status-bar";
import { Text, Pressable, View, ActivityIndicator } from "react-native";
import { useEffect, useState } from "react";

export default function Home({ navigation }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simula una carga de datos
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  const styles = "text-2xl bg-white shadow-sm py-3 rounded-xl mb-4";

  if (loading) {
    return (
      <View className="flex-1 justify-center items-center bg-white">
        <ActivityIndicator size="large" color="#f97316" />
        <Text className="mt-4 text-orange-500">Cargando...</Text>
      </View>
    );
  }

  function goToEntradas() {
    navigation.navigate("Entradas");
  }
  function goToPlatoFuerte() {
    navigation.navigate("PlatoFuerte");
  }
  function goToPostres() {
    navigation.navigate("Postres");
  }

  return (
    <View className="flex-1 justify-center items-center bg-white">
      <Text className="text-orange-500 text-3xl mb-10 font-bold">
        Escoge la categoría
      </Text>
      <View className="flex gap-3 items-center">
        <Pressable onPress={goToEntradas}>
          <Text className={`px-16 ${styles}`}>Entradas</Text>
        </Pressable>
        <Pressable onPress={goToPlatoFuerte}>
          <Text className={`px-10 ${styles}`}>Plato principal</Text>
        </Pressable>
        <Pressable onPress={goToPostres}>
          <Text className={`px-20 ${styles}`}>Postres</Text>
        </Pressable>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}
