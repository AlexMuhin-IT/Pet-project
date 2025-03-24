import {PostType} from "../../app/api/posts/type/type.ts";
import "tailwindcss";
export const Post = (props:PostType) => {

	const {title, body} = props;

	return (
		<li className="border-10 rounded-lg border-green-600 max-w-3xs max-h-full bg-green-100">
			<div className="border-2 border-red-600 pb-4 font-bold m-8">{title}</div>
			<span className="">{body}</span>
		</li>
	);
};


