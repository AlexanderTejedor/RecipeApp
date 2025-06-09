import { View, Text, ScrollView, ActivityIndicator } from "react-native";
import { RecipeCard } from "../../Components/RecipeCard/RecipeCrad";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useState, useEffect } from "react";

const flan = require("../../../assets/flan.avif");
const tartaChocolate = require("../../../assets/tartaChocolate.jpg");
const heladoVainilla = require("../../../assets/heladoVainilla.avif");

export default function Postres() {
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
            Postres
          </Text>
          <RecipeCard
            title={"Receta de flan napolitano"}
            image={flan}
            descrip={
              "El flan es un postre clásico que se prepara con huevos, leche y azúcar. Es suave, cremoso y delicioso."
            }
            category={"Postre"}
          />
          <RecipeCard
            title={"Receta de tarta de chocolate"}
            image={tartaChocolate}
            descrip={
              "La tarta de chocolate es un postre irresistible para los amantes del chocolate. Es rica, cremosa y perfecta para cualquier ocasión."
            }
            category={"Postre"}
          />
          <RecipeCard
            title={"Receta de helado de vainilla"}
            image={heladoVainilla}
            descrip={
              "El helado de vainilla es un postre clásico que nunca pasa de moda. Es cremoso, suave y perfecto para refrescarse en un día caluroso."
            }
            category={"Postre"}
          />
        </View>
      </ScrollView>
    </View>
  );
}
