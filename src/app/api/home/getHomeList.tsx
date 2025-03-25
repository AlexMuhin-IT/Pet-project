import axios, {AxiosResponse} from "axios";
import {UserType} from "./type/type.ts";

export const getHomeList = async (): Promise<UserType[]> => {

	const token = localStorage.getItem("token");

	const response: AxiosResponse<UserType[]> = await axios.get('http://localhost:5000/api/users', {
		method: "GET",
		headers: {
			'Authorization': `Bearer ${token}`
		}
	});
	return response.data
}