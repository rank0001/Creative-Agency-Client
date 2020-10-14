import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Order from "./Order/Order";
import Review from "./Review/Review";
import Sidebar from "./Sidebar/Sidebar";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";

import { Typography, Button } from "@material-ui/core";
import ServiceList from "./Service List/ServiceList";

const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1,
	},
}));

export default function Customer() {
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
						<Sidebar />
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
							<div style={{background:'whitesmoke'}}>
								<Route path="/customer/order" component={Order} />
								<Route path="/customer/review" component={Review} />
								<Route path="/customer/service" component={ServiceList} />
							</div>
						</Grid>
					</Switch>
				</Grid>
			</BrowserRouter>
		</div>
	);
}
