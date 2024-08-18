// eslint-disable-next-line @typescript-eslint/ban-ts-comment
//@ts-nocheck

import { createBrowserRouter } from "react-router-dom";
import Layout from "../layout/layout";
import App from "../App";
import Login from "../components/Login";
import SignUp from "../components/SignUp";

export const router = createBrowserRouter([
	{
		path: "/",
		element: <Layout />,
		children: [
			{
				path: "/",
				element: <App />,
			},
			{
				path: "/login",
				element: <Login />,
			},
			{
				path: "/signUp",
				element: <SignUp />,
			},
		],
	},
]);
