import React /*, { Component, useState, useEffect}*/ from 'react';
import {Box, BoxExtendedProps} from 'grommet';

export const AppBarPre = (props: JSX.IntrinsicAttributes & BoxExtendedProps) => (
	<Box
	  tag='header'
	  direction='row'
	  align='center'
	  justify='between'
	  background='#40C040'
	  pad={{ left: 'medium', right: 'small', vertical: 'small' }}
	  elevation='medium'
	  style={{ zIndex: '1' }}
	  // color='#FFFFFF'
	  {...props}
	/>
  );