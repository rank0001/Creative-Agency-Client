import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Collapse from "@material-ui/core/Collapse";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import { red } from "@material-ui/core/colors";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ShareIcon from "@material-ui/icons/Share";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import { Grid } from "@material-ui/core";
import pic1 from "../../../customerPic/customer-1.png";
import pic2 from "../../../customerPic/customer-2.png";
import pic3 from "../../../customerPic/customer-3.png";

const useStyles = makeStyles((theme) => ({
	root: {
		maxWidth: 345,
	},

	gridRoot: {
		flexGrow: 1,
	},
	media: {
		height: 0,
		paddingTop: "56.25%", // 16:9
	},
}));

export default function ClientsFeedback() {
	const classes = useStyles();

	return (
		<div style={{ marginTop: "50px" }}>
			<Typography variant="h4" align="center">
				Clients Feedback
			</Typography>
			<Grid
				container
				spacing={1}
				direction="row"
				justify="center"
				alignItems="center"
			>
				<Grid item xs={4} sm={4} lg={4} md={4}>
					<Card className={classes.root}>
						<CardHeader
							avatar={
								<Avatar
									aria-label="recipe"
									className={classes.avatar}
									src={pic1}
								></Avatar>
							}
							title="Shrimp and Chorizo Paella"
							subheader="September 14, 2016"
						/>

						<CardContent>
							<Typography variant="body2" color="textSecondary" component="p">
								This impressive paella is a perfect party dish and a fun meal to
								cook together with your guests. Add 1 cup of frozen peas along
								with the mussels, if you like.
							</Typography>
						</CardContent>
					</Card>
				</Grid>
				<Grid item xs={4} sm={4} lg={4} md={4}>
					<Card className={classes.root}>
						<CardHeader
							avatar={
								<Avatar
									aria-label="recipe"
									className={classes.avatar}
									src={pic2}
								>
									R
								</Avatar>
							}
							title="Shrimp and Chorizo Paella"
							subheader="September 14, 2016"
						/>

						<CardContent>
							<Typography variant="body2" color="textSecondary" component="p">
								This impressive paella is a perfect party dish and a fun meal to
								cook together with your guests. Add 1 cup of frozen peas along
								with the mussels, if you like.
							</Typography>
						</CardContent>
					</Card>
				</Grid>
				<Grid item xs={4} sm={4} lg={4} md={4}>
					<Card className={classes.root}>
						<CardHeader
							avatar={
								<Avatar
									aria-label="recipe"
									className={classes.avatar}
									src={pic3}
								>
									R
								</Avatar>
							}
							title="Shrimp and Chorizo Paella"
							subheader="September 14, 2016"
						/>

						<CardContent>
							<Typography variant="body2" color="textSecondary" component="p">
								This impressive paella is a perfect party dish and a fun meal to
								cook together with your guests. Add 1 cup of frozen peas along
								with the mussels, if you like.
							</Typography>
						</CardContent>
					</Card>
				</Grid>
			</Grid>
		</div>
	);
}
