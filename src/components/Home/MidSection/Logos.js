import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid } from "@material-ui/core";
import google from "../../../logos/google.png";
import slack from "../../../logos/slack.png";
import netflix from "../../../logos/netflix.png";
import uber from "../../../logos/uber.png";
import airbnb from "../../../logos/airbnb.png";
const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1,
	},
}));
export default function Logos() {
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
				<Grid item xs={6} sm={4} lg={2} md={2}>
					<img
						src={slack}
						alt="image"
						style={{ width: "140px", height: "36px" }}
					/>
				</Grid>

				<Grid item xs={6} sm={4} lg={2} md={2}>
					<img
						src={google}
						alt="image"
						style={{ width: "140px", height: "36px" }}
					/>
				</Grid>

				<Grid item xs={6} sm={4} lg={2} md={2}>
					<img
						src={uber}
						alt="image"
						style={{ width: "140px", height: "36px" }}
					/>
				</Grid>

				<Grid item xs={6} sm={4} lg={2} md={2}>
					<img
						src={netflix}
						alt="image"
						style={{ width: "140px", height: "36px" }}
					/>
				</Grid>

				<Grid item xs={6} sm={4} lg={2} md={2}>
					<img
						src={airbnb}
						alt="image"
						style={{ width: "140px", height: "36px" }}
					/>
				</Grid>
			</Grid>
		</div>
	);
}
