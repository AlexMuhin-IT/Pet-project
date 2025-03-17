import {PostType} from "../../app/store/store.tsx";

export const Post = (props:PostType) => {

	const {title, body} = props;

	return (
		<li className="review-card">

			<div className="user">{title}</div>
			<span>{body}</span>
		</li>
	);
};


