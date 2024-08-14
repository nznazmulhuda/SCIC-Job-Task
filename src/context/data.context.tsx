import { createContext, useState } from "react";

export const DataContext = createContext({});

export function DataProvider({ children }: { children: JSX.Element }) {
	const [data, setData] = useState({});
	const valueOf = {
		data,
		setData,
	};

	return (
		<DataContext.Provider value={valueOf}>{children}</DataContext.Provider>
	);
}
