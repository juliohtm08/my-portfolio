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
        alignItems: 'center',
        backgroundColor: '#002533',
      }}
    >
      <Typography
        sx={{
          textAlign: 'center',
          color: 'var(--text-color)',
          fontSize: {
            xs: '0.8rem', // Em telas pequenas, usa h6
            sm: '1rem', // Em telas pequenas/médias, usa h5
            md: '1.1rem', // Em telas médias, usa h4
            lg: '1.15rem', // Em telas grandes, usa h3
            xl: '1.3rem', // Em telas muito grandes, usa h2
          },
        }}
      >
        {children}
      </Typography>
    </Box>
  );
}

export default Text;
