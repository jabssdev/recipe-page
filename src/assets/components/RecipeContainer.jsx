import { Ingredients } from "./overview-recipe/Ingredients";
import { Instructions } from "./overview-recipe/Instructions";
import { Nutrition } from "./overview-recipe/Nutrition";

export const RecipeContainer = () => {
	return (
		<>
			<Ingredients />
			<Instructions />
			<Nutrition />
		</>
	);
};
