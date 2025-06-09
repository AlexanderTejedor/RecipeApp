import { createStackNavigator } from "@react-navigation/stack";
import { DetailPage } from "../../Pages/DetailPage/DetailPage";
import { Entradas } from "../../Pages/Entradas/Entradas";

const stack = createStackNavigator();

const StackN = () => {
  return (
    <stack.Navigator className="">
      <stack.Screen name="Detail" component={DetailPage} />
      <stack.Screen name="Entradas" component={Entradas} />
    </stack.Navigator>
  );
};
export { StackN };
