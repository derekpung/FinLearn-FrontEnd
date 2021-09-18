import React, { useState } from 'react';
import { useLocation } from 'react-router-dom'
import clsx from 'clsx';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { AppBar, BottomNavigation, BottomNavigationAction, Divider, Drawer, IconButton, InputBase, List, ListItem, ListItemIcon, ListItemText, Toolbar, Typography } from '@material-ui/core'
import { alpha, makeStyles, useTheme } from '@material-ui/core/styles'
import { HiChevronLeft, HiChevronRight, HiOutlineBadgeCheck, HiOutlineBookOpen, HiOutlineChatAlt2, HiOutlineCog, HiOutlineMenu, HiOutlineSearch, HiOutlineUserCircle, HiSearch } from 'react-icons/hi'
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
  },
  {
    name: "Course",
    icon: <HiOutlineSearch />,
    route: '/course'
  },
]
const useStyles = makeStyles((theme) => ({
  title: {
    flexGrow: 1
  },
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
      width: theme.spacing(8) + 1,
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
  listItemIcon: {
    minWidth: theme.spacing(2)
  },
  search: {
    position: 'relative',
    height: 'fit-content',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.black, 0.07),
    '&:hover': {
      backgroundColor: alpha(theme.palette.common.black, 0.15),
    },
    margin: "auto",
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
  topBar: {
    display: "flex",
    height: "fit-content"
  }
}));

function SearchBar({classes}) {
  return (
    <div className={classes.search}>
      <div className={classes.searchIcon}>
        <HiSearch />
      </div>
      <InputBase
        placeholder="Search…"
        classes={{
          root: classes.inputRoot,
          input: classes.inputInput,
        }}
        inputProps={{ 'aria-label': 'search' }}
      />
    </div>
  )
}
function TopBar({ classes, pathname }) {
  return (
    <div className={classes.topBar}>
      <SearchBar classes={classes}/>
      <IconButton
        edge="end"
        color="inherit"
        aria-label="app settings"
      >
        <HiOutlineCog />
      </IconButton>
    </div>
  )
}

function DeskTopBar({ classes }) {
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
          <Link 
            style={{ color: "inherit", textDecoration: "none" }}
            key={routeObj.name} 
            to={`${routeObj.route}`}>
            <ListItem button className={classes.listItem}>
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
          <Typography className={classes.title} variant="h6" noWrap>
            FinLearn
          </Typography>
          <TopBar classes={classes}/>
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
          <TopBar classes={classes} />
          {component()}
          <div className={classes.toolbar} />
        </main>
        <MobileNav classes={classes} pathname={location.pathname}/>
      </>
    )
    : (
      <>
        <DeskTopBar classes={classes}/>
        <main>
          <div className={classes.toolbar} />
          {component()}
        </main>
      </>
    )
  )
}
