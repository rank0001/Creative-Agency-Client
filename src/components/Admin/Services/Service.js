import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, LinearProgress } from "@material-ui/core";
import LoadService from "./LoadService";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
	gridRoot: {
		flexGrow: 1,
	},
	loader: {
		width: "100%",
		"& > * + *": {
			marginTop: theme.spacing(2),
		},
	},
}));

const Service = ({ user }) => {
	const classes = useStyles();
	const history = useHistory();
	if (!user.isSignedIn) history.push("/admin/error");

	const [serviceState, setService] = React.useState([]);

	const [count, setCount] = React.useState(0);

	React.useEffect(() => {
		fetch("http://localhost:5000/users")
			.then((response) => response.json())
			.then((data) => {
				setService(data);
			});
	}, [count]);

	const stateUpdate = () => {
		setCount((count) => count + 1);
	};

	return (
		<div style={{ marginTop: "50px" }} className={classes.gridRoot}>
			{serviceState.length ? (
				<Grid
					container
					spacing={1}
					direction="row"
					justify="center"
					alignItems="center"
				>
					<Grid item lg={12} md={12} sm={9} xs={9}>
						<LoadService data={serviceState} click={stateUpdate} />
					</Grid>
				</Grid>
			) : (
				<div className={classes.loader}>
					<LinearProgress />
					<LinearProgress color="secondary" />
				</div>
			)}
		</div>
	);
};

const mapStateToProps = (state) => {
	return { user: state.user };
};
export default connect(mapStateToProps)(Service);
