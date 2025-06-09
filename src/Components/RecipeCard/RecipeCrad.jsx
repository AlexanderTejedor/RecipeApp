import { View, Text, Image, TouchableOpacity } from "react-native";

const RecipeCard = ({ title, image, descrip, category, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress} activeOpacity={0.8}>
      <View className="flex mt-5 flex-row gap-4 mx-20 items-center px-4 shadow-sm bg-white rounded-xl">
        <Image
          className="rounded-lg w-[100px] h-[100px] bg-cover"
          source={image}
        />
        <View className="p-4 gap-1">
          <Text className="text-xl font-semibold">{title}</Text>
          <Text>{descrip.slice(0, 50)}...</Text>
          <Text className="text-blue-600">{category}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};
export { RecipeCard };
