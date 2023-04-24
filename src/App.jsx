import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Routes from './routes/index';
import { isAdmin, isAuthenticated } from './services/auth';
import GlobalStyle from './styles/global';
import { ToastContainer } from 'react-toastify';

function App() {
	return (
		<BrowserRouter>
			<Routes></Routes>
			<GlobalStyle />
			<ToastContainer autoClose={3000} />
		</BrowserRouter>
	);
}

export default App;
