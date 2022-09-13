import React, { FC, useState } from 'react';
import { GetStaticProps } from 'next';
import {
  Box,
  Button,
  Container,
  Dialog,
  DialogContent,
  DialogTitle,
  Divider,
  Grid,
  IconButton,
  Hidden,
  Paper,
  Typography,
} from '@mui/material';
import { AccountBox, Close, School, Work } from '@mui/icons-material';

import Education from '../components/Education';
import Experience from '../components/Experience';
import Profile from '../components/Profile';

import EducationJSON from '../data/Education.json';
import JobJSON from '../data/Jobs.json';

import { Education as EducationData, Job } from '../types';

interface Props {
  education: EducationData[];
  jobs: Job[];
  isSSR: boolean;
}

const IndexPage: FC<Props> = ({ education, jobs, isSSR }) => {
  const [open, setOpen] = useState(false);

  const handleDialog = () => setOpen(!open);

  const renderExperience = () => (
    <Paper
      sx={(theme) => ({
        [theme.breakpoints.up('md')]: {
          paddingLeft: theme.spacing(3),
          paddingRight: theme.spacing(3),
          paddingTop: theme.spacing(2),
          paddingBottom: theme.spacing(2),
        },
      })}
      elevation={3}
    >
      <Box padding={2} display="flex" alignItems="center">
        <Work sx={{ marginRight: 2 }} />
        <Typography variant="h6">Work Experience</Typography>
        <Hidden mdUp>
          <Button
            sx={{ marginLeft: 'auto' }}
            variant="contained"
            onClick={handleDialog}
            startIcon={<AccountBox />}
          >
            Profile
          </Button>
        </Hidden>
      </Box>
      <Divider />
      <Experience jobs={jobs} />
    </Paper>
  );

  const renderEducation = () => (
    <Paper
      sx={(theme) => ({
        [theme.breakpoints.up('md')]: {
          paddingLeft: theme.spacing(3),
          paddingRight: theme.spacing(3),
          paddingTop: theme.spacing(2),
          paddingBottom: theme.spacing(2),
          marginTop: theme.spacing(2),
        },
      })}
      elevation={3}
    >
      <Box padding={2} display="flex" alignItems="center">
        <School sx={{ marginRight: 2 }} />
        <Typography variant="h6">Education</Typography>
      </Box>
      <Divider />
      <Education educationData={education} />
    </Paper>
  );

  const desktopView = () => (
    <Container sx={{ marginTop: 2 }}>
      <Grid container spacing={4}>
        <Grid item md={4}>
          <Profile />
        </Grid>
        <Grid item md={8}>
          {renderExperience()}
          {renderEducation()}
        </Grid>
      </Grid>
    </Container>
  );

  const mobileView = () => (
    <>
      {renderExperience()}
      {renderEducation()}
      <Dialog fullScreen open={open} onClose={handleDialog}>
        <DialogTitle>Profile</DialogTitle>
        <IconButton
          sx={{
            position: 'absolute',
            right: 1,
            top: 1,
          }}
          onClick={handleDialog}
        >
          <Close />
        </IconButton>
        <DialogContent
          sx={{
            padding: 0,
          }}
        >
          <Profile />
        </DialogContent>
      </Dialog>
    </>
  );

  // return components directly if ssr
  if (isSSR) {
    return desktopView();
  }

  return (
    <>
      <Hidden smDown>{desktopView()}</Hidden>
      <Hidden mdUp>{mobileView()}</Hidden>
    </>
  );
};

export const getStaticProps: GetStaticProps = () => {
  const isSSR = typeof window === 'undefined';

  return {
    props: {
      education: EducationJSON,
      jobs: JobJSON,
      isSSR,
    },
  };
};

export default IndexPage;
