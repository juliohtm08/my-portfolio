// src/components/Skills.jsx
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
import SkillModal from '../components/SkillModal';

import '../styles/skills.css';

// Mapeia as imagens para chaves que usaremos no modal
const DevIcons = [
  { src: javascriptImg, key: 'javascript' },
  { src: css3Img, key: 'css3' },
  { src: html5Img, key: 'html5' },
  { src: nodejsImg, key: 'nodejs' },
  { src: reactImg, key: 'react' },
  { src: typescriptImg, key: 'typescript' },
  { src: gitImg, key: 'git' },
  { src: sqlImg, key: 'sql' },
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
  cursor: 'pointer', // Adiciona cursor pointer para indicar que é clicável
  transition: 'transform 0.2s, box-shadow 0.2s',
  '&:hover': {
    transform: 'scale(1.05)',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
  },
  ...theme.applyStyles('dark', {
    backgroundColor: '#1A2027',
  }),
}));

function Skills() {
  const [open, setOpen] = React.useState(false);
  const [selectedSkill, setSelectedSkill] = React.useState('');

  const handleOpen = (skillKey) => {
    setSelectedSkill(skillKey);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Box
      sx={{
        flexGrow: 1,
        height: '80vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
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
        {DevIcons.map((icon, index) => (
          <Grid2
            key={index}
            size={{ xs: 2, sm: 4, md: 6 }}
            sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              flexWrap: 'wrap',
              maxWidth: '80%',
            }}
          >
            <ItemImg
              className="style-dev-img"
              onClick={() => handleOpen(icon.key)}
            >
              <img src={icon.src} alt={`${icon.key} icon`} width="100%" />
            </ItemImg>
          </Grid2>
        ))}
      </Grid2>

      <SkillModal open={open} handleClose={handleClose} skill={selectedSkill} />
    </Box>
  );
}

export default Skills;
