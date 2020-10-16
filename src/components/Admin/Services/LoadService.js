import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

const useStyles = makeStyles((theme) => ({
	table: {
		minWidth: 500,
	},
	formControl: {
		margin: theme.spacing(1),
		minWidth: 120,
	},
	selectEmpty: {
		marginTop: theme.spacing(2),
	},
}));

export default function LoadService({ data, click }) {
	const classes = useStyles();

	const handleChange = (data, event) => {
		const newStatus = event.target.value;
		const value = {
			status: newStatus,
		};

		const requestOptions = {
			method: "PATCH",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify(value),
		};
		fetch(
			`https://safe-lake-59354.herokuapp.com/updateStatus/${data._id}`,
			requestOptions
		).then((response) => {
			click();
		});
	};

	return (
		<TableContainer component={Paper}>
			<Table className={classes.table} aria-label="simple table">
				<TableHead>
					<TableRow style={{ background: "whitesmoke" }}>
						<TableCell>Name</TableCell>
						<TableCell align="center">Email Id</TableCell>
						<TableCell align="right">Service&nbsp;</TableCell>
						<TableCell align="center">Project Details&nbsp;</TableCell>
						<TableCell align="right">Status&nbsp;</TableCell>
					</TableRow>
				</TableHead>
				<TableBody>
					{data.map((data) => (
						<TableRow key={Math.random()}>
							<TableCell component="th" scope="row">
								{data.name}
							</TableCell>
							<TableCell align="right">{data.email}</TableCell>
							<TableCell align="right">{data.service}</TableCell>
							<TableCell
								align="center"
								style={{
									maxWidth: "150px",
									overflowWrap: "break-word",
								}}
							>
								{data.details}
							</TableCell>
							<TableCell align="right">
								<FormControl className={classes.formControl}>
									<InputLabel id="demo-simple-select-label">Status</InputLabel>
									{data.status == "done" ? (
										<Select
											labelId="demo-simple-select-label"
											id="demo-simple-select"
											value={data.status}
											style={{ color: "green" }}
											label="Status"
											onChange={(e) => handleChange(data, e)}
										>
											<MenuItem value="ongoing">Ongoing</MenuItem>
											<MenuItem value="pending">Pending</MenuItem>
											<MenuItem value="done">Done</MenuItem>
										</Select>
									) : (
										<Select
											labelId="demo-simple-select-label"
											id="demo-simple-select"
											value={data.status}
											style={{ color: "red" }}
											label="Status"
											onChange={(e) => handleChange(data, e)}
										>
											<MenuItem value="ongoing">Ongoing</MenuItem>
											<MenuItem value="pending">Pending</MenuItem>
											<MenuItem value="done">Done</MenuItem>
										</Select>
									)}
								</FormControl>
							</TableCell>
						</TableRow>
					))}
				</TableBody>
			</Table>
		</TableContainer>
	);
}
