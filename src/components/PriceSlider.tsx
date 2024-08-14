import * as React from "react";
import Slider, { SliderThumb } from "@mui/material/Slider";
import { styled } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

const AirbnbSlider = styled(Slider)(({ theme }) => ({
	color: "#3a8589",
	height: 3,
	padding: "13px 0",
	"& .MuiSlider-thumb": {
		height: 27,
		width: 27,
		backgroundColor: "#fff",
		border: "1px solid currentColor",
		"&:hover": {
			boxShadow: "0 0 0 8px rgba(58, 133, 137, 0.16)",
		},
		"& .airbnb-bar": {
			height: 9,
			width: 1,
			backgroundColor: "currentColor",
			marginLeft: 1,
			marginRight: 1,
		},
	},
	"& .MuiSlider-track": {
		height: 3,
	},
	"& .MuiSlider-rail": {
		color: theme.palette.mode === "dark" ? "#bfbfbf" : "#d8d8d8",
		opacity: theme.palette.mode === "dark" ? undefined : 1,
		height: 3,
	},
}));

type AirbnbThumbComponentProps = React.HTMLAttributes<unknown>;

function AirbnbThumbComponent(props: AirbnbThumbComponentProps) {
	const { children, ...other } = props;
	return (
		<SliderThumb {...other}>
			{children}
			<span className="airbnb-bar" />
			<span className="airbnb-bar" />
			<span className="airbnb-bar" />
		</SliderThumb>
	);
}

export default function CustomizedSlider() {
	const [rangeValue, setRangeValue] = React.useState([100, 140]);

	React.useEffect(() => {
		console.log("Range value changed:", rangeValue);
	}, [rangeValue]);
	return (
		<Box width={"100%"}>
			<Typography gutterBottom>
				Price Range: {"$" + rangeValue[0] + " - " + "$" + rangeValue[1]}
			</Typography>
			<AirbnbSlider
				slots={{ thumb: AirbnbThumbComponent }}
				getAriaLabel={(index) =>
					index === 0 ? "Minimum price" : "Maximum price"
				}
				defaultValue={[100, 140]}
				max={200}
				min={100}
				onChange={(e) => setRangeValue(e?.target?.value)}
			/>
		</Box>
	);
}
