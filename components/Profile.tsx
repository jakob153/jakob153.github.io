import React, { FC } from 'react';
import Image from 'next/image'
import {
  Box,
  Divider,
  Link,
  Paper,
  Typography,
  makeStyles,
  Theme,
} from '@material-ui/core';
import { Mail, GitHub } from '@material-ui/icons';

const useStyles = makeStyles((theme: Theme) => ({
  paper: {
    padding: theme.spacing(4),
  },
  marginTop1: {
    marginTop: theme.spacing(1),
  },
  marginTop4: {
    marginTop: theme.spacing(4),
  },
  marginTop8: {
    marginTop: theme.spacing(8),
  },
  marginRight2: {
    marginRight: theme.spacing(2),
  },
  marginBottom1: {
    marginBottom: theme.spacing(1),
  },
  profilepic: {
    borderRadius: '50%',
    objectFit: 'cover',
  },
}));

const Profile: FC = () => {
  const classes = useStyles();

  return (
    <Paper className={classes.paper} variant="outlined">
      <Box display="flex" alignItems="center" justifyContent="center">
        <Image className={classes.profilepic} src="/images/profile.jpg" width="150px" height="160px" />
      </Box>
      <Typography className={classes.marginTop4} align="center" variant="h4">
        Jakob Günay
      </Typography>
      <Typography align="center">Webdeveloper</Typography>
      <Typography className={classes.marginTop4} variant="h6">
        Contact Me
      </Typography>
      <Divider />
      <Box display="flex" marginTop={1}>
        <Link href="mailto:guenayjakob@gmail.com" color="inherit">
          <Box display="flex" alignItems="center">
            <Mail className={classes.marginRight2} />
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
            <GitHub className={classes.marginRight2} />
            <Typography>Github</Typography>
          </Box>
        </Link>
      </Box>
      <Typography className={classes.marginTop4} variant="h6">
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
        <Image src="/svgs/apollo.svg" width="90px" height="90px" />
        <Image src="/svgs/nodejs.svg" width="90px" height="90px" />
        <Image src="/svgs/react.svg" width="90px" height="90px" />
        <Image src="/svgs/typescript.svg" width="90px" height="90px" />
        <Image src="/svgs/cypress.svg" width="90px" height="90px" />
        <Image src="/svgs/nextjs.svg" width="90px" height="90px" />
      </Box>
      <Typography className={classes.marginTop4} variant="h6">
        About Me
      </Typography>
      <Divider />
      <Typography className={classes.marginTop1}>
        Experience with the latest web technologies like React, NodeJS, Redux,
        GraphQL to create powerful Single Page Applications.
      </Typography>
    </Paper>
  );
};

export default Profile;
