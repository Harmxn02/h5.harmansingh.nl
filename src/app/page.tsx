import Hero from "./components/Hero";
import Navigation from "./components/Navigation";
import AdamBackground from "@/assets/images/adam.jpg";

import Posts from "./components/posts/Posts";

export default function Home() {
	return (
		<div className="relative max-w-screen gap-16 overflow-hidden bg-black font-[family-name:var(--font-geist-sans)]">
			{/* Section with Background */}
			<div className="relative min-h-screen">
				{/* Blurred Background */}
				<div
					className="absolute inset-0 h-[100vh] bg-cover bg-center"
					style={{
						backgroundImage: `url(${AdamBackground.src})`,
						backgroundSize: "cover",
						backgroundPosition: "center",
					}}
				></div>

				{/* Gradient Overlay */}
				<div className="absolute inset-0 h-[100vh] bg-gradient-to-b from-black/50 to-black/100"></div>

				{/* Content */}
				<div className="relative z-10">
					<Navigation />
					<section className="pt-[20vh] sm:pt-[50vh]">
						<Hero />
					</section>
				</div>
			</div>

			{/* Other content below without background */}
			<div className="relative z-10 mx-auto max-w-7xl">
				<Posts />
			</div>
		</div>
	);
}
