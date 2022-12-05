import React, {useState} from 'react';
import { Drawer as MUIDrawer,
    ListItem,
    List,
    ListItemText,
    AppBar,
    Toolbar,
    IconButton,
    Typography,
    Divider,
    Button,
    CssBaseline,
    Box,
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle,
    Container
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { ChevronRight, ChevronLeft } from '@mui/icons-material';
import { useNavigate, Link } from 'react-router-dom';
import { styled } from '@mui/system'
import { theme } from '../../Theme/themes';
import images from '../../assets/images';
import { DataTable } from '../../components';
import { MarvelForm } from '../MarvelForm'

const drawerWidth = 240;

const myStyles = {
    headerH1: {
        fontFamily: 'bangers',
        fontSize: '3.5em',
        lineHeight: '1em',
        marginLeft: '1vw',
    },
    headerH2: {
        fontFamily: 'bangers',
        fontSize: '3em',
        lineHeight: '1em',
        marginLeft: '1vw',
    },
    appBar: {
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        })
    },
    appBarShift: {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: drawerWidth,
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        })
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    hide: {
        display: 'none',
    },
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
    },
    drawerPaper: {
        width: drawerWidth,
    },
    drawerHeader: {
        width: drawerWidth,
        display: 'flex',
        alignItems: 'center',
        padding: theme.spacing(0,1),
        ...theme.mixins.toolbar,
        justifyContent: 'flex-end',
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing(3),
        marginLeft: 0,
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        backgroundColor:'white',
    },
    contentShift: {
        marginLeft: 0,
        translation: theme.transitions.create('margin', {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
        backgroundColor:'white',
    },
    toolbar: {
        backgroundColor:'#d61a28',
    },
    headerButton: {
        fontFamily: 'bangers',
        color: '#d61a28',
        fontSize: '28px',
        borderRadius: '7px',
        border: '2px solid white',
        backgroundColor: 'white',
        padding:'0 4vh 0 4vh',
        margin:'0.5vw 0 1vh auto',
        "&:hover": {
            color:'white',
            backgroundColor: '#d61a28',
            transition: '0.25s ease',
        }
    },
}

const NavA = styled(Link) ({
    fontFamily: 'bangers',
    fontSize: '2.5em',
    display: 'block',
    color: 'black',
    textDecoration: 'none',
    textAlign: 'center',
    paddingTop: '3vh',
    "&:hover": {
        color: '#d61a28',
        transition: '0.25s ease'
    }
})

export const Dashboard = () => {
    const navigate = useNavigate();

    const[open, setOpen] = useState(false);
    const[dialogOpen, setDialogOpen] = useState(false);

    const handleDrawerOpen = () => {
        setOpen(true);
    };
    const handleDrawerClose = () => {
        setOpen(false);
    };

    const handleDialogOpen = () => {
        setDialogOpen(true);
    };
    const handleDialogClose = () => {
        setDialogOpen(false);
    };

    return (
        <Box>
        <Container sx={{height:'100vh', backgroundColor:'white', width:'70%', display:'flex', flexDirection:'column'}}>
            <CssBaseline/>
            <AppBar sx={open ? myStyles.appBarShift : myStyles.appBar} position="fixed">
            <Toolbar sx = {myStyles.toolbar}>
                    <IconButton
                        color='inherit'
                        aria-label='open-drawer'
                        onClick={handleDrawerOpen}
                        edge='start'
                        sx={open ? myStyles.hide : myStyles.menuButton}
                    >
                        <MenuIcon/>
                    </IconButton>

                <h1 style={myStyles.headerH1}>Dashboard</h1>
                <Button sx={myStyles.headerButton} onClick={handleDialogOpen}>Add Marvel Character</Button>

                <Dialog open={dialogOpen} onClose={handleDialogClose} aria-labelledby='form-dialog-title'>
                    <DialogTitle id='form-dialog-title' style={myStyles.headerH2}>Add a Marvel Character to Your Collection!</DialogTitle>
                    <DialogContent>
                        <MarvelForm/>
                    </DialogContent>

                    <DialogActions>
                        <Button onClick={handleDialogClose} sx={myStyles.headerButton}>Cancel</Button>
                    </DialogActions>
                </Dialog>
                </Toolbar>
            </AppBar>

            <MUIDrawer
                sx={open ? myStyles.drawer : myStyles.hide}
                variant='persistent'
                anchor='left'
                open={open}
                style={{width:drawerWidth}}
            >
                <Box sx={myStyles.drawerHeader}>
                    <IconButton onClick={handleDrawerClose}>
                        {theme.direction === 'ltr' ? <ChevronLeft/> : <ChevronRight/>}
                    </IconButton>
                </Box>

                <Divider/>

                <NavA to='/'>Home</NavA>
                <NavA to='/signout'>Sign Out</NavA>

            </MUIDrawer>

            <Box sx={myStyles.content}>
                <Box sx={myStyles.drawerHeader}/>
                    <DataTable/>
            </Box>

        </Container>
        </Box>
    )
}