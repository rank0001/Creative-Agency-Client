import React from "react";
import { CardMedia, Typography, Grid, Card } from "@material-ui/core";
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
}));

//const color = ["#FBC02D", "#E64A19", "#009688", "#303F9F"];

const LoadServiceFromDatabase = ({ data, user }) => {
	//const position = color[Math.floor(Math.random() * Math.floor(4))]
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
		<Grid item xs={4} sm={4} align="center" 
        	onClick={() => handleEventClick(data)} style={{cursor:'pointer'}}>
			<img
				src={require(`../../../icons/${data.img}`)}
				style={{ width: "74px", height: "74px" }}
			/>
			<Typography variant="h5">{data.title}</Typography>
			<Typography variant="h6">{data.description}</Typography>
		</Grid>
	);
};

const mapStateToProps = (state) => {
	return { user: state.user };
};
export default connect(mapStateToProps)(LoadServiceFromDatabase);
