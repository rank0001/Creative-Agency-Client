import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import { connect } from "react-redux";

import { Typography, Button, TextField } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
	root: {
		"& > *": {
			margin: theme.spacing(1),
			width: "450px",
		},
	},
	links: {
		[theme.breakpoints.down("sm")]: {
			width: "350px",
		},
	},
	btn: {
		[theme.breakpoints.down("xs")]: {
			marginTop: "30px",
		},
	},
}));

const MakeAdmin = ({ user }) => {
	const history = useHistory();
	if (!user.isSignedIn) history.push("/admin/error");

	const [userInfo, setUser] = useState({
		email: "",
	});

	const [message, setMessage] = useState({
		error: "",
		success: "",
	});

	const handleSubmit = (e) => {
		e.preventDefault();
		if (userInfo.email) {
			const newMessage = { ...message };

			const requestOptions = {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify(userInfo),
			};
			fetch("http://localhost:5000/addAdmin", requestOptions).then(
				(response) => {
					newMessage.success = "successfully submitted";
					setMessage(newMessage);
				}
			);
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
			<Typography
				variant="h5"
				style={{ fontWeight: "600", marginLeft: "10px" }}
			>
				Email
			</Typography>
			<form
				className={classes.root}
				noValidate
				autoComplete="off"
				onSubmit={handleSubmit}
			>
				<TextField
					id="outlined-basic"
					label="Email"
					name="email"
					placeholder="enter email"
					variant="outlined"
					style={{ background: "white", height: "40px" }}
					onBlur={handleBlur}
					className={classes.links}
				/>
				<Button
					style={{
						background: "green",
						color: "white",
						width: "158px",
						height: "55px",
					}}
					className={classes.btn}
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
export default connect(mapStateToProps)(MakeAdmin);
