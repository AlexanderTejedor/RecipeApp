import { StatusBar } from "expo-status-bar";
import { Text, View } from "react-native";
import "../../../global.css";
import Home from "../Home/Home.jsx";
import { NavigationContainer } from "@react-navigation/native";
import { TabNavigation } from "../../Components/navigation/TabNavigation.jsx";

export default function App() {
  return (
    <NavigationContainer>
      <TabNavigation />
    </NavigationContainer>
  );
}
