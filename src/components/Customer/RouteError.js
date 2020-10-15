import React from "react";
import { Typography } from "@material-ui/core";

export default function RouteError() {
	return (
		<div>
			<Typography align="center" variant="h4" style={{ marginTop: "100px" }}>
				You must login to visit this page
			</Typography>
		</div>
	);
}
