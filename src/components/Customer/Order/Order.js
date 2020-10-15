import React, { useState } from "react";
import Link from "@material-ui/core/Link";
import { useHistory } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import { connect } from "react-redux";
import CloudUploadIcon from "@material-ui/icons/CloudUpload";
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
			width:'350px'
		},
	},
}));

const Order = ({ location, user }) => {
	const history = useHistory();
	const [userInfo, setUser] = useState({
		name: user.name,
		email: user.email,
		service: "",
		details: "",
		price: "",
		status: "done",
		img: "service4.png",
	});

	const [message, setMessage] = React.useState({
		error: "",
		success: "",
	});

	const classes = useStyles();

	let title = "";

	if (location.state) {
		title = location.state.data.title;
		if (userInfo.service == "") {
			const newUserInfo = { ...userInfo };
			newUserInfo.service = title;
			setUser(newUserInfo);
		}
	}

	const handleBlur = (e) => {
		setMessage({ error: "", success: "" });
		const newUserInfo = { ...userInfo };
		newUserInfo[e.target.name] = e.target.value;
		setUser(newUserInfo);
	};

	const handleSubmit = (e) => {
		e.preventDefault();

		if (
			userInfo.name &&
			userInfo.email &&
			userInfo.service &&
			userInfo.details &&
			userInfo.price
		) {
			const newMessage = { ...message };

			const requestOptions = {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify(userInfo),
			};
			fetch("http://localhost:5000/users", requestOptions).then((response) => {
				newMessage.success = "successfully submitted";
				setMessage(newMessage);
				history.push("/customer/service");
			});
		} else {
			const newMessage = { ...message };
			newMessage.error = "You must fill all the credentials";
			setMessage(newMessage);
		}
	};

	return (
		<div>
			<form
				className={classes.root}
				noValidate
				autoComplete="off"
				onSubmit={handleSubmit}
			>
				<TextField
					id="outlined-basic"
					label="Name"
					variant="outlined"
					name="name"
					className={classes.links}
					value={user.name}
					onBlur={handleBlur}
					placeholder="enter your name"
					style={{ background: "whitesmoke" }}
				/>
				<br />
				<br />
				<TextField
					id="outlined-basic"
					label="Email"
					name="email"
					value={user.email}
					onBlur={handleBlur}
					placeholder="enter email"
					variant="outlined"
					className={classes.links}
					style={{  background: "whitesmoke" }}
				/>

				<br />
				<br />

				<TextField
					id="outlined-basic"
					label="Service"
					name="service"
					onBlur={handleBlur}
					variant="outlined"
					className={classes.links}
					style={{ background: "whitesmoke" }}
				/>

				<br />
				<br />
				<TextField
					style={{ background: "white" }}
					id="outlined-multiline-static"
					label="Details"
					name="details"
					placeholder="enter project details"
					onBlur={handleBlur}
					multiline
					rows={4}
					className={classes.links}
					variant="outlined"
				/>
				<br />
				<br />

				<TextField
					id="outlined-basic"
					label="Price"
					name="price"
					onBlur={handleBlur}
					placeholder="enter price"
					variant="outlined"
					className={classes.links}
					style={{ background: "whitesmoke", width: "284px", marginTop: "50px" }}
				/>

				<Button
					style={{
						background: "black",
						color: "white",
						width: "284px",
						marginTop: "50px",
					}}
					variant="contained"
					type="submit"
				>
					Send
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
export default connect(mapStateToProps)(Order);
