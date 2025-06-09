import "../../../global.css";
import { NavigationContainer } from "@react-navigation/native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { TabNavigation } from "../../Components/navigation/TabNavigation";

export default function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <TabNavigation />
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
