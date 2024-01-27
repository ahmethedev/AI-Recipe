import React, { useState } from "react";
import RecipeScreenUI from "./RecipeScreen.ui";
import { collection, addDoc } from "firebase/firestore"; 
import { db } from "../../../firebaseConfig";
import { Recipe } from "../../types/Recipe.typesj";

const RecipeScreenContainer = () => {
  const [value, setValue] = useState("");
  const [recipe, setRecipe] = useState<Recipe>(); // undefined
  const   handlePressCreate = async () => {
    try {
      const docRef = await addDoc(collection(db, "Recipes "), {
        title: value 
      });
      setRecipe({title: value, id:docRef.id});
      setValue('');
      console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  };   
  return (
    <RecipeScreenUI
      recipe= {recipe}
      value={value}
      onPressCreate={handlePressCreate}
      onChangeValue={setValue}
    />
  );
};

export default RecipeScreenContainer;
