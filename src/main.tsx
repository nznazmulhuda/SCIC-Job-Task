import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { DataProvider } from "./context/data.context.tsx";
import axios from "axios";
import { AuthProvider } from "./context/auth.context.tsx";

axios.defaults.baseURL = "https://orbit-outfits-server.vercel.app/api/v1";

createRoot(document.getElementById("root")!).render(
	<StrictMode>
		{/* Auth related contex api */}
		<AuthProvider>
			{/* Data Context api */}
			<DataProvider>
				{/* render main app */}
				<App />
			</DataProvider>
		</AuthProvider>
	</StrictMode>,
);
