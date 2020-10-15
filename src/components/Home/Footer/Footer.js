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
			width: "50ch",
		},
	
		
	},
	text: {
		 	width:'630px',
			[theme.breakpoints.down("xs")]: {
			
			width:'450px'
		},
			[theme.breakpoints.down("sm")]: {
			
			width:'430px'
		},
			[theme.breakpoints.down("md")]: {
			
			width:'520px'
		},
	},
}));

export default function Footer() {
	const classes = useStyles();

	return (
		<div
			className={classes.root}
			style={{ marginTop: "100px", background: "#FBD062" }}
		>
			<Grid container spacing={1} justify="center">
				<Grid item xs={5} sm={5}>
					<Typography
						variant="h4"
						style={{ fontWeight: "600", marginTop: "65px" }}
					>
						Let us Handle Your <br /> Project Professionally
					</Typography>

					<Typography
						variant="body1"
						style={{ fontWeight: "400", marginTop: "30px" }}
					>
						With well written codes,we build amazing apps for all <br />
						platforms,mobile and web apps in general
					</Typography>
				</Grid>

				<Grid item xs={12} sm={9} lg={5} md={7} style={{ marginTop: "65px" }}>
					<form className={classes.textRoot} noValidate autoComplete="off">
						<TextField
							id="outlined-basic"
							label="Your Email Address"
							variant="outlined"
							style={{ background: "white" }}
							className={classes.text}
						/>
						<TextField
							id="outlined-basic"
							label="Your name /company's name"
							variant="outlined"
							style={{ background: "white" }}
							className={classes.text}
						/>
						<TextField
							style={{ background: "white" }}
							id="outlined-multiline-static"
							label="Your Message"
							multiline
							rows={4}
							variant="outlined"
							className={classes.text}
						/>
					</form>
					<Button
						style={{
							background: "black",
							color: "white",
							width: "170px",
							height: "45px",
							marginLeft: "5px",
						}}
						variant="contained"
					>
						Send
					</Button>
				</Grid>
			</Grid>
			<Typography align="center" style={{ marginTop: "25px", padding: "30px" }}>
				Copyright Orange labs {new Date().getFullYear()}
			</Typography>
		</div>
	);
}
