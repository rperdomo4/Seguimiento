import { styled } from '@mui/material/styles';
import { Box, Typography, Button as MuiButton, TextField } from '@mui/material';

export const Container = styled(Box)(({ theme }) => ({
  display: 'flex',
  height: '100vh',
  backgroundColor: theme.palette.background.default,
}));

export const Sidebar = styled(Box)(({ theme }) => ({
  width: '250px',
  padding: '16px',
  backgroundColor: theme.palette.background.paper,
  boxShadow: `2px 0 4px rgba(0, 0, 0, 0.1)`,
  display: 'flex',
  flexDirection: 'column',
}));


export const Tab = styled('div')(({ active, theme }) => ({
  padding: '12px',
  cursor: 'pointer',
  borderLeft: active ? `4px solid ${theme.palette.primary.main}` : 'none',
  color: active ? theme.palette.primary.main : theme.palette.text.secondary,
  fontWeight: active ? '600' : '400',
  transition: 'color 0.3s, border-left 0.3s',
  '&:hover': {
    color: theme.palette.primary.dark,
  },
}));


export const Content = styled(Box)(({ theme }) => ({
  flexGrow: 1,
  padding: '24px',
  backgroundColor: '',
  boxShadow: `inset 0 0 4px rgba(0, 0, 0, 0.1)`,
}));

export const SectionTitle = styled(Typography)(({ theme }) => ({
  marginBottom: '24px',
  fontWeight: '600',
  fontSize: '1.5rem',
  color: theme.palette.text.primary,
}));


export const List = styled('ul')({
  listStyleType: 'none',
  padding: 0,
  margin: 0,
});


export const ListItem = styled('li')(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  marginBottom: '12px',
  padding: '12px',
  borderRadius: '4px',
  backgroundColor: theme.palette.background.default,
  boxShadow: `0 2px 4px rgba(0, 0, 0, 0.1)`,
  transition: 'background-color 0.3s',
  '&:hover': {
    backgroundColor: theme.palette.action.hover,
  },
}));


export const ListItemText = styled(Typography)(({ theme }) => ({
  flexGrow: 1,
  fontSize: '16px',
  color: theme.palette.text.primary,
}));


export const Button = styled(MuiButton)(({ theme }) => ({
  padding: '8px 16px',
  fontSize: '14px',
  textTransform: 'none',
  borderRadius: '4px',
  backgroundColor: theme.palette.primary.main,
  color: theme.palette.primary.contrastText,
  '&:hover': {
    backgroundColor: theme.palette.primary.dark,
  },
}));
export const SearchInput = styled(TextField)(({ theme }) => ({
  marginBottom: '16px',
  width: '100%',
  '& .MuiInputBase-input': {
    padding: '8px',
  },
  '& .MuiOutlinedInput-root': {
    borderRadius: '4px',
  },
}));
