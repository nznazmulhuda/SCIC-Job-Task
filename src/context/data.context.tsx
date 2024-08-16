import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const DataContext = createContext({});

export function DataProvider({ children }: { children: JSX.Element }) {
	const [data, setData] = useState({});

	useEffect(() => {
		axios
			.get("/products/all_products")
			.then((res) => setData(res.data))
			.catch((err) => console.error(err.message));
	}, []);

	const valueOf = {
		data,
		setData,
	};

	return (
		<DataContext.Provider value={valueOf}>{children}</DataContext.Provider>
	);
}
