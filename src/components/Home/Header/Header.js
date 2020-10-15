import React from "react";
import Navbar from "./Navbar";
import TopSection from "./TopSection";

export default function Header() {
	return (
		<div
			style={{
				backgroundColor: "#FBD062",
				transform: "skew(0deg,-7deg)",
				marginTop: "-200px",
				padding: "200px 0",
				width: "100%",
			}}
		>
			<div style={{ transform: "skew(0deg,7deg)" }}>
				<Navbar />
				<TopSection />
			</div>
		</div>
	);
}
