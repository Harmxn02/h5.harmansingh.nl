import React from "react";

const Navigation = () => {
	return (
		<div className="fixed top-0 z-50 w-full px-3 py-1 text-white transition sm:px-5">
			<div className="mx-auto my-1.5 flex flex-row justify-between gap-2">
				<div className="flex flex-row text-xl font-medium">
					<a href="/" className="tracking-tight">
						H5 Research
					</a>
				</div>
				<div className="flex space-x-1">
					<div className="group hidden w-fit shrink-0 items-center sm:flex">
						<a
							className="flex text-xs font-medium text-gray-300 transition group-hover:text-white"
							href="/assets/files/whitepaper.pdf"
							target="_blank"
						>
							External link
							<div className="ml-1 text-gray-400 group-hover:text-white">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									viewBox="0 0 16 16"
									fill="currentColor"
									className="h-4 w-4"
								>
									<path
										fillRule="evenodd"
										d="M4.22 11.78a.75.75 0 0 1 0-1.06L9.44 5.5H5.75a.75.75 0 0 1 0-1.5h5.5a.75.75 0 0 1 .75.75v5.5a.75.75 0 0 1-1.5 0V6.56l-5.22 5.22a.75.75 0 0 1-1.06 0Z"
										clipRule="evenodd"
									></path>
								</svg>
							</div>
						</a>
					</div>
					<a
						href="/"
						className="flex rounded-full bg-transparent px-2 py-0.5 text-xs font-medium text-gray-300 transition hover:text-white"
					>
						Link
					</a>
					<a
						href="/"
						className="rounded-full bg-gray-100/10 px-2.5 py-1 text-xs font-medium text-gray-300 transition hover:bg-gray-100/20 hover:text-white"
					>
						Another
					</a>
				</div>
			</div>
		</div>
	);
};

export default Navigation;
