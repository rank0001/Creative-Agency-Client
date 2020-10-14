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
	const classes = useStyles();
    return (
    
		<Grid item xs={4} sm={4} lg={6} md={6} >
			<Card className={classes.root}>
				<CardHeader
					avatar={
						<Avatar aria-label="recipe" src={require(`../../../icons/${data.img}`)}>	
						</Avatar>
					}
				/>

				<Button variant="outlined" color="primary">
					{data.status}
				</Button>

				<CardContent>
					<Typography variant="h6">{data.service}</Typography>
					<Typography variant="body2" color="textSecondary" component="p">
						{data.details}
					</Typography>
				</CardContent>
			</Card>
		</Grid>
	)
};

export default ServiceDataLoad;
