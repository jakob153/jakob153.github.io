import React, { FC } from 'react';
import { List, ListItem, ListItemText } from '@mui/material';

import { Education as EducationData } from '../types';

interface Props {
  educationData: EducationData[];
}

export const Education: FC<Props> = ({ educationData }) => {
  return (
    <List disablePadding>
      {educationData.map((edu) => (
        <ListItem key={edu.id} divider>
          <ListItemText primary={edu.description} secondary={edu.duration} />
        </ListItem>
      ))}
    </List>
  );
};

export default Education;
