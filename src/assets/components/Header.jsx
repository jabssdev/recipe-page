import omelette from "../images/image-omelette.jpeg";

export const Header = () => {
	return (
		<header>
			<img className="sm:px-8 sm:pt-9" src={omelette} alt="Plate of a simple omelet" />
			<section className="px-8 pt-9">
				<h1 className="text-4xl font-young-serif mb-5 text-ct-stone-900">Simple Omelette Recipe</h1>
				<p className="mb-7 text-ct-stone-600 font-[400]">
					An easy and quick dish, perfect for any meal. This classic omelette combines beaten eggs cooked to perfection, optionally filled with your
					choice of cheese, vegetables, or meats.
				</p>
				<div className="py-6 pl-6 pr-14 bg-ct-rose-50 rounded-xl">
					<h3 className="text-xl font-bold mb-3 text-ct-rose-800">Preparation Time</h3>
					<ul className="ml-9 marker:text-ct-rose-800 marker:text-[0.775rem] leading-6">
						<li className="li-center">
							<p className="text-ct-stone-600 mb-1.5">
								<span className="font-bold text-ct-stone-600">Total:</span> Approximately 10 minutes
							</p>
						</li>
						<li className="li-center">
							<p className="text-ct-stone-600 mb-1.5">
								<span className="font-bold text-ct-stone-600">Preparation:</span> 5 minutes
							</p>
						</li>
						<li className="li-center">
							<p className="text-ct-stone-600 mb-1.5">
								<span className="font-bold text-ct-stone-600">Cooking:</span> 5 minutes
							</p>
						</li>
					</ul>
				</div>
			</section>
		</header>
	);
};
