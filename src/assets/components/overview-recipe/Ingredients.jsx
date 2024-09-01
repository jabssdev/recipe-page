export const Ingredients = () => {
	return (
		<section className="px-8 pt-7">
			<h2 className="text-2xl font-young-serif text-ct-rose-800 mb-3">Ingredients</h2>
			<ul className="ml-8 marker:text-ct-rose-800 marker:text-[0.775rem] leading-6">
				<li className="li-center">
					<p className="text-ct-stone-600 mb-1">2-3 large eggs</p>
				</li>
				<li className="li-center">
					<p className="text-ct-stone-600 mb-1.5">Salt, to taste</p>
				</li>
				<li className="li-center">
					<p className="text-ct-stone-600 mb-1.5">Pepper, to taste</p>
				</li>
				<li className="li-center">
					<p className="text-ct-stone-600 mb-1.5">1 tablespoon of butter or oil</p>
				</li>
				<li className="li-center">
					<p className="text-ct-stone-600 mb-1.5">Optional fillings: cheese, diced vegetables, cooked meats, herbs</p>
				</li>
			</ul>
			<hr className="border-ct-stone-600 opacity-25 mt-6" />
		</section>
	);
};
