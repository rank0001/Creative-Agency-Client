import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import { connect } from "react-redux";

import { Typography, Button, TextField } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
	root: {
		"& > *": {
			margin: theme.spacing(1),
			width: "570px",
			height: "60px",
		},
	},
	links: {
		[theme.breakpoints.down("sm")]: {
			width: "350px",
		},
	},
}));

const Review = ({ user }) => {
	const history = useHistory();
	if (!user.isSignedIn) history.push("/error");
	const [userInfo, setUser] = useState({
		name: "",
		designation: "",
		description: "",
		img: "customer-2.png",
	});

	const [message, setMessage] = useState({
		error: "",
		success: "",
	});

	const handleSubmit = (e) => {
		e.preventDefault();
		if (userInfo.name && userInfo.designation && userInfo.description) {
			const newMessage = { ...message };

			const requestOptions = {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify(userInfo),
			};
			fetch(
				"https://safe-lake-59354.herokuapp.com/review",
				requestOptions
			).then((response) => {
				newMessage.success = "successfully submitted";
				setMessage(newMessage);
			});
		} else {
			const newMessage = { ...message };
			newMessage.error = "You must fill all the credentials";
			setMessage(newMessage);
		}
	};

	const handleBlur = (e) => {
		setMessage({ error: "", success: "" });
		const newUserInfo = { ...userInfo };
		newUserInfo[e.target.name] = e.target.value;
		setUser(newUserInfo);
	};

	const classes = useStyles();
	return (
		<div>
			<Typography variant="h5" style={{ fontWeight: "500" }}>
				Review
			</Typography>
			<form
				className={classes.root}
				noValidate
				autoComplete="off"
				onSubmit={handleSubmit}
			>
				<TextField
					id="outlined-basic"
					label="name"
					name="name"
					placeholder="enter name"
					variant="outlined"
					style={{ background: "white" }}
					onBlur={handleBlur}
					className={classes.links}
				/>
				<br />
				<br />
				<TextField
					id="outlined-basic"
					label="Designation"
					name="designation"
					placeholder="enter designation"
					variant="outlined"
					style={{ background: "white" }}
					onBlur={handleBlur}
					className={classes.links}
				/>

				<br />
				<br />
				<TextField
					style={{ background: "white" }}
					id="outlined-multiline-static"
					label="Description"
					name="description"
					placeholder="give description"
					multiline
					rows={4}
					className={classes.links}
					variant="outlined"
					onBlur={handleBlur}
				/>

				<br />
				<Button
					style={{
						background: "black",
						color: "white",
						width: "284px",
						marginTop: "60px",
					}}
					variant="contained"
					type="submit"
				>
					Submit
				</Button>
			</form>
			<Typography style={{ color: "red" }} variant="h6" align="left">
				{message.error}
			</Typography>

			<Typography style={{ color: "green" }} variant="h6" align="left">
				{message.success}
			</Typography>
		</div>
	);
};
const mapStateToProps = (state) => {
	return { user: state.user };
};
export default connect(mapStateToProps)(Review);
