import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { DataProvider } from "./context/data.context.tsx";
import axios from "axios";

axios.defaults.baseURL = "https://orbit-outfits-server.vercel.app/api/v1";

createRoot(document.getElementById("root")!).render(
	<StrictMode>
		{/* Context api */}
		<DataProvider>
			{/* render main app */}
			<App />
		</DataProvider>
	</StrictMode>,
);
