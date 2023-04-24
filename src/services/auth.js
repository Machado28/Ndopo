/* eslint-disable no-undef */
// Parte De Manipulacao do Token E Authorizations

//Este e o Token
export const TOKEN_KEY = '70fghh1n77d4';

//Verificando se o Token existe no navegador
// export const isAuthenticated = () => localStorage.getItem(TOKEN_KEY) !== null;
export const isAuthenticated = () => (getToken() ? true : false);

//Pegandop o Token
export const getToken = () => localStorage.getItem(TOKEN_KEY);

//Inserindo o Token no Local STorage
export const login = token => localStorage.setItem(TOKEN_KEY, token);

//Removendo o Token do Local STorage
export const logout = () => {
	localStorage.removeItem(TOKEN_KEY);
	RemoveUser();
};

// Guardando UserLogado no LocalStorage.
export const UserLogado = user => {
	localStorage.setItem('userLogado', JSON.stringify(user));
	isAuthenticated(true);
	console.log(isAuthenticated());
};
// Pegando os Dados do UserLogado
export const GetUser = () =>
	JSON.parse(localStorage.getItem('userLogado')) || {};

// Eliminando dados do UserLogado
export const RemoveUser = () => {
	localStorage.removeItem('userLogado');
	localStorage.removeItem(TOKEN_KEY);
	window.location.href = '/login';
	isAuthenticated(false);
};

// Verificando se e o Administrador quem esta logado.
export const isAdmin = () => {
	const User = JSON.parse(localStorage.getItem('userLogado'));
	if (User && User?.isAdmin === true) return true;

	return false;
};

// export const isAdmin = () => {
// 	return true;
// };
