import React from 'react';
import { Box, Typography, styled, Grid2 } from '@mui/material';
import perfil from '../assets/images/perfil.png';

import '../styles/Presentation.css';

function Presentation() {
  const Item = styled(Typography)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(0),
    color: 'var(--text-color)',
  }));
  return (
    <Box
      sx={{
        flexGrow: 1,
        backgroundColor: 'var(--background-color)',
        minHeight: '70vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: { xs: 2, sm: 3, md: 4 },
      }}
    >
      <Grid2
        container
        spacing={{ xs: 2, sm: 4, md: 6 }}
        sx={{
          width: '100%',
          maxWidth: '1200px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Grid2 item xs={12} md={6} className="grid-item-style">
          <Item>
            <Typography
              sx={{
                fontSize: {
                  xs: '1.5rem',
                  sm: '1rem',
                  md: '1.8rem',
                  lg: '2rem',
                },
                fontWeight: 600,
                textAlign: { xs: 'center', md: 'left' },
              }}
            >
              Hello, I'm Julio Henrique Tomoyuki Morizono👋
            </Typography>
          </Item>
        </Grid2>
        <Grid2 item xs={12} md={6} className="grid-item-style">
          <Item>
            <img src={perfil} alt="Perfil" className="image-style" />
          </Item>
        </Grid2>
      </Grid2>
    </Box>
  );
}

export default Presentation;
