import { Mail, Notifications, Settings, Spa } from '@mui/icons-material';
import {
	AppBar,
	Avatar,
	Badge,
	Box,
	InputBase,
	Menu,
	MenuItem,
	Toolbar,
	Typography,
} from '@mui/material';
import { styled } from '@mui/system';
import React, { useState } from 'react';
import avatar from '../assets/avatar.jpeg';
// import { Container } from './styles';

const StyledToolbar = styled(Toolbar)({
	display: 'flex',
	backgroundColor: '#41a3ff',
	justifyContent: 'space-between',
});

const Search = styled('div')(({ theme }) => ({
	backgroundColor: 'white',
	padding: '0 10px',
	borderRadius: theme.shape.borderRadius,
	width: '40%',
}));

const Icons = styled(Box)(({ theme }) => ({
	display: 'none',
	alignItems: 'center',
	gap: '20px',
	backgroundColor: 'transparent',
	[theme.breakpoints.up('sm')]: {
		display: 'flex',
	},
}));

const UserBox = styled(Box)(({ theme }) => ({
	display: 'flex',
	alignItems: 'center',
	gap: '10px',
	backgroundColor: 'transparent',
	[theme.breakpoints.up('sm')]: {
		display: 'none',
	},
}));
function NavBar() {
	const [open, setOpen] = useState(false);
	return (
		<AppBar position="sticky">
			<StyledToolbar>
				<Typography
					variant="h6"
					sx={{
						fontKerning: 'auto',
						fontWeight: 'bold',
						display: { xs: 'none', sm: 'block' },
					}}
					startIcon={<Settings></Settings>}
				>
					Ndopo
				</Typography>
				<Spa sx={{ display: { xs: 'block', sm: 'none' } }}></Spa>
				<Search>
					<InputBase placeholder="Search..."></InputBase>
				</Search>
				<Icons>
					{' '}
					<Badge badgeContent={4} color="error">
						<Mail></Mail>
					</Badge>{' '}
					<Badge badgeContent={4} color="error">
						<Notifications></Notifications>
					</Badge>
					<Avatar onClick={e => setOpen(true)} src={avatar}></Avatar>
				</Icons>
				<UserBox>
					<Avatar onClick={e => setOpen(true)} src={avatar}></Avatar>
					<Typography variant="span">Machado</Typography>
				</UserBox>
			</StyledToolbar>
			<Menu
				id="demo-positioned-menu"
				aria-labelledby="demo-positioned-button"
				open={open}
				onClose={e => setOpen(false)}
				anchorOrigin={{
					vertical: 'top',
					horizontal: 'right',
				}}
				transformOrigin={{
					vertical: 'top',
					horizontal: 'right',
				}}
			>
				<MenuItem>Profile</MenuItem>
				<MenuItem>My account</MenuItem>
				<MenuItem>Logout</MenuItem>
			</Menu>
		</AppBar>
	);
}

export default NavBar;
