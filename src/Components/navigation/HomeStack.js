import { createStackNavigator } from "@react-navigation/stack";
import Home from "../../Pages/Home/Home";
import Entradas from "../../Pages/Categories/Entradas";
import PlatoFuerte from "../../Pages/Categories/PlatoFuerte";
import Postres from "../../Pages/Categories/Postres";
import { DetailPage } from "../../Pages/DetailPage/DetailPage";

const Stack = createStackNavigator();

export function HomeStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Entradas" component={Entradas} />
      <Stack.Screen name="PlatoFuerte" component={PlatoFuerte} />
      <Stack.Screen name="Postres" component={Postres} />
      <Stack.Screen name="Detail" component={DetailPage} />
    </Stack.Navigator>
  );
}
