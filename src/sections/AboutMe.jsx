import { Box, Typography, styled, Grid2 } from '@mui/material';
import React from 'react';

import '../styles/index.css';
import Text from '../components/Text'; // Certifique-se de que o caminho de importação está correto

function AboutMe() {
  const Item = styled(Typography)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(0),
    color: 'var(--text-color)',
  }));

  return (
    <Box
      sx={{
        flexGrow: '1',
        height: '75vh',
        backgroundColor: 'var(--background2-color)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Grid2
        container
        spacing={{ xs: 2, sm: 4, md: 6 }}
        sx={{
          width: '55%',
          maxWidth: '1200px',
          height: 'auto', // Ocupa toda a altura do container
          display: 'flex',
          flexDirection: 'column', // Altera a direção do flex para coluna
          justifyContent: 'space-between', // Distribui o espaço entre os itens
          alignItems: 'center', // Centraliza horizontalmente
          '@media (max-width: 600px)': {
            width: '80%',
          },
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
                },
              }}
            >
              SOBRE MIM
            </Typography>
          </Item>
        </Grid2>

        <Grid2
          item
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexGrow: 1,
            width: '100%',
          }}
        >
          <Text class="container-text-style">
            Meu nome é{' '}
            <span style={{ fontWeight: 'bold', color: 'var(--primary-color)' }}>
              Julio Henrique
            </span>
            , sou estudante de{' '}
            <span style={{ fontStyle: 'italic' }}>Engenharia de Software</span>{' '}
            e estou focado no desenvolvimento das minhas habilidades em{' '}
            <span style={{ fontWeight: 'bold', color: 'var(--primary-color)' }}>
              Desenvolvimento FullStack
            </span>
            . Busco constantemente aprimorar minhas habilidades técnicas e
            práticas, desenvolvendo soluções eficientes e escaláveis. Meu
            objetivo é crescer profissionalmente, contribuindo para projetos
            inovadores e aprendendo com equipes experientes, a fim de me tornar
            um desenvolvedor altamente capacitado e preparado para os desafios
            do setor.
          </Text>
        </Grid2>
      </Grid2>
    </Box>
  );
}

export default AboutMe;
