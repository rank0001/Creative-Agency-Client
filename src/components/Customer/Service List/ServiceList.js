import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import { Grid } from "@material-ui/core";
import ServiceDataLoad from "./ServiceDataLoad";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
	gridRoot: {
		flexGrow: 1,
	},
}));

const ServiceList = ({ user }) => {
	const history = useHistory();
	if (!user.isSignedIn) history.push("/error");

	const classes = useStyles();
	const [serviceState, setService] = React.useState([]);

	React.useEffect(() => {
		fetch("https://safe-lake-59354.herokuapp.com/user?email=" + user.email)
			.then((response) => response.json())
			.then((data) => {
				setService(data);
			});
	}, []);

	return (
		<div style={{ marginTop: "50px" }} className={classes.gridRoot}>
			<Typography variant="h5" style={{ fontWeight: "500" }}>
				Service List
			</Typography>
			{serviceState.length ? (
				<Grid
					container
					spacing={1}
					direction="row"
					justify="center"
					alignItems="center"
				>
					{serviceState.map((service, index) => (
						<ServiceDataLoad data={service} key={index} />
					))}
				</Grid>
			) : (
				<Typography variant="h6">You need to add items</Typography>
			)}
		</div>
	);
};

const mapStateToProps = (state) => {
	return { user: state.user };
};
export default connect(mapStateToProps)(ServiceList);
