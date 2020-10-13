import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import { Typography, Button } from "@material-ui/core";
import frame from "../../../logos/frame.png";
const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1,
	},
}));

export default function TopSection() {
	const classes = useStyles();

	return (
		<div className={classes.root}>
			<Grid
				container
				spacing={1}
				direction="row"
				justify="center"
				alignItems="center"
			>
				<Grid item xs={5} sm={5}>
					<Typography variant="h4">
						Lets Grow Your <br /> Brand to the <br /> Next Level
					</Typography>
					<Typography variant="h6">
						Lorem ipsum dolor sit amet consectetur adipisicing elit. <br />
						Ratione, atque. Ab possimus alias debitis eum nulla hic <br />{" "}
						magnam maxime tempora fugiat
					</Typography>
					<Button
						style={{ background: "black", color: "white" }}
						variant="contained"
					>
						Default
					</Button>
				</Grid>

				<Grid item xs={5} sm={5} style={{ marginRight: "5px" }}>
					<img
						src={frame}
						alt="image"
						style={{ width: "100%", height: "auto" }}
					/>
				</Grid>
			</Grid>
		</div>
	);
}
