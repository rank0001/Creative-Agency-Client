import React from "react";
import Header from "./Header/Header";
import Navbar from "./Header/Navbar";
import TopSection from "./Header/TopSection";
import Logos from "./MidSection/Logos";
import MidSection from "./MidSection/MidSection";
import Footer from "./Footer/Footer";
export default function Home() {
	return (
		<div>
			<Header />
			<MidSection />
			<Footer />
		</div>
	);
}
