import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import { Typography, Button } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1,
	},
	textRoot: {
		"& > *": {
			margin: theme.spacing(1),
			width: "55ch",
		},
	},
}));

export default function Footer() {
	const classes = useStyles();

	return (
		<div
			className={classes.root}
			style={{ marginTop: "30px", background: "#FBD062" }}
		>
			<Grid container spacing={1} justify="center" alignItems="center">
				<Grid item xs={5} sm={5}>
					<Typography variant="h4">
						Let us Handle Your <br /> Project Professionally
					</Typography>

					<Typography variant="h6">
						With well written codes,we build amazing apps for all <br />
						platforms,mobile and web apps in general
					</Typography>
				</Grid>

				<Grid item xs={5} sm={5} style={{ marginTop: "65px" }}>
					<form className={classes.textRoot} noValidate autoComplete="off">
						<TextField
							id="outlined-basic"
							label="Outlined"
							variant="outlined"
							style={{ background: "white" }}
						/>
						<TextField
							id="outlined-basic"
							label="Outlined"
							variant="outlined"
							style={{ background: "white" }}
						/>
						<TextField
							style={{ background: "white" }}
							id="outlined-multiline-static"
							label="Multiline"
							multiline
							rows={4}
							variant="outlined"
						/>
					</form>
					<Button
						style={{ background: "black", color: "white" }}
						variant="contained"
					>
						Send
					</Button>
				</Grid>
			</Grid>
			<Typography align="center">
				Copyright Orange labs {new Date().getFullYear()}
			</Typography>
		</div>
	);
}
