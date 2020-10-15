import React from "react";
import { Typography, Grid, Card } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { useHistory } from "react-router-dom";
import { connect } from "react-redux";
const useStyles = makeStyles((theme) => ({
	media: {
		height: "200px",
		paddingTop: "56.25%", // 16:9
	},
	cardRoot: {
		width: "300px",
		cursor: "pointer",
	},
	animation: {
		"&:hover": {
			background: "whitesmoke",
			transform: "scale(1.3)",
			transition: "all .2s ease-in-out",
		},
	},
}));

const LoadServiceFromDatabase = ({ data, ind, user }) => {
	const history = useHistory();
	const handleEventClick = (data) => {
		if (!user.isSignedIn) {
			const location = {
				pathname: "/login",
				state: { data },
			};

			history.push(location);
		} else {
			const location = {
				pathname: "/customer/order",
				state: { data },
			};
			history.push(location);
		}
	};

	const classes = useStyles();
	return (
		<Grid
			item
			xs={12}
			sm={6}
			lg={4}
			md={4}
			align="center"
			className={classes.animation}
			onClick={() => handleEventClick(data)}
			style={{ cursor: "pointer" }}
		>
			{ind === 1 || (ind - 1) % 3 === 0 ? (
				<Card className={classes.root}>
					<img
						src={require(`../../../icons/${data.img}`)}
						style={{ width: "74px", height: "74px" }}
					/>
					<Typography variant="h5">{data.title}</Typography>
					<Typography variant="h6">{data.description}</Typography>
				</Card>
			) : (
				<div>
					<img
						src={require(`../../../icons/${data.img}`)}
						style={{ width: "74px", height: "74px" }}
					/>
					<Typography variant="h5">{data.title}</Typography>
					<Typography variant="h6">{data.description}</Typography>
				</div>
			)}
		</Grid>
	);
};

const mapStateToProps = (state) => {
	return { user: state.user };
};
export default connect(mapStateToProps)(LoadServiceFromDatabase);
