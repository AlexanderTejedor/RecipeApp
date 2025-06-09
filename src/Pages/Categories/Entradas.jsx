import { View, Text, ScrollView, ActivityIndicator } from "react-native";
import { RecipeCard } from "../../Components/RecipeCard/RecipeCrad";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useState, useEffect } from "react";

const ImgEmpa = require("../../../assets/empanadas.webp");
const chorizo = require("../../../assets/receta-chorizo.jpg");
const nachos = require("../../../assets/Nachos.avif");

export default function Entradas() {
  const insets = useSafeAreaInsets();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <View
        className="flex-1 justify-center items-center bg-white"
        style={{ paddingTop: insets.top }}
      >
        <ActivityIndicator size="large" color="#f97316" />
        <Text className="mt-4 text-orange-500">Cargando recetas...</Text>
      </View>
    );
  }

  return (
    <View style={{ paddingTop: insets.top }}>
      <ScrollView>
        <View className="flex-1 justify-center items-center bg-white">
          <Text className="text-3xl text-orange-500 font-bold mt-8">
            Entradas
          </Text>
          <RecipeCard
            title={"Empanadas Colombianas"}
            image={ImgEmpa}
            descrip={
              "Las Empanadas son un plato típico no solo de Colombia sino de muchos países del mundo. Pero en Colombia tienen un sabor y una preparación muy especial."
            }
            category={"Entrada"}
          />
          <RecipeCard
            title={"Receta de chorizo"}
            image={chorizo}
            descrip={
              "Se trata sin duda de uno de los alimentos españoles más conocidos internacionalmente y que además es muy fácil de preparar en casa."
            }
            category={"Entrada"}
          />
          <RecipeCard
            title={"Nachos con carne"}
            image={nachos}
            descrip={
              "Los nachos son un plato típico de la cocina mexicana que consiste en totopos (trozos de tortilla de maíz) cubiertos con queso fundido y otros ingredientes como carne, frijoles, guacamole y salsa."
            }
            category={"Entrada"}
          />
        </View>
      </ScrollView>
    </View>
  );
}
