import React from "react";
import Image from "next/image";

import { StaticImageData } from "next/image";

interface PostProps {
	id: number;
	image: StaticImageData | string;
	title: string;
	body: string;
}

const Post: React.FC<PostProps> = ({ id, image, title, body }) => {
	const truncatedBody = body.length > 100 ? body.slice(0, 100) + "..." : body;

	return (
		<div>
			<div className="flex flex-col gap-2 rounded-lg p-4 text-white">
				<div className="relative">
					<Image
						width={700}
						height={350}
						src={image}
						alt={title}
						className="rounded-md object-fill object-center"
					/>
					{/* Overlay */}
					<div className="absolute inset-0 bg-gradient-to-b from-black/0 to-black/90"></div>
				</div>
				<p className="z-50 -mt-8 ml-3 text-xs text-gray-300">#{id}</p>
				<div className="mx-auto mt-4 flex max-w-[50ch] flex-col gap-1">
					<h3 className="text-sm">{title}</h3>
					<p className="text-xs text-gray-300">{truncatedBody}</p>
				</div>
			</div>
		</div>
	);
};

export default Post;
