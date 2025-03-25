export interface AuthContextType {
	isAuthenticated: boolean;
	login: (token: string) => void,
	logout: () => void,
}

export interface UserType {
	id: number;
	userName: string;
	text: string;
	isLoggedIn: boolean;
}