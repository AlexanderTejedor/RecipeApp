import { View, Text, ScrollView } from "react-native";
import { RecipeCard } from "../../Components/RecipeCard/RecipeCrad";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const ImgEmpa = require("../../../assets/empanadas.webp");
const chorizo = require("../../../assets/receta-chorizo.jpg");
const nachos = require("../../../assets/Nachos.avif");
const polloHorno = require("../../../assets/PolloHorno.webp");
const lasanaPollo = require("../../../assets/lasanaPollo.avif");
const paella = require("../../../assets/paella.avif");
const flan = require("../../../assets/flan.avif");
const tartaChocolate = require("../../../assets/tartaChocolate.jpg");
const heladoVainilla = require("../../../assets/heladoVainilla.avif");

export default function RecipePage() {
  const insets = useSafeAreaInsets();

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
              "Las Empanadas son un plato típico no solo de Colombia sino de muchos países del mundo. Pero..."
            }
            category={"Entrada"}
          />
          <RecipeCard
            title={"Receta de chorizo"}
            image={chorizo}
            descrip={
              "Se trata sin duda de uno de los alimentos españoles más conocidos internacionalmente y que además..."
            }
            category={"Entrada"}
          />
          <RecipeCard
            title={"Nachos con carne"}
            image={nachos}
            descrip={
              "Los nachos son un plato típico de la cocina mexicana que consiste en totopos (trozos de tortilla de maíz) cubiertos con queso..."
            }
            category={"Entrada"}
          />
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
