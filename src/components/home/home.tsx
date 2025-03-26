import {useContext} from "react";
import {UserComp} from "./userComp.tsx";
import {AuthContext} from "../../pages/__root.tsx";
import {Login} from "../../pages/login/login.tsx";
import {useQuery} from "@tanstack/react-query";
import {AuthContextType} from "../../app/api/home/type/type.ts";
import {getHomeList} from "../../app/api/home";
import {Posts} from "../../pages/post/posts.tsx";


export const HomePage = () => {
	const {isAuthenticated} = useContext<AuthContextType>(AuthContext);

	const {data, error, isLoading} = useQuery({
		queryKey: ['home'],
		queryFn: () => getHomeList()
	});

	console.log('error', error);

	if (isLoading) return <div>Loading...</div>;
	// if (error) return <div>Error loading data</div>;

	return (
		<div>
			<h1 className="m-auto flex justify-center gap-10 text-4xl text-black-200 bg-green-200 mb-4"> Список
				пользователей: </h1>
			{isAuthenticated ? (
				<ul>
					<div className="flex items-center justify-center">
						{(data ?? []).map(user => (
							<UserComp key={user.id} user={user}/>))}
					</div>
				</ul>
			) : <Login/>
			}
			{isAuthenticated ? <Posts/> : null}
			{error ? <div>Error: Необходмо ввести логин и пароль что бы продолжать</div> : null}
		</div>
	);
};
