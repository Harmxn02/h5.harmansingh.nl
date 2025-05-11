import React from "react";
import Post from "./Post";

import posts from "@/data/posts.js";

const Posts = () => {
	return (
		<div className="text-white">
			{/* <h2 className="text-3xl">Posts</h2> */}

			{/* Map through the posts and render each one */}
			<div className="grid grid-cols-1 justify-items-center gap-5 sm:grid-cols-2 xl:grid-cols-3">
				{posts.map((post) => (
					<Post
						key={post.id}
						id={post.id}
						image={post.image}
						title={post.title}
						body={post.body}
						tags={post.tags}
					/>
				))}
			</div>
		</div>
	);
};

export default Posts;
