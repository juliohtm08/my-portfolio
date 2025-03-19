import { Box, Typography } from '@mui/material';
import React from 'react';

function Text({ children }) {
  return (
    <Box
      sx={{
        border: '3px solid var(--primary-color)',
        borderRadius: '5px',
        padding: { xs: 2, sm: 3, md: 4 },
        width: '100%',
        height: 'auto',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center', // Centraliza verticalmente o conteúdo
      }}
    >
      <Typography
        sx={{
          textAlign: 'center',
          color: 'var(--text-color)',
          fontSize: '1.2rem',
        }}
      >
        {children}
      </Typography>
    </Box>
  );
}

export default Text;
