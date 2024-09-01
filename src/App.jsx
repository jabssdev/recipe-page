import { Header } from "./assets/components/Header";
import { RecipeContainer } from "./assets/components/RecipeContainer";
function App() {
	return (
		<div className="sm:max-w-[700px] bg-white sm:rounded-2xl">
			<Header />
			<RecipeContainer />
		</div>
	);
}

export default App;
