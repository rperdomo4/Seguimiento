import { styled } from '@mui/material/styles';
import { 
  Box, 
  Paper, 
  Button, 
  TextField,
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  TablePagination,
  Dialog
} from '@mui/material';

export const Container = styled(Box)(({ theme }) => ({
  backgroundColor: '#f5f5f5',
  color: '#333',
  padding: theme.spacing(3),
  borderRadius: theme.shape.borderRadius,
}));

export const StyledPaper = styled(Paper)(({ theme }) => ({
  backgroundColor: '#ffffff',
  marginBottom: theme.spacing(3),
}));

export const StyledTable = styled(Table)(({ theme }) => ({
  minWidth: 650,
  '& .MuiTableCell-head': {
    backgroundColor: '#e0e0e0',
    color: '#333333',
    fontWeight: 'bold',
  },
  '& .MuiTableCell-body': {
    color: '#333333',
  },
  '& .MuiTableRow-root:nth-of-type(even)': {
    backgroundColor: '#f9f9f9',
  },
}));

export const StyledButton = styled(Button)(({ theme }) => ({
  backgroundColor: '#4caf50',
  color: '#ffffff',
  '&:hover': {
    backgroundColor: '#45a049',
  },
}));

export const SearchField = styled(TextField)(({ theme }) => ({
  backgroundColor: '#ffffff',
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      borderColor: '#cccccc',
    },
    '&:hover fieldset': {
      borderColor: '#999999',
    },
    '&.Mui-focused fieldset': {
      borderColor: '#4caf50',
    },
  },
  '& .MuiInputBase-input': {
    color: '#333333',
  },
}));

export const TopBar = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  marginBottom: theme.spacing(3),
}));

export const TableContainerStyled = styled(TableContainer)(({ theme }) => ({
  maxHeight: 440,
}));

export const TablePaginationStyled = styled(TablePagination)(({ theme }) => ({
  backgroundColor: '#f5f5f5',
  color: '#333333',
}));

export const ActionButtonContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'flex-end',
  marginTop: theme.spacing(2),
}));

export const StyledDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialog-paper': {
    backgroundColor: '#ffffff',
  },
  '& .MuiDialogTitle-root': {
    backgroundColor: '#f5f5f5',
    color: '#333333',
  },
  '& .MuiDialogContent-root': {
    color: '#333333',
  },
  '& .MuiInputBase-input': {
    color: '#333333', 
  },
  '& .MuiInputLabel-root': {
    color: '#666666', 
  },
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      borderColor: '#999999',
    },
    '&:hover fieldset': {
      borderColor: '#666666',
    },
    '&.Mui-focused fieldset': {
      borderColor: '#333333',
    },
  },
}));

export const StyledTextField = styled(TextField)(({ theme }) => ({
  '& .MuiInputBase-input': {
    color: '#333333', 
  },
  '& .MuiInputLabel-root': {
    color: '#666666',
  },
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      borderColor: '#999999',
    },
    '&:hover fieldset': {
      borderColor: '#666666',
    },
    '&.Mui-focused fieldset': {
      borderColor: '#333333',
    },
  },
}));
