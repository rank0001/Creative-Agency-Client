import React from "react";
import Link from "@material-ui/core/Link";
import { useHistory } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import logo from "../../../logos/logo.png";

import { Typography, Button } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1,
	},
	link: {
		marginLeft: "30px",
		lineHeight: "40px",
		marginTop: "10px",
	},
}));

export default function Sidenav() {
	const classes = useStyles();
	const history = useHistory();
	return (
		<div>
			<img src={logo} alt="" style={{ width:'150px',height:'47px',marginTop:'20px',marginLeft:'20px' }} />
			<br />
			<Link
				component="button"
				variant="body2"
			
				className={classes.link}
				onClick={() => history.push("/admin/service")}
			>
				Service List
			</Link>
			<br />
			<Link
				component="button"
				variant="body2"
				className={classes.link}
				onClick={() => history.push("/admin/addService")}
			
			>
				Add Service
			</Link>
			<br />
			<Link
				component="button"
				variant="body2"
				onClick={() => history.push("/admin/addAdmin")}
				
				className={classes.link}
			>
				Make Admin
			</Link>
		</div>
	);
}
