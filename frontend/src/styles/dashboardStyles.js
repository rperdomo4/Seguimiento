import { styled, alpha } from '@mui/material/styles';
import { Box, AppBar, ListItem, IconButton, Badge } from '@mui/material';
import { NotificationsNone as NotificationsIcon } from '@mui/icons-material';

const drawerWidth = 240;
const collapsedDrawerWidth = 70;

export const Root = styled('div')(({ theme }) => ({
  display: 'flex',
  backgroundColor: theme.palette.background.default,
  minHeight: '100vh',
}));

export const AppBarStyled = styled(AppBar)(({ theme }) => ({
  zIndex: theme.zIndex.drawer + 1,
  backgroundColor: theme.palette.background.paper,
  boxShadow: 'none',
  borderBottom: `1px solid ${theme.palette.divider}`,
}));

export const Title = styled(Box)(({ theme }) => ({
  flexGrow: 1,
  textAlign: 'center',
  color: theme.palette.text.primary,
  fontSize: '1.2rem',
  fontWeight: 'bold',
}));

export const SidebarContainer = styled('div')(({ theme, expanded }) => ({
  width: expanded ? drawerWidth : collapsedDrawerWidth,
  backgroundColor: theme.palette.background.paper,
  color: theme.palette.text.primary,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
  position: 'fixed',
  height: '100%',
  top: 64,
  left: 0,
  borderRight: `1px solid ${theme.palette.divider}`,
  '& header': {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '20px 0',
  },
}));

export const Logo = styled('img')(({ theme, expanded }) => ({
  width: expanded ? 50 : 40,
  height: expanded ? 50 : 40,
  borderRadius: '50%',
  margin: '20px auto',
  display: 'block',
  transition: theme.transitions.create(['width', 'height'], {
    duration: theme.transitions.duration.enteringScreen,
  }),
}));

export const StyledListItem = styled(ListItem)(({ theme, selected, expanded }) => ({
  margin: '8px 0',
  padding: 10,
  color: selected ? theme.palette.primary.main : theme.palette.text.primary,
  transition: theme.transitions.create(['background', 'padding-left'], {
    duration: theme.transitions.duration.shortest,
  }),
  display: 'flex',
  alignItems: 'center',
  justifyContent: expanded ? 'flex-start' : 'center',
  borderRadius: theme.shape.borderRadius,
  '&:hover': {
    backgroundColor: alpha(theme.palette.primary.main, 0.1),
    cursor: 'pointer',
  },
  ...(selected && {
    backgroundColor: alpha(theme.palette.primary.main, 0.1),
    fontWeight: 'bold',
  }),
  '& .MuiListItemIcon-root': {
    minWidth: 0,
    marginRight: expanded ? theme.spacing(3) : 0,
    color: 'inherit',
  },
  '& .MuiListItemText-root': {
    opacity: expanded ? 1 : 0,
    transition: theme.transitions.create('opacity', {
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
}));

export const MainContent = styled(Box)(({ theme, expanded }) => ({
  marginTop:'64px',
  flexGrow: 1,
  padding: theme.spacing(3),
  marginLeft: expanded ? drawerWidth : collapsedDrawerWidth,
  transition: theme.transitions.create('margin', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  [theme.breakpoints.down('sm')]: {
    marginLeft: 0,
    padding: theme.spacing(2),
  },
}));

export const UserSection = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  cursor: 'pointer',
}));

export const Username = styled(Box)(({ theme }) => ({
  marginRight: theme.spacing(1),
  color: theme.palette.text.primary,
  [theme.breakpoints.down('sm')]: {
    display: 'none',
  },
}));

export const NotificationBadge = styled(Badge)(({ theme }) => ({
  marginRight: theme.spacing(2),
}));

export const UserAvatar = styled('div')(({ theme }) => ({
  width: 32,
  height: 32,
  borderRadius: '50%',
  backgroundColor: theme.palette.primary.main,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: theme.palette.common.white,
  fontSize: '1rem',
  fontWeight: 'bold',
}));

export const MobileMenuButton = styled(IconButton)(({ theme }) => ({
  marginRight: theme.spacing(2),
  [theme.breakpoints.up('sm')]: {
    display: 'none',
  },
}));