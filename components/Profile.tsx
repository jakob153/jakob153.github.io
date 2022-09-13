import React, { FC } from 'react';
import Image from 'next/image';
import { Box, Divider, Link, Paper, Typography } from '@mui/material';
import { Mail, GitHub } from '@mui/icons-material';

import ProfilePNG from '../public/images/profile.jpg';

import ApolloSvg from '../public/svgs/apollo.svg';
import CypressSvg from '../public/svgs/cypress.svg';
import NextjsSvg from '../public/svgs/nextjs.svg';
import NodeJsSvg from '../public/svgs/nodejs.svg';
import ReactSvg from '../public/svgs/react.svg';
import TypescriptSvg from '../public/svgs/typescript.svg';

const Profile: FC = () => {
  return (
    <Paper
      sx={{
        padding: 4,
      }}
      elevation={3}
    >
      <Box display="flex" alignItems="center" justifyContent="center">
        <Image
          style={{
            borderRadius: '50%',
          }}
          src={ProfilePNG}
          width="150px"
          height="160px"
          objectFit="cover"
        />
      </Box>
      <Typography
        sx={{
          marginTop: 4,
        }}
        align="center"
        variant="h4"
      >
        Jakob Günay
      </Typography>
      <Typography align="center">Webdeveloper</Typography>
      <Typography
        sx={{
          marginTop: 4,
        }}
        variant="h6"
      >
        Contact Me
      </Typography>
      <Divider />
      <Box display="flex" marginTop={1}>
        <Link href="mailto:guenayjakob@gmail.com" color="inherit">
          <Box display="flex" alignItems="center">
            <Mail
              sx={{
                marginRight: 2,
              }}
            />
            <Typography>guenayjakob@gmail.com</Typography>
          </Box>
        </Link>
      </Box>
      <Box display="flex" marginTop={1}>
        <Link
          href="https://www.github.com/jakob153"
          color="inherit"
          target="_blank"
        >
          <Box display="flex" alignItems="center">
            <GitHub
              sx={{
                marginRight: 2,
              }}
            />
            <Typography>Github</Typography>
          </Box>
        </Link>
      </Box>
      <Typography
        sx={{
          marginTop: 4,
        }}
        variant="h6"
      >
        Technologies
      </Typography>
      <Divider />
      <Box
        display="flex"
        alignItems="center"
        flexWrap="wrap"
        justifyContent="space-between"
        marginTop={1}
      >
        <Image src={ApolloSvg} width="90px" height="90px" />
        <Image src={NodeJsSvg} width="90px" height="90px" />
        <Image src={ReactSvg} width="90px" height="90px" />
        <Image src={TypescriptSvg} width="90px" height="90px" />
        <Image src={CypressSvg} width="90px" height="90px" />
        <Image src={NextjsSvg} width="90px" height="90px" />
      </Box>
      <Typography
        sx={{
          marginTop: 4,
        }}
        variant="h6"
      >
        About Me
      </Typography>
      <Divider />
      <Typography
        sx={{
          marginTop: 1,
        }}
      >
        Experience with the latest web technologies like React, NodeJS, Redux,
        GraphQL to create powerful Single Page Applications.
      </Typography>
    </Paper>
  );
};

export default Profile;
