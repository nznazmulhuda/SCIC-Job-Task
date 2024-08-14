import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { Rating } from "@mui/material";

export default function RecipeReviewCard() {
	return (
		<Card>
			<CardHeader
				action={
					<IconButton aria-label="settings">
						<MoreVertIcon />
					</IconButton>
				}
				title="Shrimp and Chorizo Paella"
				subheader="September 14, 2016"
			/>

			<CardMedia
				component="img"
				height="194"
				image="https://static.wikia.nocookie.net/jujutsu-kaisen/images/5/5a/Satoru_Gojo_arrives_on_the_battlefield_%28Anime%29.png"
				alt=""
			/>

			<CardContent>
				<Typography variant="body2" color="text.secondary">
					This impressive paella is a perfect party dish and a fun meal to cook
					together with your guests. Add 1 cup of frozen peas along with the
					mussels, if you like.
				</Typography>
			</CardContent>

			<CardActions disableSpacing>
				<div className="space-x-2 flex items-center">
					<h1 className="text-[#2E7D32] font-semibold text-lg border px-2 rounded-lg py-1">
						$ <span className="text-xl md:text-2xl lg:text-3xl">19.99</span>
					</h1>
					<Rating defaultValue={4.3} precision={0.1} readOnly></Rating>
				</div>
			</CardActions>
		</Card>
	);
}
