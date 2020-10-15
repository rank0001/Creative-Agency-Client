import React from "react";
import {
	CardContent,
	Typography,
	Grid,
	Card,
	Avatar,
	CardHeader,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
	root: {
		maxWidth: 445,
		maxHeight: 212,
		[theme.breakpoints.down("sm")]: {
			maxWidth: 345,
		},
	},
}));

const LoadClientFeedback = ({ data }) => {
	const classes = useStyles();
	return (
		<Grid item xs={12} sm={6} lg={4} md={4}>
			<Card className={classes.root}>
				<CardHeader
					avatar={
						<Avatar
							aria-label="recipe"
							src={require(`../../../customerPic/${data.img}`)}
						>
							R
						</Avatar>
					}
					title={data.name}
					subheader={data.designation}
				/>

				<CardContent>
					<Typography variant="body2" color="textSecondary" component="p">
						{data.description}
					</Typography>
				</CardContent>
			</Card>
		</Grid>
	);
};

export default LoadClientFeedback;
