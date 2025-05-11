import React from "react";
import Image from "next/image";

import { StaticImageData } from "next/image";

interface PostProps {
	id: number;
	image: StaticImageData | string;
	title: string;
	body: string;
	tags?: string[];
}

const Post: React.FC<PostProps> = ({ id, image, title, body, tags }) => {
	const truncatedBody = body.length > 100 ? body.slice(0, 100) + "..." : body;

	const truncateTag = (tag: string) => {
		if (tag.length > 20) {
			return tag.slice(0, 20) + "...";
		}
		return tag;
	};

	return (
		<div>
			<div className="flex flex-col gap-2 rounded-lg p-4 text-white">
				<div className="group relative max-w-[700px] overflow-hidden rounded-md">
					<Image
						width={700}
						height={350}
						src={image}
						alt={title}
						className="object-fill object-center transition-all duration-200 ease-in-out group-hover:scale-110"
					/>
					{/* Overlay */}
					<div className="absolute inset-0 bg-gradient-to-b from-black/0 to-black/90"></div>
				</div>
				<p className="z-20 -mt-8 ml-3 text-xs text-gray-300">#{id}</p>
				<div className="mx-auto mt-4 flex max-w-[50ch] flex-col gap-1">
					<h3 className="text-sm">{title}</h3>
					<p className="text-xs text-gray-300">{truncatedBody}</p>
				</div>
				{tags && (
					<div className="flex flex-wrap gap-2 pt-2 text-xs text-gray-300">
						{tags.map((tag, index) => (
							<span
								key={index}
								className="cursor-pointer rounded-full bg-gray-800/70 px-2 py-1 transition-all duration-200 ease-in-out hover:bg-gray-700/70"
							>
								{truncateTag(tag)}
							</span>
						))}
					</div>
				)}
			</div>
		</div>
	);
};

export default Post;
