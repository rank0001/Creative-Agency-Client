import React, { useState } from "react";
import Link from "@material-ui/core/Link";
import { useHistory } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
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
}));

export default function Review() {
	const history = useHistory();
	const [userInfo, setUser] = useState({
		name: "",
		designation: "",
		description: "",
        img:'customer-2.png'
	});

	const [message, setMessage] = useState({
		error: "",
		success: "",
	});

	const handleSubmit = (e) => {
        //history.push('/');
        console.log(userInfo);
		e.preventDefault();
		if (userInfo.name && userInfo.designation && userInfo.description) {
			const newMessage = { ...message };

			const requestOptions = {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify(userInfo),
			};
			fetch("http://localhost:5000/review", requestOptions).then((response) => {
				newMessage.success = "successfully submitted";
				setMessage(newMessage);
				//history.push("/");
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
			<form
				className={classes.root}
				noValidate
				autoComplete="off"
				onSubmit={handleSubmit}
			>
				<TextField
					id="outlined-basic"
					label="name"
                    name='name'
					placeholder="enter name"
					variant="outlined"
					style={{ background: "white" }}
					onBlur={handleBlur}
				/>
				<br />
				<br />
				<TextField
					id="outlined-basic"
					label="Designation"
                    name = 'designation'
					placeholder="enter designation"
					variant="outlined"
					style={{ background: "white" }}
					onBlur={handleBlur}
				/>

				<br />
				<br />
				<TextField
					style={{ background: "white" }}
					id="outlined-multiline-static"
					label="Description"
                    name ='description'
					placeholder="give description"
					multiline
					rows={4}
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
					Send
				</Button>
			</form>
			<Typography style={{ color: "red" }} variant="h6" align="center">
				{message.error}
			</Typography>

			<Typography style={{ color: "green" }} variant="h6" align="center">
				{message.success}
			</Typography>
		</div>
	);
}
