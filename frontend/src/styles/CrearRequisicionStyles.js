import { styled, alpha } from '@mui/material/styles';
import {
    Box,
    TextField,
    Button,
    Grid,
    Typography,
    IconButton,
    Paper,
    Select,
    FormControl,
    Autocomplete
} from '@mui/material';
 
export const FormContainer = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(2),
  margin: theme.spacing(1),
  [theme.breakpoints.up('md')]: {
    padding: theme.spacing(3),
    margin: theme.spacing(2),
  },
  backgroundColor: '#ffffff',
  borderRadius: theme.shape.borderRadius,
  boxShadow: '0 2px 10px rgba(0, 0, 0, 0.08)',
  overflowX: 'hidden',
}));
 
export const StyledGrid = styled(Grid)(({ theme }) => ({
  width: '100%',
  margin: 0,
  '& .MuiGrid-item': {
    padding: theme.spacing(1),
    [theme.breakpoints.up('sm')]: {
      padding: theme.spacing(1),
    },
  },
}));
 
const baseInputStyles = ({ theme }) => ({
  '& .MuiInputBase-input': {
    color: 'black',
    fontSize: '14px',
    padding: '8px',
    [theme.breakpoints.up('sm')]: {
      padding: '10px',
    },
  },
  '& .MuiOutlinedInput-notchedOutline': {
    borderColor: alpha('#000', 0.23),
  },
  '&:hover .MuiOutlinedInput-notchedOutline': {
    borderColor: alpha('#000', 0.5),
  },
  '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
    borderColor: '#1976d2',
  },
});
 
export const StyledTextField = styled(TextField)(({ theme }) => ({
  ...baseInputStyles({ theme }),
  '& .MuiInputLabel-root': {
    color: 'rgba(0, 0, 0, 0.6)',
    fontSize: '14px',
    transform: 'translate(14px, 14px) scale(1)',
    '&.MuiInputLabel-shrink': {
      transform: 'translate(14px, -6px) scale(0.75)',
    },
  },
}));
 
export const StyledSelect = styled(Select)(({ theme }) => ({
  ...baseInputStyles({ theme }),
}));
 
export const StyledFormControl = styled(FormControl)(({ theme }) => ({
  width: '100%',
  '& .MuiInputLabel-root': {
    color: 'rgba(0, 0, 0, 0.6)',
    fontSize: '14px',
    transform: 'translate(14px, 14px) scale(1)',
    '&.MuiInputLabel-shrink': {
      transform: 'translate(14px, -6px) scale(0.75)',
    },
  },
}));
 
export const StyledButton = styled(Button)(({ theme }) => ({
  marginTop: theme.spacing(2),
  padding: theme.spacing(1, 2),
  [theme.breakpoints.up('sm')]: {
    padding: theme.spacing(1, 3),
  },
  backgroundColor: theme.palette.primary.main,
  color: theme.palette.common.white,
  '&:hover': {
    backgroundColor: theme.palette.primary.dark,
  },
}));
 
export const SectionTitle = styled(Typography)(({ theme }) => ({
  marginTop: theme.spacing(2),
  marginBottom: theme.spacing(1),
  fontWeight: 600,
  color: theme.palette.primary.main,
  fontSize: '1rem',
  [theme.breakpoints.up('sm')]: {
    fontSize: '1.1rem',
  },
}));
 
export const DynamicTable = styled(Box)(({ theme, isMobile }) => ({
  marginBottom: theme.spacing(2),
  overflowX: 'auto',
  '& table': {
    width: '100%',
    borderCollapse: 'separate',
    borderSpacing: '0 4px',
  },
  '& th, & td': {
    padding: isMobile ? theme.spacing(0.5) : theme.spacing(1),
    textAlign: 'Center',
    fontSize: isMobile ? '0.8rem' : '0.9rem',
    '&:first-of-type': {
      paddingLeft: 0,
    },
    '&:last-of-type': {
      paddingRight: 0,
    },
  },
  '& th': {
    backgroundColor: alpha(theme.palette.primary.light, 0.1),
    color: theme.palette.primary.main,
    fontWeight: 600,
  },
}));
 
export const RemoveItemButton = styled(IconButton)(({ theme }) => ({
  padding: 4,
  color: theme.palette.error.main,
  '&:hover': {
    backgroundColor: alpha(theme.palette.error.main, 0.1),
  },
}));
 
export const AddItemButton = styled(Button)(({ theme }) => ({
  marginTop: theme.spacing(1),
  marginBottom: theme.spacing(2),
  backgroundColor: alpha(theme.palette.primary.main, 0.1),
  color: theme.palette.primary.main,
  '&:hover': {
    backgroundColor: alpha(theme.palette.primary.main, 0.2),
  },
}));
 
export const StyledAutocomplete = styled(Autocomplete)(({ theme }) => ({
  width: '100%',
  '& .MuiInputBase-root': {
    ...baseInputStyles({ theme }),
  },
  '& .MuiAutocomplete-inputRoot': {
    padding: '2px 4px',
    [theme.breakpoints.up('sm')]: {
      padding: '4px 8px',
    },
  },
  '& .MuiAutocomplete-input': {
    padding: '2px 4px',
    [theme.breakpoints.up('sm')]: {
      padding: '4px 8px',
    },
  },
}));
 