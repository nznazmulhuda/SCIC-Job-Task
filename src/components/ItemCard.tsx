// @ts-nocheck

import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { Rating } from "@mui/material";

export default function RecipeReviewCard({ item }) {
	const {
		productName,
		productImage,
		description,
		price,
		ratings,
		creationDate,
	} = item;
	return (
		<Card>
			<CardHeader
				action={
					<IconButton aria-label="settings">
						<MoreVertIcon />
					</IconButton>
				}
				title={productName}
				subheader={creationDate.split(" ")[0]}
			/>

			<div className="w-full h-[40vh]">
				<img className="h-full mx-auto" src={productImage} alt="" />
			</div>

			<CardContent>
				<Typography variant="body2" color="text.secondary">
					{description.length > 200
						? description.slice(0, 200) + "..."
						: description}
				</Typography>
			</CardContent>

			<CardActions disableSpacing>
				<div className="space-x-2 flex items-center">
					<h1 className="text-[#2E7D32] font-semibold text-lg border px-2 rounded-lg py-1">
						${" "}
						<span className="text-xl md:text-2xl lg:text-3xl">
							{parseFloat(price).toFixed(2)}
						</span>
					</h1>
					<Rating defaultValue={ratings} precision={0.1} readOnly></Rating>
				</div>
			</CardActions>
		</Card>
	);
}
