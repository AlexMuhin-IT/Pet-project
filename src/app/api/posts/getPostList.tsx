import axios, {AxiosResponse} from "axios";
import {PostType} from "./type/type.ts";

export const getPosts = async () => {

	const response:AxiosResponse<PostType[]> = await axios.get('https://jsonplaceholder.typicode.com/posts');
	return response.data;
};