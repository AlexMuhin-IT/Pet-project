import {useContext, useEffect} from "react";
import {AuthContext} from "../__root.tsx";
import {AuthContextType} from "../../components/home/home.tsx";
import {useDataPosts} from "../../app/store/store.tsx";
import {Post} from "./post.tsx";


export const Posts = () => {
	const {isAuthenticated} = useContext<AuthContextType>(AuthContext);
	const posts = useDataPosts(state => state.posts)
	const fetchData = useDataPosts(state => state.fetchData)

	useEffect(() => {
		fetchData()
	}, [fetchData]);
console.log('render posts', posts);
	return (
		<div>
				<h1>Список постов:</h1>
				<ul>
					{isAuthenticated && (
						<div className="review-list">
							{posts.map(post => (
							<Post key={post.id} {...post} />))}
						</div>
					)}
				</ul>
			</div>
	);
};





