import { Box, Stack } from '@mui/material';
import React from 'react';
import Feed from '../../components/Feed';
import NavBar from '../../components/NavBar';
import RigthBar from '../../components/RightBar';
import SideBar from '../../components/SideBar';

function Home() {
	return (
		<Box>
			<NavBar></NavBar>
			<Stack direction="row" spacing={2} justifyContent="space-between">
				<SideBar></SideBar>
				<Feed></Feed>
				<RigthBar></RigthBar>
			</Stack>
		</Box>
	);
}
export default Home;
