import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import carousel1 from "../../../carouselImage/carousel-1.png";
import carousel2 from "../../../carouselImage/carousel-2.png";
import carousel3 from "../../../carouselImage/carousel-3.png";
import carousel4 from "../../../carouselImage/carousel-4.png";
import carousel5 from "../../../carouselImage/carousel-5.png";
import { Typography } from "@material-ui/core";

export default function CarouselPart() {
	const settings = {
		dots: true,
		infinite: true,
		speed: 500,
		slidesToShow: 3,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 1500,
		pauseOnHover: true,

     responsive: [
        
        {
          breakpoint: 1000,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            initialSlide: 2,
			padding: "40px"
          }
        },
        
      ]

	};

	return (
		<div style={{ background: "#111430", marginTop: "90px" }}>
			<Typography
				variant="h4"
				align="center"
				style={{ color: "white", padding: "30px" }}
			>
				Here are some of <span style={{ color: "#82B763" }}>
					Our Works
				</span> 
			</Typography>

			<Slider {...settings} style={{ padding: "40px"}}>
				<div>
					<img
						src={carousel1}
						style={{ width: "400.49px", height: "334.7px" }}
					/>
				</div>
				<div>
					<img
						src={carousel2}
						style={{ width: "400.49px", height: "334.7px" }}
					/>
				</div>
				<div>
					<img
						src={carousel3}
						style={{ width: "400.49px", height: "334.7px" }}
					/>
				</div>
				<div>
					<img
						src={carousel4}
						style={{ width: "400.49px", height: "334.7px" }}
					/>
				</div>
				<div>
					<img
						src={carousel5}
						style={{ width: "400.49px", height: "334.7px" }}
					/>
				</div>
			</Slider>
		</div>
	);
}
