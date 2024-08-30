import { styled, alpha } from '@mui/material/styles';
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
} from '@mui/material';

export const Container = styled(Box)(({ theme }) => ({
  padding: theme.spacing(3),
  backgroundColor: alpha(theme.palette.background.paper, 0.8),
  borderRadius: theme.shape.borderRadius,
  boxShadow: theme.shadows[5],
}));

export const TopBar = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  marginBottom: theme.spacing(3),
}));

export const ActionButtonsContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  gap: theme.spacing(1),
}));

export const SearchContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  marginBottom: theme.spacing(3),
  [theme.breakpoints.down('sm')]: {
    flexDirection: 'column',
    gap: theme.spacing(2),
  },
}));

export const SearchField = styled(TextField)(({ theme }) => ({
  marginRight: theme.spacing(2),
  [theme.breakpoints.down('sm')]: {
    marginRight: 0,
    marginBottom: theme.spacing(2),
  },
}));

export const LaunchButton = styled(Button)(({ theme }) => ({
  whiteSpace: 'nowrap',
}));

export const StyledTableContainer = styled(TableContainer)(({ theme }) => ({
  marginBottom: theme.spacing(2),
}));

export const TableStyled = styled(Table)(({ theme }) => ({
  minWidth: 650,
}));

export const TableHeadStyled = styled(TableHead)(({ theme }) => ({
  backgroundColor: alpha(theme.palette.primary.main, 0.1),
}));

export const TableCellStyled = styled(TableCell)(({ theme }) => ({
  color: theme.palette.text.primary,
}));

export const TableRowStyled = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: alpha(theme.palette.action.hover, 0.05),
  },
  '&:hover': {
    backgroundColor: alpha(theme.palette.action.hover, 0.1),
  },
}));

export const TablePaginationStyled = styled(TablePagination)(({ theme }) => ({
  color: theme.palette.text.primary,
  '& .MuiTablePagination-select': {
    color: theme.palette.text.primary,
  },
}));

export const TopBarButton = styled(Button)(({ theme }) => ({
  marginLeft: theme.spacing(1),
  color: theme.palette.common.white,
  backgroundColor: alpha(theme.palette.primary.main, 0.7),
  transition: theme.transitions.create(['background-color', 'box-shadow', 'transform'], {
    duration: theme.transitions.duration.short,
  }),
  '&:hover': {
    backgroundColor: theme.palette.primary.light,
    boxShadow: `0 0 0 3px ${alpha(theme.palette.primary.main, 0.3)}`,
    transform: 'scale(1.05)',
  },
  '& .MuiSvgIcon-root': {
    color: theme.palette.common.white,
  },
}));

export const FabContainer = styled(Box)(({ theme }) => ({
  position: 'fixed',
  bottom: theme.spacing(2),
  right: theme.spacing(2),
  zIndex: 1000,
}));

export const ExpandedTableCell = styled(TableCell)(({ theme }) => ({
  paddingBottom: 0,
  paddingTop: 0,
  backgroundColor: theme.palette.action.hover,
  borderBottom: `2px solid ${theme.palette.primary.main}`,
}));

export const StyledButton = styled(Button)(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  color: theme.palette.common.white,
  '&:hover': {
    backgroundColor: theme.palette.primary.dark,
  },
}));

export const BaseButton = styled(Button)(({ theme }) => ({
  fontWeight: 'bold',
  padding: theme.spacing(1, 3),
  borderRadius: theme.shape.borderRadius,
  transition: 'all 0.3s',
  '&:hover': {
    transform: 'translateY(-2px)',
    boxShadow: theme.shadows[4],
  },
}));

export const ApproveButton = styled(BaseButton)(({ theme }) => ({
  backgroundColor: theme.palette.success.main,
  color: theme.palette.common.white,
  '&:hover': {
    backgroundColor: theme.palette.success.dark,
  },
}));

export const RejectButton = styled(BaseButton)(({ theme }) => ({
  backgroundColor: theme.palette.error.main,
  color: theme.palette.common.white,
  '&:hover': {
    backgroundColor: theme.palette.error.dark,
  },
}));;


export const StyledTextField = styled(TextField)(({ theme }) => ({
  '& .MuiInputBase-input': {
    color: theme.palette.text.primary,
  },
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      borderColor: theme.palette.divider,
    },
    '&:hover fieldset': {
      borderColor: theme.palette.primary.main,
    },
    '&.Mui-focused fieldset': {
      borderColor: theme.palette.primary.main,
    },
  },
}));
