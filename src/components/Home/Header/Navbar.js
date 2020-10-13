import React from "react";
import { makeStyles } from "@material-ui/core/styles";

import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

import Link from "@material-ui/core/Link";
import logo from "../../../logos/logo.png";


const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1,
	},
	menuButton: {
		marginRight: theme.spacing(2),
	},
	title: {
		flexGrow: 1,
	},
	links: {
		"& > * + *": {
			marginLeft: theme.spacing(10),
		},
		[theme.breakpoints.between("xs", "sm")]: {
			color: "red",
			marginRight: "auto !important",
		},
	},
}));

export default function Navbar() {
	const classes = useStyles();

	return (
		<div className={classes.root}>
			<Toolbar>
				<img
					src={logo}
					alt="logo"
					style={{ maxWidth: 160, marginLeft: "60px" }}
				/>

				<Typography className={classes.links} style={{ marginLeft: "auto" }}>
					<Link href="/" color="inherit">
						Home
					</Link>
					<Link href="/" color="inherit">
						Home
					</Link>
					<Link href="/" color="inherit">
						Home
					</Link>
					<Link href="/" color="inherit">
						Home
					</Link>

					<Button
						style={{ marginRight: "10px", background: "black", color: "white" }}
						variant="contained"
					>
						Default
					</Button>
				</Typography>
			</Toolbar>
		</div>
	);
}
