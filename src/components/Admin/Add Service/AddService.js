import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import CloudUploadIcon from "@material-ui/icons/CloudUpload";
import { connect } from "react-redux";
import { Typography, Button, TextField } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
	root: {
		"& > *": {
			margin: theme.spacing(1),
			width: "450px",
			height: "60px",
		},
	},
	links: {
		[theme.breakpoints.down("sm")]: {
			width: "350px",
		},
	},

	btn: {
		marginTop: "40px",
		[theme.breakpoints.down("md")]: {
			marginTop: "70px",
		},
	},
}));

const AddService = ({ user }) => {
	const history = useHistory();
	if (!user.isSignedIn) history.push("/admin/error");
	const [userInfo, setUser] = useState({
		title: "",
		description: "",
		img: "service5.png",
	});

	const [message, setMessage] = useState({
		error: "",
		success: "",
	});

	const handleSubmit = (e) => {
		e.preventDefault();
		if (userInfo.title && userInfo.description) {
			const newMessage = { ...message };

			const requestOptions = {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify(userInfo),
			};
			fetch("http://localhost:5000/addService", requestOptions).then(
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
			<form
				className={classes.root}
				noValidate
				autoComplete="off"
				onSubmit={handleSubmit}
			>
				<TextField
					id="outlined-basic"
					label="title"
					name="title"
					placeholder="enter title"
					variant="outlined"
					style={{ background: "white" }}
					onBlur={handleBlur}
					className={classes.links}
				/>
				<input
					accept="image/*"
					className={classes.input}
					style={{ display: "none" }}
					id="raised-button-file"
					multiple
					type="file"
				/>
				<label htmlFor="raised-button-file">
					<Button
						variant="raised"
						component="span"
						style={{ background: "#DEFFED", height: "40px", color: "green" }}
						startIcon={<CloudUploadIcon />}
					>
						Upload Image
					</Button>
				</label>

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
					variant="outlined"
					onBlur={handleBlur}
					className={classes.links}
				/>

				<Button
					style={{
						background: "green",
						color: "white",
						width: "208px",
						height: "37px",
					}}
					className={classes.btn}
					variant="contained"
					type="submit"
				>
					Submit
				</Button>
			</form>
			<Typography
				style={{ color: "red", marginTop: "40px" }}
				variant="h6"
				align="left"
			>
				{message.error}
			</Typography>

			<Typography
				style={{ color: "green", marginTop: "40px" }}
				variant="h6"
				align="left"
			>
				{message.success}
			</Typography>
		</div>
	);
};
const mapStateToProps = (state) => {
	return { user: state.user };
};
export default connect(mapStateToProps)(AddService);
