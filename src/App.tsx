import Navbar from "./components/Navbar";
import ItemCard from "./components/ItemCard";
import Pagination from "./components/Pagination";

function App() {
	return (
		<>
			<Navbar />

			<main className="grid md:grid-cols-4 container mx-auto gap-2 md:gap-4 lg:gap-6 mt-4">
				{/* left side */}
				<div className="col-span-1">
					<h1>Filtering</h1>

					{/* category */}

					{/* sorting */}
				</div>

				{/* right side */}
				<div className="col-span-3">
					<h1 className="text-[#2E7D32] text-xl md:text-2xl lg:text-3xl text-center mb-4 font-bold">
						Products
					</h1>

					<hr className="mb-6" />

					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 w-full">
						<ItemCard />
						<ItemCard />
						<ItemCard />
						<ItemCard />
						<ItemCard />
					</div>

					<div className="flex justify-center mt-4 md:mt-6">
						<Pagination />
					</div>
				</div>
			</main>
		</>
	);
}

export default App;
