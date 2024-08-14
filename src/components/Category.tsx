import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";

export default function BasicSelect() {
	const [category, setCategory] = React.useState("");

	const handleChange = (event: SelectChangeEvent) => {
		setCategory(event.target.value as string);
		console.log(event.target.value);
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
						value={category}
						label="Category"
						onChange={handleChange}
					>
						<MenuItem value={10}>Ten</MenuItem>
						<MenuItem value={20}>Twenty</MenuItem>
						<MenuItem value={30}>Thirty</MenuItem>
					</Select>
				</FormControl>
			</Box>
		</div>
	);
}
