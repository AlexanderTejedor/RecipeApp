import { View, Text, ScrollView, ActivityIndicator } from "react-native";
import { RecipeCard } from "../../Components/RecipeCard/RecipeCrad";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useState, useEffect } from "react";

const polloHorno = require("../../../assets/PolloHorno.webp");
const lasanaPollo = require("../../../assets/lasanaPollo.avif");
const paella = require("../../../assets/paella.avif");

export default function PlatoFuerte() {
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
            Plato Principal
          </Text>
          <RecipeCard
            title={"Receta de pollo al horno"}
            image={polloHorno}
            descrip={
              "El pollo al horno es un plato clásico que nunca pasa de moda. Es fácil de preparar y siempre resulta delicioso."
            }
            category={"Plato Principal"}
          />
          <RecipeCard
            title={"Receta de lasaña de pollo"}
            image={lasanaPollo}
            descrip={
              "La lasaña es un plato italiano que consiste en capas de pasta intercaladas con carne o pollo, salsa de tomate y queso."
            }
            category={"Plato Principal"}
          />
          <RecipeCard
            title={"Receta de paella"}
            image={paella}
            descrip={
              "La paella es un plato tradicional español originario de la Comunidad Valenciana. Se elabora con arroz, mariscos y verduras."
            }
            category={"Plato Principal"}
          />
        </View>
      </ScrollView>
    </View>
  );
}
