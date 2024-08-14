import { createContext, useEffect, useState } from "react";

export const DataContext = createContext({});

export function DataProvider({ children }: { children: JSX.Element }) {
	const [data, setData] = useState({});

	useEffect(() => {
		fetch("./demo.json")
			.then((response) => response.json())
			.then((data) => setData(data))
			.catch((error) => console.error("Error:", error));
	}, []);

	const valueOf = {
		data,
		setData,
	};

	return (
		<DataContext.Provider value={valueOf}>{children}</DataContext.Provider>
	);
}
