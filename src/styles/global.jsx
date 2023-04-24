import { createGlobalStyle } from 'styled-components';
import 'react-toastify/dist/ReactToastify.css';
export default createGlobalStyle`
 *{
	margin:0;
	padding:0;
	outline: 0;
	box-sizing:border-box;
	font-family:'Roboto', sans-serif;

 }
 body{
	background:#fcfcfced;
	-webkit-font-smoothing:antialiased;
 }
 body,input,button{
	font:14px 'Roboto', sans-serif;
 }
 a{
	text-decoration: none;
	color:#fff;
 }
button{
	cursor:pointer;
	border: none;
}
 #root{
	margin: 0 auto;
	padding: 0 20px 10;
 }
`;
