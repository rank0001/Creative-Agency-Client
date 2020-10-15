import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import { Typography, Button,Avatar} from "@material-ui/core";
import Sidenav from "./SideNav/Sidenav";
import Service from "./Services/Service";
import MakeAdmin from "./Make Admin/MakeAdmin";
import AddService from "./Add Service/AddService";
import { connect } from "react-redux";

const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1,
	},
}));

const Admin = ({ user }) => {
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
						sm={9}
						xs={9}
						
						style={{
							marginLeft: "20px",
						}}
					>
						<Sidenav />
					</Grid>

					<Switch>
						<Grid
							item
							lg={9}
							md={6}
							sm={12}
							xs={12}
							style={{
								marginLeft: "50px",
								marginTop: "20px",
							}}
						>
						 <Typography >
						<Avatar style={{display:'inline-block',}}   src={user.photo}>	
						</Avatar> Logged in as {user.name} </Typography>
							<div >
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
};
const mapStateToProps = (state) => {
	return { user: state.user };
};
export default connect(mapStateToProps)(Admin);
