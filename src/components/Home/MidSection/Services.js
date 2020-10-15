import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Typography, Grid } from "@material-ui/core";
import LoadServiceFromDatabase from "./LoadServiceFromDatabase";
const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1,
	},
	loader: {
		width: "100%",
		"& > * + *": {
			marginTop: theme.spacing(2),
		},
	},
}));

export default function Services() {
	const classes = useStyles();

	const [serviceState, setService] = React.useState([]);

	React.useEffect(() => {
		fetch("http://localhost:5000/")
			.then((response) => response.json())
			.then((data) => {
				setService(data);
			});
	}, []);

	return (
		<div className={classes.root} style={{ marginTop: "90px" }}>
			<Typography variant="h4" align="center" style={{ marginBottom: "60px" }}>
				Provide Awesome <span style={{ color: "#82B763" }}>Services</span>
			</Typography>
			<Grid
				container
				spacing={1}
				direction="row"
				justify="center"
				alignItems="center"
			>
				{serviceState.map((service, index) => (
					<LoadServiceFromDatabase data={service} ind={index} key={index} />
				))}
			</Grid>
		</div>
	);
}
