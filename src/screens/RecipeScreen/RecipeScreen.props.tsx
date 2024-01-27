import { Recipe } from "../../types/Recipe.typesj";

export type RecipeScreenUIProps = {
    recipe?: Recipe;
    value: string;
    onChangeValue: (value: string) => void;
    onPressCreate: () => void;
} 