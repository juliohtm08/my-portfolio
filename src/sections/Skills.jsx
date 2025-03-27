import * as React from 'react';
import { styled } from '@mui/material/styles';
import { Grid2, Box, Paper, Typography } from '@mui/material';
import javascriptImg from '../assets/images/javascript.png';
import css3Img from '../assets/images/css3.png';
import html5Img from '../assets/images/html5.png';
import nodejsImg from '../assets/images/nodejs.png';
import reactImg from '../assets/images/react.png';
import typescriptImg from '../assets/images/typescript.png';
import gitImg from '../assets/images/git.png';
import sqlImg from '../assets/images/sql.png';

import '../styles/skills.css';

const DevIcons = [
  javascriptImg,
  css3Img,
  html5Img,
  nodejsImg,
  reactImg,
  typescriptImg,
  gitImg,
  sqlImg,
];

const Item = styled(Typography)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(0),
  color: 'var(--text-color)',
}));

const ItemImg = styled(Paper)(({ theme }) => ({
  backgroundColor: 'var(--background2-color)',
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: 'center',
  color: (theme.vars ?? theme).palette.text.secondary,
  ...theme.applyStyles('dark', {
    backgroundColor: '#1A2027',
  }),
}));

function Skills() {
  return (
    <Box
      sx={{
        flexGrow: 1,
        height: '80vh',
        display: 'flex',
        flexDirection: 'column', // Coloca os elementos em coluna
        alignItems: 'center', // Centraliza horizontalmente
        justifyContent: 'center', // Centraliza verticalmente
        backgroundColor: 'var(--background-color)',
      }}
    >
      <Grid2 item sx={{ marginTop: 2 }}>
        <Item>
          <Typography
            sx={{
              color: 'var(--primary-color)',
              typography: {
                xs: 'h6',
                sm: 'h6',
                md: 'h5',
                lg: 'h4',
                xl: 'h3',
                marginBottom: '50%',
              },
            }}
          >
            Skills
          </Typography>
        </Item>
      </Grid2>
      <Grid2
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 10, md: 24 }}
      >
        {DevIcons.map((src, index) => (
          <Grid2
            key={index}
            size={{ xs: 2, sm: 4, md: 6 }}
            sx={{
              display: 'flex',
              justifyContent: 'center', // Centraliza os itens horizontalmente
              alignItems: 'center', // Centraliza os itens verticalmente
              flexWrap: 'wrap', // Garante que os itens quebrem linha corretamente
              maxWidth: '80%', // Define um tamanho máximo para o grid
            }}
          >
            <ItemImg className="style-dev-img">
              <img src={src} alt={`DevIcons ${index + 1}`} width="100%" />
            </ItemImg>
          </Grid2>
        ))}
      </Grid2>
    </Box>
  );
}

export default Skills;
