import Navigation from "./components/Navigation";
import AdamBackground from "@/assets/images/adam.jpg";

export default function Home() {
	return (
		<div className="relative min-h-screen max-w-screen overflow-hidden gap-16 font-[family-name:var(--font-geist-sans)]">
			{/* Blurred Background */}
			<div
				className="absolute inset-0 bg-cover bg-center blur-xs"
				style={{
					backgroundImage: `url(${AdamBackground.src})`,
					backgroundSize: "cover",
					backgroundPosition: "center",
				}}
			></div>

			{/* Gradient Overlay */}
			<div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/100"></div>

			{/* Content */}
			<div className="relative z-10">
				<Navigation />
			</div>
		</div>
	);
}
