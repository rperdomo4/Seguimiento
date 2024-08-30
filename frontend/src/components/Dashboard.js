import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { 
  Toolbar, 
  List, 
  ListItemIcon, 
  ListItemText, 
  Menu, 
  MenuItem, 
  useMediaQuery,
  Tooltip,
  Drawer
} from '@mui/material';
import { useTheme } from '@mui/material/styles';
import MenuIcon from '@mui/icons-material/Menu';
import NotificationsIcon from '@mui/icons-material/NotificationsNone';
import { FaSignOutAlt, FaHome, FaFileAlt, FaCheckCircle, FaWarehouse, FaList, FaUsers, FaArchive } from 'react-icons/fa';
import logo from '../images/Logo_Fcn.png';
import { 
  Root, 
  AppBarStyled, 
  SidebarContainer, 
  Logo, 
  StyledListItem, 
  MainContent, 
  UserSection, 
  Username, 
  Title, 
  MobileMenuButton,
  NotificationBadge,
  UserAvatar
} from '../styles/dashboardStyles';

const Dashboard = () => {
  const [expanded, setExpanded] = useState(false);
  const [currentScreen, setCurrentScreen] = useState('home');
  const [username, setUsername] = useState('');
  const [anchorEl, setAnchorEl] = useState(null);
  const navigate = useNavigate();
  const location = useLocation();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  useEffect(() => {
    const storedUsername = localStorage.getItem('username');
    if (storedUsername) {
      setUsername(storedUsername);
    } else {
      navigate('/login');
    }
  }, [navigate]);

  useEffect(() => {
    const screen = location.pathname.split('/').pop() || 'home';
    setCurrentScreen(screen);
  }, [location]);

  const handleMouseEnter = () => {
    if (!isMobile) {
      setExpanded(true);
    }
  };

  const handleMouseLeave = () => {
    if (!isMobile) {
      setExpanded(false);
    }
  };

  const handleScreenChange = (screen) => {
    setCurrentScreen(screen);
    navigate(`/dashboard/${screen}`);
    if (isMobile) {
      setExpanded(false);
    }
  };

  const handleUserClick = (event) => setAnchorEl(event.currentTarget);
  const handleClose = () => setAnchorEl(null);

  const handleLogout = () => {
    localStorage.removeItem('username');
    localStorage.removeItem('token');
    handleClose();
    navigate('/login');
  };

  const toggleDrawer = () => {
    setExpanded(!expanded);
  };

  const menuItems = [
    { icon: <FaHome />, text: 'Inicio', screen: 'home' },
    
  ];
  const renderMainContent = () => {
    return <div>Contenido principal no disponible</div>;
  };

  const sidebarContent = (
    <>
      <Logo src={logo} alt="Logo FCN" expanded={expanded} />
      <List>
        {menuItems.map((item) => (
          <StyledListItem
            button
            key={item.screen}
            onClick={() => handleScreenChange(item.screen)}
            selected={currentScreen === item.screen}
            expanded={expanded}
          >
            <ListItemIcon>{item.icon}</ListItemIcon>
            <ListItemText primary={item.text} />
          </StyledListItem>
        ))}
      </List>
    </>
  );

  return (
    <Root>
      <AppBarStyled position="fixed">
        <Toolbar>
          <MobileMenuButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={toggleDrawer}
          >
            <MenuIcon />
          </MobileMenuButton>
          <Title>Seguimiento de Repuestos</Title>
          <Tooltip title="Notificaciones">
            <NotificationBadge badgeContent={4} color="primary">
              <NotificationsIcon />
            </NotificationBadge>
          </Tooltip>
          <UserSection onClick={handleUserClick}>
            <Username>{username}</Username>
            <UserAvatar>{username.charAt(0).toUpperCase()}</UserAvatar>
          </UserSection>
        </Toolbar>
      </AppBarStyled>
      {isMobile ? (
        <Drawer
          variant="temporary"
          open={expanded}
          onClose={toggleDrawer}
          ModalProps={{
            keepMounted: true, 
          }}
        >
          {sidebarContent}
        </Drawer>
      ) : (
        <SidebarContainer 
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          expanded={expanded}
        >
          {sidebarContent}
        </SidebarContainer>
      )}
      <MainContent expanded={isMobile ? false : expanded}>
        {renderMainContent()}
      </MainContent>
      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={handleLogout}>
          <FaSignOutAlt style={{ marginRight: '10px' }} />
          Cerrar sesión
        </MenuItem>
      </Menu>
    </Root>
  );
};

export default Dashboard;
