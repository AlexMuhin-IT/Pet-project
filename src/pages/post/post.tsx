import {PostType} from "../../app/store/store.tsx";

export const Post = (props:PostType) => {

	const {title, body} = props;
	console.log('render post');
	console.log('render', title)

	return (
		<li className="review-card">

			<div className="user">{title}</div>
			<span>{body}</span>
		</li>
	);
};


