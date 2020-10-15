import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Collapse from "@material-ui/core/Collapse";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import { red } from "@material-ui/core/colors";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ShareIcon from "@material-ui/icons/Share";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import { Grid } from "@material-ui/core";
import pic1 from "../../../customerPic/customer-1.png";
import pic2 from "../../../customerPic/customer-2.png";
import pic3 from "../../../customerPic/customer-3.png";
import ServiceDataLoad from "./ServiceDataLoad";
import { connect } from "react-redux";

const useStyles = makeStyles((theme) => ({
	gridRoot: {
		flexGrow: 1,
	},
}));

const  ServiceList = ({user})=> {
	const classes = useStyles();
	const [serviceState, setService] = React.useState([]);

	React.useEffect(() => {
		fetch("http://localhost:5000/user?email=" + user.email)
			.then((response) => response.json())
			.then((data) => {
				setService(data);
				console.log(data);
			});
	}, []);

	return (
		<div style={{ marginTop: "50px" }} className={classes.gridRoot}>
			{serviceState.length?(
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
			):( 
        <Typography variant="h6">
          You need to add items
        </Typography>
      )}
		</div>
	);
}

const mapStateToProps = (state) => {
	return { user: state.user };
};
export default connect(mapStateToProps)(ServiceList);