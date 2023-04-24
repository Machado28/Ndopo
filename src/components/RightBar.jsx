import { Box } from '@mui/material';
import React from 'react';

// import { Container } from './styles';

function RigthBar() {
	return (
		<Box
			bgcolor="lightCoral"
			flex={2}
			p={2}
			sx={{ display: { xs: 'none', sm: 'block' } }}
		>
			RightBar
		</Box>
	);
}

export default RigthBar;
