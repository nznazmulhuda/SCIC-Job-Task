import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const DataContext = createContext({});

export function DataProvider({ children }: { children: JSX.Element }) {
	const [data, setData] = useState({});
	const [category, setCategory] = useState("");
	const [maxPrice, setMaxPrice] = useState("");
	const [minPrice, setMinPrice] = useState("");
	const [query, setQuery] = useState("");
	const [page, setPage] = useState(1);
	const [sortBy, setSortBy] = useState("");

	useEffect(() => {
		axios
			.get(
				`/products/all_products?category=${category}&maxPrice=${maxPrice}&query=${query}&minPrice=${minPrice}&page=${page}&sortBy=${sortBy}`,
			)
			.then((res) => setData(res.data))
			.catch((err) => console.error(err.message));
	}, [category, maxPrice, minPrice, page, query, sortBy]);

	const valueOf = {
		data,
		setCategory,
		setMaxPrice,
		setMinPrice,
		setQuery,
		setPage,
		setSortBy,
	};

	return (
		<DataContext.Provider value={valueOf}>{children}</DataContext.Provider>
	);
}
