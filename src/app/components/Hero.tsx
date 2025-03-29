import React from "react";

const Hero = () => {
	return (
		<div className="flex flex-col items-center gap-8 text-white">
			<div>
				{/* Heading Section */}
				<div className="mx-4 my-8 flex flex-col justify-center lg:items-center">
					<h2 className="font-instrument text-4xl tracking-tight sm:text-7xl">
						Inspiring tagline
					</h2>
					<span className="font-instrument text-4xl tracking-tight sm:text-7xl">
						that spans two lines
					</span>
				</div>

				{/* Description Section */}
				<div className="mt-6 flex justify-center lg:text-center">
					<p className="mx-4 max-w-xl text-gray-300 sm:text-lg">
						First sentence that explains the value you provide. And
						another one for good measure, because why not?
						<strong> Wow this text is bold.</strong>
					</p>
				</div>

				{/* CTA Section */}
				<div className="mx-4 mt-8 flex w-full justify-center">
					<div className="flex flex-col items-center gap-4 sm:flex-row">
						{/* Primary CTA Button */}
						<a
							className="flex items-center rounded-full bg-gray-50 px-6 py-2 text-sm font-medium text-gray-800 transition hover:bg-white"
							href="/"
							target="_blank"
							rel="noopener noreferrer"
						>
							<span className="text-base font-medium">
								Primary CTA
							</span>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 16 16"
								fill="currentColor"
								className="ml-2 h-4 w-4 text-gray-400 group-hover:text-gray-300"
							>
								<path
									fillRule="evenodd"
									d="M4.22 11.78a.75.75 0 0 1 0-1.06L9.44 5.5H5.75a.75.75 0 0 1 0-1.5h5.5a.75.75 0 0 1 .75.75v5.5a.75.75 0 0 1-1.5 0V6.56l-5.22 5.22a.75.75 0 0 1-1.06 0Z"
									clipRule="evenodd"
								/>
							</svg>
						</a>

						{/* Alternate CTA Button */}
						<a
							className="group relative flex cursor-pointer items-center text-sm font-medium text-white transition hover:underline"
							href="/"
						>
							<span className="text-base font-medium">
								Alternate CTA - encouragement!
							</span>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 16 16"
								fill="currentColor"
								className="ml-2 h-4 w-4 text-gray-400 group-hover:text-gray-300"
							>
								<path
									fillRule="evenodd"
									d="M4.22 11.78a.75.75 0 0 1 0-1.06L9.44 5.5H5.75a.75.75 0 0 1 0-1.5h5.5a.75.75 0 0 1 .75.75v5.5a.75.75 0 0 1-1.5 0V6.56l-5.22 5.22a.75.75 0 0 1-1.06 0Z"
									clipRule="evenodd"
								/>
							</svg>
						</a>
					</div>
				</div>

				{/* Enterprise Plan Link */}
				<div className="mt-8 flex justify-center">
					<a
						className="text-sm font-medium text-white transition hover:underline"
						href="/"
						target="_blank"
					>
						Small line of text here about anything you want
					</a>
				</div>
			</div>
		</div>
	);
};

export default Hero;
