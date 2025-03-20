import {Post} from "./post.tsx";
import {useQuery} from '@tanstack/react-query';
import axios from "axios";

export const Posts = () => {

	const fetchPosts = async () => {
		const {data} = await axios.get('https://jsonplaceholder.typicode.com/posts');
		return data;
	};

	const {data, error, isLoading} = useQuery<PostType[], Error>({
		queryKey: ['posts'],
		queryFn: fetchPosts
	});

	if (error) return <div>Error loading data</div>;

	return (
		<div>
			<h1>Список постов:</h1>
			{(isLoading) ?
				<div>Loading...</div>
				: <ul>
					{/*{isAuthenticated && (*/}
					<div className="review-list">
						{data && Array.isArray(data) ? (
							data?.map(post => (
								<Post key={post.id} {...post} />
							))
						) : (<div>No data available</div>)}
					</div>
				</ul>}
		</div>
	);
};

export type PostType = {
	userId?: number,
	id: number,
	title: string,
	body: string,
};




