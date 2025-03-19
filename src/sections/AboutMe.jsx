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
        height: '70vh',
        backgroundColor: 'var(--background2-color)',
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
          width: '50%',
          maxWidth: '1200px',
          height: 'auto', // Ocupa toda a altura do container
          display: 'flex',
          flexDirection: 'column', // Altera a direção do flex para coluna
          justifyContent: 'space-between', // Distribui o espaço entre os itens
          alignItems: 'center', // Centraliza horizontalmente
        }}
      >
        {/* Item 1 - No topo */}
        <Grid2 item sx={{ marginTop: 2 }}>
          <Item>
            <Typography variant="h4" sx={{ color: 'var(--primary-color)' }}>
              SOBRE MIM
            </Typography>
          </Item>
        </Grid2>

        {/* Item 2 - Centralizado no meio */}
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
          <Text>
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
            . Atualmente, busco uma oportunidade de estágio na área, onde possa
            aplicar meus conhecimentos técnicos, contribuir para projetos
            desafiadores e, ao mesmo tempo, ampliar minha experiência no mercado
            de tecnologia. Meu objetivo é crescer profissionalmente, aprendendo
            com equipes experientes e me tornando um desenvolvedor cada vez mais
            capacitado e preparado para os desafios da área.
          </Text>
        </Grid2>
      </Grid2>
    </Box>
  );
}

export default AboutMe;
