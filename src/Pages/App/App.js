import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import "../../../global.css";

export default function App() {
  return (
    <View style={styles.container}>
      <Text className="text-3xl text-white">Recetas por Categoria</Text>
      <View>
        <Text className="text-red-500">Vamos Funciona</Text>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    alignItems: "center",
    justifyContent: "center",
  },
});
