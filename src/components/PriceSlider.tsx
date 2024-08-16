import * as React from "react";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import axios from "axios";
import { DataContext } from "../context/data.context";

function valuetext(value: number) {
	return `${value}°C`;
}

const minDistance = 10;

export default function CustomizedSlider() {
	const { setMaxPrice, setMinPrice } = React.useContext(DataContext);
	const [range, setRange] = React.useState([]);
	const [value1, setValue1] = React.useState<number[]>([]);

	React.useEffect(() => {
		axios.get("/data/price_range").then((res) => {
			setRange([res.data.minPrice, res.data.maxPrice]);
			setValue1([res.data.minPrice, res.data.maxPrice]);
		});
	}, []);

	const handleChange1 = (
		event: Event,
		newValue: number | number[],
		activeThumb: number,
	) => {
		if (!Array.isArray(newValue)) {
			return;
		}

		if (activeThumb === 0) {
			setValue1([Math.min(newValue[0], value1[1] - minDistance), value1[1]]);
		} else {
			setValue1([value1[0], Math.max(newValue[1], value1[0] + minDistance)]);
		}
	};

	React.useEffect(() => {
		setMinPrice(value1[0]);
		setMaxPrice(value1[1]);
	}, [setMaxPrice, setMinPrice, value1]);

	return (
		<>
			<h1 className="hidden md:flex text-sm md:text-lg font-semibold text-green-900 mb-2">
				Price range: {`$${value1[0]} - $${value1[1]}`}
			</h1>

			<Box sx={{ width: "100%" }}>
				<Slider
					getAriaLabel={() => "Minimum distance"}
					value={value1}
					onChange={handleChange1}
					valueLabelDisplay="auto"
					getAriaValueText={valuetext}
					disableSwap
					max={range[1]}
					min={range[0]}
				/>
			</Box>
		</>
	);
}
