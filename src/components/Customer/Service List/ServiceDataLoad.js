import React from "react";
import {
	CardContent,
	Typography,
	Grid,
	Card,
	Avatar,
	CardHeader,
	Button,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
	root: {
		maxWidth: 345,
	},
}));

const ServiceDataLoad = ({ data }) => {
	let color = "";
	if (data.status == "ongoing") color = "yellow";
	else if (data.status == "pending") color = "#FFE3E3";
	else color = "#C6FFE0";

	const classes = useStyles();
	return (
		<Grid item xs={12} sm={12} lg={6} md={6}>
			<Card className={classes.root}>
				<Grid container spacing={4}>
					<Grid item xs sm>
						<CardHeader
							avatar={
								<Avatar
									
									src={require(`../../../icons/${data.img}`)}
								></Avatar>
							}
						></CardHeader>
					</Grid>
					<Grid item xs sm>
						<Button
							variant="outlined"
							color="primary"
							style={{ background: `${color}`, marginTop: "10px" }}
						>
							{data.status}
						</Button>
					</Grid>
				</Grid>

				<CardContent>
					<Typography variant="h6" style={{ fontWeight: "600" }}>
						{data.service}
					</Typography>
					<Typography variant="body2" color="textSecondary" component="p">
						{data.details}
					</Typography>
				</CardContent>
			</Card>
		</Grid>
	);
};

export default ServiceDataLoad;
