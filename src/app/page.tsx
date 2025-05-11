"use client";

import { useEffect, useState } from "react";
import Hero from "./components/Hero";
import Navigation from "./components/Navigation";

import AdamBackground from "@/assets/images/adam.jpg";
import UniverseBackground from "@/assets/images/universe.jpg";
import NasaBackground from "@/assets/images/nasa.jpg";
import NeomBackground from "@/assets/images/neom.jpg";

import Posts from "./components/posts/Posts";

const images = [
	AdamBackground.src,
	UniverseBackground.src,
	NasaBackground.src,
	NeomBackground.src,
];

export default function Home() {
	const [currentIndex, setCurrentIndex] = useState(0);
	const [previousIndex, setPreviousIndex] = useState(images.length - 1);
	const [showFirstLayer, setShowFirstLayer] = useState(true);

	useEffect(() => {
		const interval = setInterval(() => {
			const nextIndex = (currentIndex + 1) % images.length;

			setPreviousIndex(currentIndex); // the one fading out
			setCurrentIndex(nextIndex); // the one fading in
			setShowFirstLayer((prev) => !prev); // toggle which layer is on top
		}, 10000); // every 10s

		return () => clearInterval(interval);
	}, [currentIndex]);

	return (
		<div className="relative max-w-screen gap-16 overflow-hidden bg-black font-[family-name:var(--font-geist-sans)] selection:bg-yellow-400/30">
			{/* Section with Background */}
			<div className="relative min-h-screen">
				{/* Background Layer 1 */}
				<div
					className={`absolute inset-0 h-[100vh] bg-cover bg-center transition-opacity duration-1000 ease-in-out ${
						showFirstLayer ? "opacity-100" : "opacity-0"
					}`}
					style={{
						backgroundImage: `url(${images[showFirstLayer ? currentIndex : previousIndex]})`,
						filter: "blur(4px)",
					}}
				></div>

				{/* Background Layer 2 */}
				<div
					className={`absolute inset-0 h-[100vh] bg-cover bg-center transition-opacity duration-1000 ease-in-out ${
						showFirstLayer ? "opacity-0" : "opacity-100"
					}`}
					style={{
						backgroundImage: `url(${images[showFirstLayer ? previousIndex : currentIndex]})`,
						filter: "blur(4px)",
					}}
				></div>

				{/* Gradient Overlay */}
				<div className="absolute inset-0 h-[105vh] bg-gradient-to-b from-black/50 to-black/100"></div>

				{/* Content */}
				<div className="relative z-20">
					<Navigation />
					<section className="pt-[20vh] sm:pt-[50vh]">
						<Hero />
					</section>
				</div>
			</div>

			{/* Other content below without background */}
			<div className="relative z-10 mx-auto min-h-screen max-w-7xl">
				<Posts />
			</div>
		</div>
	);
}
