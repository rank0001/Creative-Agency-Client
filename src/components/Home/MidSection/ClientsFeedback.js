import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import { Grid } from "@material-ui/core";

import LoadClientFeedback from "./LoadClientFeedback";

const useStyles = makeStyles((theme) => ({
	gridRoot: {
		flexGrow: 1,
	},
}));

export default function ClientsFeedback() {
	const classes = useStyles();

	const [feedbackState, setFeedback] = React.useState([]);

	React.useEffect(() => {
		fetch("https://safe-lake-59354.herokuapp.com/feedback")
			.then((response) => response.json())
			.then((data) => {
				setFeedback(data);
			});
	}, []);

	return (
		<div style={{ marginTop: "70px" }} className={classes.gridRoot}>
			<Typography variant="h4" align="center">
				Clients <span style={{ color: "#82B763" }}>Feedback</span>
			</Typography>
			<Grid
				container
				spacing={1}
				direction="row"
				justify="center"
				alignItems="center"
				style={{ marginTop: "40px", marginLeft: "40px" }}
			>
				{feedbackState.map((feedback, index) => (
					<LoadClientFeedback data={feedback} key={index} />
				))}
			</Grid>
		</div>
	);
}
