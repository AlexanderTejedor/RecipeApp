import "../../../global.css";
import { NavigationContainer } from "@react-navigation/native";
import { TabNavigation } from "../../Components/navigation/TabNavigation.jsx";
import { SafeAreaProvider } from "react-native-safe-area-context";

export default function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer className="flex-1 justify-center items-center">
        <TabNavigation />
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
