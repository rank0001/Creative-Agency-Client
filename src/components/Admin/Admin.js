import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
//import Order from "./Order/Order";
//import Review from "./Review/Review";
//import Sidebar from "./Sidebar/Sidebar";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import { Typography, Button } from "@material-ui/core";
import Sidenav from "./SideNav/Sidenav";
import Service from "./Services/Service";
import MakeAdmin from "./Make Admin/MakeAdmin";
import AddService from './Add Service/AddService';
//import ServiceList from "./Service List/ServiceList";
//import Home from "../Home/Home";

const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1,
	},
}));

export default function Admin() {
	const classes = useStyles();
	return (
		<div>
			<BrowserRouter>
				<Grid
					className={classes.root}
					container
					spacing={2}
					style={{ marginTop: "10px" }}
				>
					<Grid
						item
						lg={2}
						md={2}
						sm
						xs
						style={{
							marginLeft: "20px",
							border: "1px solid black",
						}}
					>
						<Sidenav/>
					</Grid>

					<Switch>
						<Grid
							item
							lg={8}
							md={6}
							sm={12}
							xs={12}
							style={{
								marginLeft: "50px",
								border: "2px solid red",
								marginTop: "30px",
							}}
						>

                        <Typography>Logged in as blab </Typography>
							<div style={{}}>
								<Route path="/admin/service" component={Service} />
								<Route path="/admin/addAdmin" component={MakeAdmin} />
								<Route path="/admin/addService" component={AddService} />
                                
							</div>
						</Grid>
					</Switch>
				</Grid>
			</BrowserRouter>
		</div>
	);
}
