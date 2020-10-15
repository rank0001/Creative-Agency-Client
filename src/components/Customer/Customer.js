import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Order from "./Order/Order";
import Review from "./Review/Review";
import Sidebar from "./Sidebar/Sidebar";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import { Typography, Button, Avatar } from "@material-ui/core";
import ServiceList from "./Service List/ServiceList";
import Home from "../Home/Home";
import test from '../../logos/logo.png';
import { connect } from "react-redux";


const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1,
	},
}));

const Customer = ({user}) =>  {
	const classes = useStyles();
	return (
		<div >
			<BrowserRouter>
				<Grid
					className={classes.root}
					container
					style={{ marginTop: "10px" }}
				>
					<Grid
						item
						lg={2}
						md={2}
						sm={9}
						xs={9}
						style={{
							marginLeft: "20px",
						
						}}
					>
						<Sidebar />
					</Grid>

					<Switch>
						<Grid
							item
							lg={9}
							md={6}
							sm={12}
							xs={12}
							justify='center'
							style={{
								marginLeft: "50px",
								
								marginTop: "20px",
							}}
						>

                        <Typography >
						<Avatar style={{display:'inline-block',}}   src={user.photo}>	
						</Avatar> Logged in as {user.name} </Typography>
							<div >
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
const mapStateToProps = (state) => {
	return { user: state.user };
};
export default connect(mapStateToProps)(Customer);
