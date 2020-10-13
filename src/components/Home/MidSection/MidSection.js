import React from "react";
import CarouselPart from "./CarouselPart";
import ClientsFeedback from "./ClientsFeedback";
import Logos from "./Logos";
import Services from "./Services";

export default function MidSection() {
	return (
		<div style={{ marginTop: "100px" }}>
			<Logos />
			<Services />
			<CarouselPart />
			<ClientsFeedback />
		</div>
	);
}
