// src/components/SkillModal.jsx
import * as React from 'react';
import { Modal, Box, Typography } from '@mui/material';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: { xs: '90%', sm: '80%', md: '60%' },
  maxWidth: '600px',
  bgcolor: 'var(--background2-color)',
  border: '2px solid var(--primary-color)',
  borderRadius: '10px',
  boxShadow: 24,
  p: 4,
  color: 'var(--text-color)',
};

function SkillModal({ open, handleClose, skill }) {
  // Dados sobre cada habilidade
  const skillData = {
    javascript: {
      name: 'JavaScript',
      description: `JavaScript é uma linguagem de programação usada para criar interatividade em sites e aplicativos. 
      Com JavaScript, é possível adicionar animações, botões dinâmicos, formulários interativos e outras funcionalidades 
      que tornam a experiência do usuário mais agradável e eficiente. É uma das principais tecnologias usadas no 
      desenvolvimento web moderno.`,
      experience: 'Experiência com ES6+, manipulação de DOM e APIs REST.',
    },
    css3: {
      name: 'CSS3',
      description: `CSS3 é a linguagem de estilo usada para definir a aparência de um site. Com o CSS3, é possível controlar a cor, 
      o tamanho, a disposição e o formato dos elementos de uma página. Ele permite adicionar efeitos como sombras, bordas arredondadas, 
      transições e animações. O CSS3 ajuda a tornar os sites visualmente atraentes e a melhorar a experiência do usuário, 
      sem precisar alterar o conteúdo ou a estrutura do site.`,
      experience:
        'Experiência com criação de layouts responsivos e designs modernos.',
    },
    html5: {
      name: 'HTML5',
      description: `HTML5 é a versão mais recente da linguagem de marcação usada para estruturar o conteúdo de sites. 
      Ele define a organização de textos, imagens, vídeos, formulários e outros elementos dentro de uma página. 
      O HTML5 trouxe melhorias importantes, como suporte a vídeo e áudio sem a necessidade de plugins externos, 
      além de novos elementos para criar páginas mais semânticas e acessíveis. Ele é fundamental para criar qualquer site, 
      servindo como a base sobre a qual o CSS e o JavaScript adicionam estilo e interatividade.`,
      experience:
        'Experiência com desenvolvimento de estruturas acessíveis e semânticas.',
    },
    nodejs: {
      name: 'Node.js',
      description: `Node.js é uma plataforma baseada em JavaScript que permite executar código JavaScript fora do navegador, ou seja, no servidor. 
        Isso possibilita o desenvolvimento de aplicações de back-end (parte do site ou aplicativo que roda no servidor) 
        usando a mesma linguagem utilizada no front-end. Node.js é muito eficiente para criar aplicativos rápidos e escaláveis, 
        especialmente para tarefas que envolvem muitas requisições, como chats em tempo real ou sistemas de e-commerce. 
        Ele é amplamente utilizado em projetos que exigem alta performance e grande número de usuários simultâneos.`,
      experience:
        'Experiência com desenvolvimento de APIs, aplicações back-end com Express, Middlewares, HTTP & HTTPS e JWT.',
    },
    react: {
      name: 'ReactJS & ReactNative',
      description: `ReactJS é uma biblioteca de JavaScript usada para criar interfaces de usuário dinâmicas em sites e aplicativos web, 
     permitindo a construção de componentes reutilizáveis e a atualização eficiente das páginas. 
     Já o React Native é uma extensão do React, projetada para o desenvolvimento de aplicativos móveis nativos. 
     Ele permite que desenvolvedores escrevam código uma única vez em JavaScript e gerem versões para Android e iOS.`,
      experience: `Experiência com desenvolvimento de páginas web e aplicativos.`,
    },
    typescript: {
      name: 'TypeScript',
      description: `TypeScript é uma linguagem de programação baseada em JavaScript, mas com recursos adicionais que tornam o código 
        mais seguro e fácil de entender. A principal diferença é que o TypeScript permite definir tipos de dados, como números, 
        strings e objetos, o que ajuda a evitar erros comuns durante o desenvolvimento. É muito utilizado em grandes projetos, 
        onde a estrutura e a manutenção do código são mais complexas.`,
      experience: `Experiência com desenvolvimento de projetos com React e TypeScript e manutenção/atualização de sistemas`,
    },
    git: {
      name: 'Git',
      description: `Git é um sistema de controle de versão usado para gerenciar e rastrear mudanças em arquivos, 
        geralmente no desenvolvimento de software. Ele permite que múltiplos desenvolvedores trabalhem no mesmo projeto 
        de forma colaborativa, mantendo um histórico de todas as alterações feitas no código. Git é amplamente utilizado 
        em conjunto com plataformas como GitHub, GitLab e Bitbucket para hospedar repositórios de código e facilitar a colaboração.`,
      experience: `Experiência com gerenciamento de versões de projetos de software, criação e manutenção de repositórios, commits e push, criação de branches, resolver conflitos de código, realizar merges, visualizar históricos de alterações e reverter versões quando necessário.`,
    },
    sql: {
      name: 'SQL',
      description: `SQL (Structured Query Language) é uma linguagem de programação usada para gerenciar e manipular bancos de dados relacionais. 
        Com SQL, é possível criar, alterar e consultar dados armazenados em tabelas, além de inserir, atualizar e excluir registros. 
        Ele permite a realização de operações como a filtragem de dados, a junção de várias tabelas e a agregação de informações, 
        facilitando o gerenciamento e a análise de grandes volumes de dados. SQL é amplamente utilizado em sistemas de gerenciamento 
        de banco de dados como MySQL, PostgreSQL e SQL Server.`,
      experience: `Experiência com PostgreSQL e MySQL criando e consultando dados, realizando alterações necessárias e desenvolvendo um DashBoard. `,
    },
  };

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <Typography
          id="modal-modal-title"
          variant="h5"
          component="h2"
          sx={{ color: 'var(--primary-color)' }}
        >
          {skillData[skill]?.name || 'Habilidade'}
        </Typography>
        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
          {skillData[skill]?.description || 'Descrição não disponível.'}
        </Typography>
        <Typography sx={{ mt: 2, fontStyle: 'italic' }}>
          {skillData[skill]?.experience || ''}
        </Typography>
      </Box>
    </Modal>
  );
}

export default SkillModal;
