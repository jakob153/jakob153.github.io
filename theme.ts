import { createTheme } from '@mui/material';
import { blue } from '@mui/material/colors';

const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: blue,
    background: {
      default: '#121212',
      paper: '#333',
    },
  },
});

export default theme;
