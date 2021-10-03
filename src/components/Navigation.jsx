import React, { useState, useEffect } from 'react';
import { useAuth0 } from "@auth0/auth0-react";
import { useLocation } from 'react-router-dom'
import useMediaQuery from '@mui/material/useMediaQuery';
import MuiAppBar from '@mui/material/AppBar'
import MuiDrawer from '@mui/material/Drawer'
import { BottomNavigation, BottomNavigationAction, Divider, IconButton, List, ListItem, ListItemIcon, ListItemText, Paper, Toolbar, Typography } from '@mui/material'
import { useTheme } from '@mui/material';
import { HiChevronLeft, HiChevronRight, HiOutlineBadgeCheck, HiOutlineBookOpen, HiOutlineChatAlt2, HiOutlineLogout, HiOutlineMenu, HiOutlineSearch, HiOutlineUserCircle } from 'react-icons/hi'
import { styled } from '@mui/material/styles'
import { Link } from 'react-router-dom';
import SearchBar from '@components/SearchBar'
import { Box } from '@mui/system';
import Logo from '@assets/images/W_logo_small.png'
import { useAppContext } from '@src/Context';
import { getUserById, addUser } from '@js/user'


const drawerWidth = Math.max(window.innerWidth * 0.2, 240);
const routeObjs = [
  {
    name: "Explore",
    icon: <HiOutlineSearch />,
    route: '/explore'
  },
  {
    name: "Products",
    icon: <HiOutlineBadgeCheck />,
    route: '/products'
  },
  {
    name: "Progress",
    icon: <HiOutlineBookOpen />,
    route: '/progress'
  },
  {
    name: "Consult",
    icon: <HiOutlineChatAlt2 />,
    route: '/consult'
  },
  {
    name: "Profile",
    icon: <HiOutlineUserCircle />,
    route: '/profile'
  }
]

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(9)} + 1px)`,
  },
});

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',
    ...(open && {
      ...openedMixin(theme),
      '& .MuiDrawer-paper': openedMixin(theme),
    }),
    ...(!open && {
      ...closedMixin(theme),
      '& .MuiDrawer-paper': closedMixin(theme),
    }),
  }),
);

const TopBar = ({ auth }) => (
  <Box sx={{ display: 'flex' }}>
    <SearchBar />
    <IconButton
      edge="end"
      color="inherit"
      aria-label="app settings"
      onClick={
        auth.isAuthenticated ?
        () => auth.logout({ returnTo: process.env.REACT_APP_BASE_URL })
        : () => window.location.href="/signin"
      }
    >
      <HiOutlineLogout />
    </IconButton>
  </Box>
)

const DeskTopBar = ({auth}) => {
  const theme = useTheme();
  const [open, setOpen] = useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const DesktopDrawer = () => (
    <Drawer variant="permanent" open={open}>
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'rtl' ? <HiChevronRight /> : <HiChevronLeft />}
          </IconButton>
        </DrawerHeader>
        <Divider />
      <List>
        {routeObjs.map((routeObj) => (
          <Link 
            style={{ color: "inherit", textDecoration: "none" }}
            key={routeObj.name} 
            to={`${routeObj.route}`}>
            <ListItem button >
              <ListItemIcon >{routeObj.icon}</ListItemIcon>
              <ListItemText primary={routeObj.name} />
            </ListItem>
          </Link>
        ))}
      </List>
    </Drawer>
  )

  return (
    <>
      <AppBar position="fixed" open={open}>
        <Toolbar>
          {
            auth.isAuthenticated ?
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={handleDrawerOpen}
              edge="start"
              sx={{
                marginRight: '36px',
                ...(open && { display: 'none' }),
              }}
            >
              <HiOutlineMenu />
            </IconButton>
            : null
          }
          <Typography 
            sx={{ 
              fontFamily: 'Archivo Black',
              flexGrow: 1, 
              display: { xs: 'none', sm: 'block' } 
            }}
            component="div" 
            variant="h6" 
            noWrap>
            <Link to="/" style={{ color: 'inherit', textDecoration: 'none' }}>
              <img alt="finlearn logo" src={Logo} height={32}/>
              FINLEARN
            </Link>
          </Typography>
          <TopBar auth={auth}/>
    </Toolbar>
      </AppBar>
      {auth.isAuthenticated ? <DesktopDrawer /> : null}
    </>
  )
}

const MobileNav = ({ pathname }) => (
  <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }} elevation={3}>
  <BottomNavigation 
    showLabels
    value={pathname}>
    {routeObjs.map((routeObj) => (
        <BottomNavigationAction
          sx={{ minWidth: 0 }}
          href={routeObj.route}
          key={routeObj.name}
          value={routeObj.route}
          icon={routeObj.icon} />
      ))
    }
  </BottomNavigation>
  </Paper>
)

const createUserAcc = async (user) => {
  if (user && user.sub) {
    await getUserById(user.sub).then((response)=>{
      if(response.data.length === 0)
      {
        console.log("user does not exist");
        return addUser(user)
      }
      else
      {
        console.log("user exists");
      }
    })
  }
}
  
export function NavigationWrapper({component}) {
  const location = useLocation()
  const isMobile = useMediaQuery('(max-width: 600px)');

  const auth = useAuth0();
  const { setUser, setAuthLoading } = useAppContext();

  useEffect(() => {
    setAuthLoading(true)
    if (!auth.isLoading) {
      if (auth.user) {  
        createUserAcc(auth.user)
        setUser(auth.user)
      } 
      // else {
        // if (window.location.pathname !== "/signin" && window.location.pathname !== "/") {
        //   window.location.href="signin"
        // }
      // }
    }
    setAuthLoading(false)
  },[ auth, setUser, setAuthLoading ])
  

  return (
    isMobile ? (
      <>
        <main>
          <TopBar auth={auth}/>
          {component()}
          <DrawerHeader />
        </main>
        {auth.isAuthenticated ? <MobileNav pathname={location.pathname}/> : null}
      </>
    )
    : (
      <>
        <DeskTopBar auth={auth}/>
        <main>
          <DrawerHeader />
          {component()}
        </main>
      </>
    )
  )
}
