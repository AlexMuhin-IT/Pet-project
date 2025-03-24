import {Post} from "./post.tsx";
import {useQuery} from '@tanstack/react-query';
import {getPosts} from "../../app/api/posts";

export const Posts = () => {

	const {data, error, isLoading} = useQuery({
		queryKey: ['posts'],
		queryFn: () => getPosts()
	});

	if (isLoading) return <div>Loading...</div>;
	if (error) return <div>Error loading data</div>;

	return (
		<div>
			<h1 className="m-8 text-6xl">Список постов:</h1>
			<ul className="m-8 grid grid-cols-6 gap-2">
				{/*<div >*/}
				{data?.map(post => (
					<Post key={post.id} {...post}  />
				))}
				{/*</div>*/}
			</ul>
		</div>
	);
};





