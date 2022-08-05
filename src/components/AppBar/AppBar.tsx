import {Box, BoxExtendedProps} from 'grommet';

export const AppBar = (props: JSX.IntrinsicAttributes & BoxExtendedProps) => (
	<Box
	  tag='header'
	  direction='row'
	  align='center'
	  justify='between'
	  background='white'
	  pad={{ left: 'medium', right: 'small', vertical: 'small' }}
	  elevation='medium'
	  style={{ zIndex: '1' }}
	  {...props}
	/>
  );