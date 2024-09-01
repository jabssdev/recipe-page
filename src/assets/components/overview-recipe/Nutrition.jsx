export const Nutrition = () => {
	return (
		<section className="px-8 pt-7">
			<h2 className="text-2xl font-young-serif text-ct-rose-800 mb-3">Nutrition</h2>
			<p className="text-ct-stone-600 mb-4">The table below shows nutritional values per serving without the additional fillings.</p>
			<article>
				<div className="grid grid-cols-2 mb-2.5">
					<p className="ml-9 text-ct-stone-600">Calories</p>
					<p
						className="ml-2
					 font-bold text-ct-rose-800"
					>
						277kcal
					</p>
				</div>
				<hr className="border-ct-stone-600 opacity-25 mb-3" />
				<div className="grid grid-cols-2 mb-2.5">
					<p className="ml-9 text-ct-stone-600">Carbs</p>
					<p
						className="ml-2
					 font-bold text-ct-rose-800"
					>
						0g
					</p>
				</div>
				<hr className="border-ct-stone-600 opacity-25 mb-3" />
				<div className="grid grid-cols-2 mb-2.5">
					<p className="ml-9 text-ct-stone-600">Protein</p>
					<p
						className="ml-2
					 font-bold text-ct-rose-800"
					>
						20g
					</p>
				</div>
				<hr className="border-ct-stone-600 opacity-25 mb-3" />
				<div className="grid grid-cols-2 mb-10">
					<p className="ml-9 text-ct-stone-600">Fat</p>
					<p
						className="ml-2
					 font-bold text-ct-rose-800"
					>
						22g
					</p>
				</div>
			</article>
		</section>
	);
};
