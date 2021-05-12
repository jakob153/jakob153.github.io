import React, { FC, useState } from 'react';
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Theme,
  makeStyles,
} from '@material-ui/core';
import { ChevronRight, ExpandMore } from '@material-ui/icons';

import { Job } from '../types';

const useStyles = makeStyles((theme: Theme) => ({
  expansionPanelDetail: {
    [theme.breakpoints.down('md')]: {
      padding: 0,
    },
  },
  listItem: {
    [theme.breakpoints.down('md')]: {
      paddingLeft: theme.spacing(1),
      paddingRight: theme.spacing(1),
    },
  },
  listItemIcon: {
    [theme.breakpoints.down('md')]: {
      minWidth: '40px',
    },
  },
}));

interface Props {
  jobs: Job[];
}

const Experience: FC<Props> = ({ jobs }) => {
  const [expanded, setExpanded] = useState<string | false>('panel0');
  const classes = useStyles();

  const handleChange = (panel: string) => (
    event: React.ChangeEvent<{}>,
    newExpanded: boolean
  ) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <List disablePadding>
      {jobs.map((job, index) => (
        <ListItem key={job.id} className={classes.listItem}>
          <Accordion
            elevation={3}
            expanded={expanded === `panel${index}`}
            onChange={handleChange(`panel${index}`)}
          >
            <AccordionSummary expandIcon={<ExpandMore />}>
              <ListItemText
                primary={job.description}
                secondary={job.duration}
              />
            </AccordionSummary>
            <AccordionDetails className={classes.expansionPanelDetail}>
              <List disablePadding dense>
                {job.activities.map((activity) => (
                  <ListItem key={activity}>
                    <ListItemIcon className={classes.listItemIcon}>
                      <ChevronRight />
                    </ListItemIcon>
                    <ListItemText primary={activity} />
                  </ListItem>
                ))}
              </List>
            </AccordionDetails>
          </Accordion>
        </ListItem>
      ))}
    </List>
  );
};

export default Experience;
