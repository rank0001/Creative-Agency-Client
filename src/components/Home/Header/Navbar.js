import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Link from "@material-ui/core/Link";
import logo from "../../../logos/logo.png";
import { useHistory } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
	//const classes = useStyles();
	const history = useHistory();

	return (
		<nav className="navbar navbar-expand-md navbar-light">
			<a className="navbar-brand  navlogo" href="#">
				<img src={logo} width="150" height="47" alt="" />
			</a>

			<div className="collapse navbar-collapse" id="navbarNav">
				<ul className="navbar-nav ml-auto">
					<li className="nav-item active">
						<a className="nav-link mr-5 " href="/">
							Home <span className="sr-only">(current)</span>
						</a>
					</li>
					<li className="nav-item">
						<a className="nav-link mr-5" href="#">
							Our Portfolio
						</a>
					</li>

					<li className="nav-item">
						<a className="nav-link mr-5" href="#">
							Our Team
						</a>
					</li>

					<li className="nav-item">
						<a className="nav-link mr-5" href="#">
							Contact us
						</a>
					</li>
				</ul>
			</div>
			<Button
				style={{
					background: "black",
					color: "white",
					width: "134px",
					height: "45px",
				}}
				variant="contained"
				onClick={() => history.push("/login")}
			>
				Login
			</Button>
		</nav>
	);
}
