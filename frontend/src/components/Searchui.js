/* eslint-disable prettier/prettier */
import * as React from 'react';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import ButtonGroup from '@mui/material/ButtonGroup';
import { useState } from 'react';



export default function Selections( {handleSubmit, handleSubmit1} ) {
  
  const buttons = [
    <Button key="one" onClick={handleSubmit}>Inventory</Button>,
    <Button key="two">Topology</Button>,
    <Button key="three" onClick={handleSubmit1}>Device Status</Button>,
  ];

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        '& > *': {
          m: 1,
        },
      }}
    >
      <ButtonGroup color="secondary" aria-label="Medium-sized button group">
        {buttons}
      </ButtonGroup>
    </Box>
  );
}
