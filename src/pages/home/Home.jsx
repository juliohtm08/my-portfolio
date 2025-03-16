import React from 'react';
import { Box, Grid2, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import perfil from '../../assets/images/perfil.png';
import '../../styles/Home.css'; // Importe o arquivo CSS
import '../../styles/App.css'; // Importe o arquivo CSS

const Item = styled(Typography)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(0),
  color: 'var(--text-color)',
}));

function Home() {
  return (
    <Box
      sx={{
        flexGrow: 1,
        backgroundColor: 'var(--background-color)',
        height: '70vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Grid2
        container
        spacing={10}
        sx={{
          width: '100%',
          maxWidth: '100%',
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        <Grid2 item xs={6} className="grid-item-style">
          <Item>
            <h1>Hello, I'm Julio Henrique Tomoyuki Morizono</h1>
          </Item>
        </Grid2>
        <Grid2 item xs={6} className="grid-item-style">
          <Item>
            <img src={perfil} alt="Perfil" className="image-style" />
          </Item>
        </Grid2>
      </Grid2>
    </Box>
  );
}

export default Home;
