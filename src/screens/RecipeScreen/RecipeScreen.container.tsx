import React, { useState } from "react";
import RecipeScreenUI from "./RecipeScreen.ui";

const RecipeScreenContainer = () => {
  
  const [value, setValue] = useState('');
  const handlePressCreate = () => {
    console.log('handlePress: ', value)
  }
  return <RecipeScreenUI value={value} onPressCreate={handlePressCreate } onChangeValue={setValue}/>;
};

export default RecipeScreenContainer;
