import React, { useState } from 'react';
import { useLocation } from 'react-router-dom'
import clsx from 'clsx';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { AppBar, BottomNavigation, BottomNavigationAction, Divider, Drawer, IconButton, List, ListItem, ListItemIcon, ListItemText, Toolbar, Typography } from '@material-ui/core'
import { makeStyles, useTheme } from '@material-ui/core/styles'
import { HiChevronLeft, HiChevronRight, HiOutlineBadgeCheck, HiOutlineBookOpen, HiOutlineChatAlt2, HiOutlineMenu, HiOutlineSearch,HiOutlineUserCircle } from 'react-icons/hi'
import { Link } from 'react-router-dom';

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
const useStyles = makeStyles((theme) => ({
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: '1em',
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
  },
  drawerOpen: {
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerClose: {
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: theme.spacing(7) + 1,
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(9) + 1,
    },
  },
  toolbar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
  },
  navMobile: { 
    display: 'flex', 
    width: '100%',
    justifyContent: 'space-around'
  },
  navItem: {
    minWidth: 0
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}));

function DesktopNav({ classes }) {
  const theme = useTheme();
  const [open, setOpen] = useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const DesktopDrawer = () => (
    <Drawer
      variant="permanent"
      className={clsx(classes.drawer, {
        [classes.drawerOpen]: open,
        [classes.drawerClose]: !open,
      })}
      classes={{
        paper: clsx({
          [classes.drawerOpen]: open,
          [classes.drawerClose]: !open,
        }),
      }}
    >
      <div className={classes.toolbar}>
        <IconButton onClick={handleDrawerClose}>
          {theme.direction === 'rtl' ? <HiChevronRight /> : <HiChevronLeft />}
        </IconButton>
      </div>
      <Divider />
      <List>
        {routeObjs.map((routeObj) => (
          <Link key={routeObj.name} to={`${routeObj.route}`}>
            <ListItem button >
              <ListItemIcon>{routeObj.icon}</ListItemIcon>
              <ListItemText primary={routeObj.name} />
            </ListItem>
          </Link>
        ))}
      </List>
    </Drawer>
  )

  return (
    <>
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, {
              [classes.hide]: open,
            })}
          >
            <HiOutlineMenu />
          </IconButton>
          <Typography variant="h6" noWrap>
            FinLearn
          </Typography>
        </Toolbar>
      </AppBar>
      <DesktopDrawer />
    </>
  )
}

function MobileNav({ classes, pathname }) {
  return (
    <>
    <BottomNavigation 
      showLabels
      value={pathname}>
      {routeObjs.map((routeObj) => (
          <BottomNavigationAction
            className={classes.navItem}
            href={routeObj.route}
            key={routeObj.name}
            value={routeObj.route}
            icon={routeObj.icon} />
        ))
      }
    </BottomNavigation>
    </>
  )
}

export function NavigationWrapper({component}) {
  const location = useLocation()
  const classes = useStyles()
  const isMobile = useMediaQuery('(max-width: 600px)');

  return (
    isMobile ? (
      <>
        <main>
          {component()}
          <div className={classes.toolbar} />
        </main>
        <MobileNav classes={classes} pathname={location.pathname}/>
      </>
    )
    : (
      <>
        <DesktopNav classes={classes}/>
        <main>
          <div className={classes.toolbar} />
          {component()}
        </main>
      </>
    )
  )
}
