import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { DataContext } from "../context/data.context";

export default function BasicSelect() {
	const { setSortBy } = React.useContext(DataContext);
	const [sort, setSort] = React.useState("");

	const handleChange = (event: SelectChangeEvent) => {
		setSort(event.target.value);
		setSortBy(event.target.value);
	};

	return (
		<div className="mb-4">
			<h1 className="hidden md:flex text-sm md:text-lg font-semibold text-green-900 mb-2">
				Sorting:{" "}
			</h1>

			<Box width={"100%"}>
				<FormControl fullWidth color="success">
					<InputLabel id="demo-simple-select-label">Sorting</InputLabel>
					<Select
						labelId="demo-simple-select-label"
						id="demo-simple-select"
						value={sort}
						label="Sorting"
						onChange={handleChange}
					>
						<MenuItem value={""}>Sorting</MenuItem>
						<MenuItem value={"lth"}>Price Low to High</MenuItem>
						<MenuItem value={"htl"}>Price High to Low</MenuItem>
					</Select>
				</FormControl>
			</Box>
		</div>
	);
}
