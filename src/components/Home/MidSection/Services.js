import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Typography, Grid } from "@material-ui/core";
import service1 from "../../../icons/service1.png";
import service2 from "../../../icons/service2.png";
import service3 from "../../../icons/service3.png";
const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1,
	},
}));

export default function Services() {
	const classes = useStyles();

	return (
		<div className={classes.root} style={{ marginTop: "20px" }}>
			<Typography variant="h4" align="center" style={{ marginBottom: "20px" }}>
				Provide Awesome <span style={{ color: "#82B763" }}>Services</span>
			</Typography>
			<Grid
				container
				spacing={1}
				direction="row"
				justify="center"
				alignItems="center"
			>
				<Grid item xs={4} sm={4} align="center">
					<img src={service1} style={{ width: "74px", height: "74px" }} />
					<Typography variant="h5">Web & Mobile Design</Typography>
					<Typography variant="h6">
						{" "}
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate
						perspiciatis totam quibusdam eos culpa ipsum eius tempora nobis
						incidunt, aut eum quam quisquam? Corporis quaerat ipsa illo vero,
						voluptates harum?
					</Typography>
				</Grid>

				<Grid item xs={4} sm={4} align="center">
					<img src={service2} style={{ width: "74px", height: "74px" }} />
					<Typography variant="h5">Web & Mobile Design</Typography>
					<Typography variant="h6">
						{" "}
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate
						perspiciatis totam quibusdam eos culpa ipsum eius tempora nobis
						incidunt, aut eum quam quisquam? Corporis quaerat ipsa illo vero,
						voluptates harum?
					</Typography>
				</Grid>

				<Grid item xs={4} sm={4} align="center">
					<img src={service3} style={{ width: "74px", height: "74px" }} />
					<Typography variant="h5">Web & Mobile Design</Typography>
					<Typography variant="h6">
						{" "}
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate
						perspiciatis totam quibusdam eos culpa ipsum eius tempora nobis
						incidunt, aut eum quam quisquam? Corporis quaerat ipsa illo vero,
						voluptates harum?
					</Typography>
				</Grid>
			</Grid>
		</div>
	);
}
