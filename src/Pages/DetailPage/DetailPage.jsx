import { View, Text, ScrollView, Image } from "react-native";

const ImgEmpa = require("../../../assets/empanadas.webp");

const DetailPage = () => {
  return (
    <View className="flex-1 bg-white">
      <ScrollView>
        <Image
          source={ImgEmpa}
          className="w-full h-64 rounded-xl"
          resizeMode="cover"
        />
        <View className="p-4">
          <Text className="text-2xl font-bold mb-4">Empanadas Colombianas</Text>
          <Text className="text-gray-700 mb-2">
            Las Empanadas son un plato típico no solo de Colombia sino de muchos
            países del mundo. Pero en Colombia tienen un sabor y una preparación
            muy especial.
          </Text>
          <Text className="text-gray-700 mb-2">
            Ingredientes: Carne molida, papa, cebolla, especias, masa de maíz.
          </Text>
          <Text className="text-gray-700 mb-2">
            Preparación: Cocinar la carne con las especias, hacer la masa,
            formar las empanadas y freírlas hasta dorar.
          </Text>
        </View>
        <View className="p-4">
          <Text className="text-xl font-bold mb-2">Ingredientes</Text>
          <Text className="text-gray-700 mb-1">• 500g de carne molida</Text>
          <Text className="text-gray-700 mb-1">• 2 papas medianas</Text>
          <Text className="text-gray-700 mb-1">• 1 cebolla larga</Text>
          <Text className="text-gray-700 mb-1">• 1 diente de ajo</Text>
          <Text className="text-gray-700 mb-1">• 1 cucharadita de comino</Text>
          <Text className="text-gray-700 mb-1">• Sal y pimienta al gusto</Text>
          <Text className="text-gray-700 mb-1">• Masa de maíz precocida</Text>
          <Text className="text-gray-700 mb-1">• Aceite para freír</Text>

          <Text className="text-xl font-bold my-3">Paso a paso</Text>
          <Text className="text-gray-700 mb-1">
            1. Cocina las papas, pélalas y hazlas puré.
          </Text>
          <Text className="text-gray-700 mb-1">
            2. Sofríe la cebolla y el ajo picados, agrega la carne molida y
            cocina hasta dorar.
          </Text>
          <Text className="text-gray-700 mb-1">
            3. Añade el comino, sal, pimienta y mezcla con el puré de papa.
          </Text>
          <Text className="text-gray-700 mb-1">
            4. Prepara la masa de maíz según las instrucciones del paquete.
          </Text>
          <Text className="text-gray-700 mb-1">
            5. Forma discos con la masa, rellena con la mezcla y cierra en forma
            de empanada.
          </Text>
          <Text className="text-gray-700 mb-1">
            6. Fríe en aceite caliente hasta que estén doradas y crujientes.
          </Text>
        </View>
      </ScrollView>
    </View>
  );
};

export { DetailPage };
