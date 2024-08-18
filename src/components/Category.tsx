// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck

import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import axios from "axios";
import { DataContext } from "../context/data.context";

export default function BasicSelect() {
	const { setCategory } = React.useContext(DataContext);
	const [cate, setCate] = React.useState("");
	const [categories, setCategories] = React.useState([]);

	React.useEffect(() => {
		axios
			.get("/category/get_all_category_name")
			.then((res) => setCategories(res.data))
			.catch((err) => console.error(err.message));
	}, []);

	const handleChange = (event: SelectChangeEvent) => {
		setCate(event.target.value);
		setCategory(event.target.value);
	};

	return (
		<div className="mb-4">
			<h1 className="hidden md:flex text-sm md:text-lg font-semibold text-green-900 mb-2">
				Category:{" "}
			</h1>

			<Box width={"100%"}>
				<FormControl fullWidth color="success">
					<InputLabel id="demo-simple-select-label">Caterory</InputLabel>
					<Select
						labelId="demo-simple-select-label"
						id="demo-simple-select"
						value={cate}
						label={cate === "" ? "Caterory" : "Category"}
						onChange={handleChange}
					>
						<MenuItem value="">All</MenuItem>
						{categories?.map((cate) => (
							<MenuItem key={cate._id} value={cate._id}>
								{cate._id}
							</MenuItem>
						))}
					</Select>
				</FormControl>
			</Box>
		</div>
	);
}
