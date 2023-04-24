import {
	AccountBox,
	Home,
	ModeNight,
	Person,
	Settings,
} from '@mui/icons-material';
import {
	Box,
	List,
	ListItem,
	ListItemButton,
	ListItemIcon,
	ListItemText,
	Switch,
} from '@mui/material';
import React from 'react';

// import { Container } from './styles';

function SideBar() {
	return (
		<Box p={2} flex={1} sx={{ display: { xs: 'none', sm: 'block' } }}>
			<List>
				<ListItem disablePadding>
					<ListItemButton componet="a" href="#home">
						<ListItemIcon>
							{' '}
							<Home></Home>
						</ListItemIcon>
						<ListItemText primary="Home"></ListItemText>
					</ListItemButton>
				</ListItem>
				<ListItem disablePadding>
					<ListItemButton componet="a" href="#Paginas">
						<ListItemIcon>
							{' '}
							<Home></Home>
						</ListItemIcon>
						<ListItemText primary="Paginas"></ListItemText>
					</ListItemButton>
				</ListItem>
				<ListItem disablePadding>
					<ListItemButton componet="a" href="#Amigos">
						<ListItemIcon>
							{' '}
							<Person></Person>
						</ListItemIcon>
						<ListItemText primary="Amigos"></ListItemText>
					</ListItemButton>
				</ListItem>
				<ListItem disablePadding>
					<ListItemButton componet="a" href="#Definicoes">
						<ListItemIcon>
							{' '}
							<Settings></Settings>
						</ListItemIcon>
						<ListItemText primary="Definições"></ListItemText>
					</ListItemButton>
				</ListItem>
				<ListItem disablePadding>
					<ListItemButton componet="a" href="#Perfil">
						<ListItemIcon>
							{' '}
							<AccountBox></AccountBox>
						</ListItemIcon>
						<ListItemText primary="Perfil"></ListItemText>
					</ListItemButton>
				</ListItem>
				<ListItem disablePadding>
					<ListItemButton>
						<ListItemIcon>
							{' '}
							<ModeNight></ModeNight>
						</ListItemIcon>
						<Switch></Switch>
					</ListItemButton>
				</ListItem>
			</List>
		</Box>
	);
}

export default SideBar;
