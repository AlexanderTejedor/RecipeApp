import { View, Text } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../../Pages/Home/Home";
import { RecipePage } from "../../Pages/RecipesPage/RecipePage";
import { DetailPage } from "../../Pages/DetailPage/DetailPage";

const Tab = createBottomTabNavigator();

const TabNavigation = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="home"
        component={Home}
        options={{
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="RecipePage"
        component={RecipePage}
        options={{
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="detailPage"
        component={DetailPage}
        options={{
          headerShown: false,
        }}
      />
    </Tab.Navigator>
  );
};

export { TabNavigation };
