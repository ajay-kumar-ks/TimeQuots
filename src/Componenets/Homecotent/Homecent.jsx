import { Box, Grid } from '@mui/material';
import React from 'react';
import MainCard from '../Card/MainCard';


function Homecent({ language, mainMenuSelection }) {
  

  return (
    <Box
      style={{
        height: "91.2vh",
        width: '100vw',
        background: '#5A72A0',
        overflow: 'scroll',
        display:'flex',
        justifyContent:'center',
        alignItems:'center'
      }}
    >

      <MainCard
      language={language} 
      mainMenuSelection={mainMenuSelection} 
      />
    </Box>
  );
}

export default Homecent;
