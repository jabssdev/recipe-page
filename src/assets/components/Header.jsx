import omelette from "../images/image-omelette.jpeg";

export const Header = () => {
	return (
		<header className="mb-5">
			<img src={omelette} alt="Plate of a simple omelet" />
			<section className="px-8 py-9">
				<h1 className="text-4xl font-young-serif mb-5 text-ct-stone-900">Simple Omelette Recipe</h1>
				<p className="mb-6 text-ct-stone-600 font-[400]">
					An easy and quick dish, perfect for any meal. This classic omelette combines beaten eggs cooked to perfection, optionally filled with your
					choice of cheese, vegetables, or meats.
				</p>
				<div className="py-6 pl-6 pr-14 bg-ct-rose-50 rounded-xl">
					<h2 className="text-xl font-[700] mb-3 text-ct-rose-800">Preparation Time</h2>
					<ul className="ml-9 marker:text-ct-rose-800 marker:text-[0.775rem] leading-[26px]">
						<li className="li-center">
							<p className="text-ct-stone-600">
								<span className="font-[700] text-ct-stone-900">Total:</span> Approximately 10 minutes
							</p>
						</li>
						<li className="li-center">
							<p className="text-ct-stone-600">
								<span className="font-[700] text-ct-stone-900">Preparation:</span> 5 minutes
							</p>
						</li>
						<li className="li-center">
							<p className="text-ct-stone-600">
								<span className="font-[700] text-ct-stone-900">Cooking:</span> 5 minutes
							</p>
						</li>
					</ul>
				</div>
			</section>
		</header>
	);
};
