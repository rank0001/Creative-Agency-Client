import React from "react";
import Link from "@material-ui/core/Link";
import { useHistory } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import CloudUploadIcon from '@material-ui/icons/CloudUpload';

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

export default function Order() {
	const classes = useStyles();
	return (
		<div>

			<form
				className={classes.root}
				noValidate
				autoComplete="off"
				onSubmit={(e) => e.preventDefault()}
			>
				<TextField
					id="outlined-basic"
					label="Outlined"
					variant="outlined"
					style={{ background: "white" }}
				/>
				<br />
				<br />
				<TextField
					id="outlined-basic"
					label="Outlined"
					variant="outlined"
					style={{ background: "white" }}
				/>

				<br />
				<br />

				<TextField
					id="outlined-basic"
					label="Outlined"
					variant="outlined"
					style={{ background: "white" }}
				/>

				<br />
				<br />
				<TextField
					style={{ background: "white" }}
					id="outlined-multiline-static"
					label="Multiline"
					multiline
					rows={4}
					variant="outlined"
				/>
				<br />
				<br />

				<TextField
					id="outlined-basic"
					label="Outlined"
					variant="outlined"
					style={{ background: "white", width: "284px", marginTop: "50px" }}
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
					<Button variant="raised" component="span"  style={{
						background: '#DEFFED',
						color: "green",
						width: "284px",
						marginTop: "50px",
                        height:'50px'
					}}
                    startIcon={<CloudUploadIcon/>}
                    >
						Upload Project File
					</Button>
				</label>
                <br/>
                <Button
						style={{ background: "black", color: "white",width:'284px'}}
						variant="contained"
					>
						Send
					</Button>
			</form>
		</div>
	);
}
