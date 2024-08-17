// @ts-nocheck

import Navbar from "./components/Navbar";
import ItemCard from "./components/ItemCard";
import Pagination from "./components/Pagination";
import Category from "./components/Category";
import Sorting from "./components/Sorting";
import PriceRange from "./components/PriceSlider";
import { useContext } from "react";
import { DataContext } from "./context/data.context";

function App() {
	const { data } = useContext(DataContext);

	return (
		<>
			<Navbar />

			<main className="grid md:grid-cols-4 container mx-auto gap-2 md:gap-4 lg:gap-6 mt-4">
				{/* left side */}
				<div className="w-full md:col-span-1">
					<h1 className="text-[#2E7D32] text-xl md:text-2xl lg:text-3xl text-center mb-4 font-bold">
						Filter
					</h1>

					<div className="w-full">
						{/* category */}
						<Category />

						{/* sorting */}
						<Sorting />

						{/* price range */}
						<PriceRange />
					</div>
				</div>

				{/* right side */}
				<div className="md:col-span-3">
					<h1 className="text-[#2E7D32] text-xl md:text-2xl lg:text-3xl text-center mb-4 font-bold">
						Products
					</h1>

					<hr className="mb-6" />

					{data.length > 0 ? (
						<>
							<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 w-full">
								{data.map((item) => (
									<ItemCard key={item._id} item={item} />
								))}
							</div>

							<div className="flex justify-center mt-4 md:mt-6">
								<Pagination />
							</div>
						</>
					) : (
						<>
							<h1 className="text-center text-xl md:text-2xl lg:text-3xl font-bold">
								There is no data.
							</h1>
						</>
					)}
				</div>
			</main>
		</>
	);
}

export default App;
