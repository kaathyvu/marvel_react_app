import React from 'react';
import { 
    Box,
    Container,
    Grid,
    Typography,
} from '@mui/material';
import { Link } from 'react-router-dom';
import { styled } from '@mui/system';
import images from '../../assets/images/index.js'

const navbarStyles = {
    container: {
        backgroundColor: 'white',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        width:'70%',
    },
    logo: {
        margin: '1vh 0 1vh 1vh',
        maxWidth: '25vh',
    },
}

const NavA = styled(Link) ({
    fontFamily: 'bangers',
    fontSize: '2.5em',
    display: 'block',
    color: 'black',
    textDecoration: 'none',
    paddingLeft: '5vh',
    "&:hover": {
        color: '#d61a28',
        transition: '0.25s ease'
    }
})

export const NavBar = () => {
    let MyAuth = localStorage.getItem('myAuth')

    if (MyAuth == 'true') {
        return (
            <Container sx={navbarStyles.container}>
                <Grid container style={{alignItems:'center'}}>
                    <Grid xs={6}>
                        <a href='/'><img style={navbarStyles.logo} src={images.avengers_logo} alt='Avengers Logo'/></a>
                    </Grid>
                    <Grid>
                        <NavA to='/' style={{paddingLeft:'10vh'}}>Home</NavA>
                    </Grid>
                    <Grid>
                        <NavA to='/dashboard'>Dashboard</NavA>
                    </Grid>
                    <Grid>
                        <NavA to='/signout'>Sign Out</NavA>
                    </Grid>
                </Grid>
    
                <Grid container>
                    <Grid xs={12}>
                        <img style={{maxWidth:'100%'}} src={images.banner_logo} alt="Marvel Banner"/>
                    </Grid>
                </Grid>
            </Container>
        )
    } else {
        return (
            <Container sx={navbarStyles.container}>
                <Grid container style={{alignItems:'center'}}>
                    <Grid xs={6}>
                        <a href='/'><img style={navbarStyles.logo} src={images.avengers_logo} alt='Avengers Logo'/></a>
                    </Grid>
                    <Grid>
                        <NavA to='/' style={{paddingLeft:'15vh'}}>Home</NavA>
                    </Grid>
                    <Grid>
                        <NavA to='/signin'>Sign In</NavA>
                    </Grid>
                    <Grid>
                        <NavA to='/signup'>Sign Up</NavA>
                    </Grid>
                </Grid>
    
                <Grid container>
                    <Grid xs={12}>
                        <img style={{maxWidth:'100%'}} src={images.banner_logo} alt="Marvel Banner"/>
                    </Grid>
                </Grid>
            </Container>
        )
    }
}
