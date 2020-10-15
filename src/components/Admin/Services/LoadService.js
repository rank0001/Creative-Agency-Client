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

	const [age, setAge] = React.useState(3);

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
			`http://localhost:5000/updateStatus/${data._id}`,
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
						<TableCell align="right">Project Details&nbsp;</TableCell>
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
							<TableCell align="right">{data.details}</TableCell>
							<TableCell align="right">
								<FormControl className={classes.formControl}>
									<InputLabel id="demo-simple-select-label">Status</InputLabel>
									<Select
										labelId="demo-simple-select-label"
										id="demo-simple-select"
										value={data.status}
										label="Status"
										onChange={(e) => handleChange(data, e)}
									>
										<MenuItem value="">
											<em>None</em>
										</MenuItem>

										<MenuItem value="ongoing">Ongoing</MenuItem>
										<MenuItem value="pending">Pending</MenuItem>
										<MenuItem value="done">Done</MenuItem>
									</Select>
								</FormControl>
							</TableCell>
						</TableRow>
					))}
				</TableBody>
			</Table>
		</TableContainer>
	);
}
