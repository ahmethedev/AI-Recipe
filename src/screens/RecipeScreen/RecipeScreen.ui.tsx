import React from "react";
import { TextInput, TouchableOpacity, View } from "react-native";
import { Text } from "react-native";
import styles from "./RecipeScreen.styles";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { RecipeScreenUIProps } from "./RecipeScreen.props";

const RecipeScreenUI: React.FC<RecipeScreenUIProps> = ({
  value,
  onChangeValue,
  onPressCreate
}) => {
  const { bottom: paddingBottom, top: paddingTop } = useSafeAreaInsets();
  return (
    <View style={[styles.container, { paddingBottom, paddingTop }]}>
      <View style={styles.recipeContainer}>
        <Text>{value}</Text>
      </View>
      <View style={styles.bottomContainer}>
        <TextInput
          value={value}
          onChangeText={onChangeValue}
          placeholder="Ne yemek istersin?"
          style={styles.input}
        />
        <TouchableOpacity onPress={onPressCreate} style= {styles.button}>
            <Text style={styles.buttonText}>Tarif Oluştur</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default RecipeScreenUI;
