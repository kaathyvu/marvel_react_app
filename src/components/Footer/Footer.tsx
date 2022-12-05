import React from 'react';
import { 
    Box,
    Button,
    Container,
    Grid,
    Typography,
} from '@mui/material';
import { Link } from 'react-router-dom';
import images from '../../assets/images/index.js';

const myStyles = {
    container: {
        backgroundColor: 'white',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        width:'70%',
        textAlign: 'center' as 'center',
        padding: '10vh 0 3vh 0',
    },
    footer: {
        justifyContent:'center',
    },
    footerH1: {
        fontFamily: 'bangers',
        fontSize: '3.5em',
        color: 'black',
        lineHeight: '1em',
    },
    headerButton: {
        fontFamily: 'bangers',
        color: 'white',
        fontSize: '34px',
        borderRadius: '7px',
        border: '2px solid #d61a28',
        backgroundColor: '#d61a28',
        padding:'0 4vh 0 4vh',
        margin:'0.5vw 0 0 1vw',
        "&:hover": {
            color:'#d61a28',
            backgroundColor: 'white',
            transition: '0.25s ease',
        }
    },
}
export const Footer = () => {
    return (
        <Container sx={myStyles.container}>
            <hr style={{color:'gray', width:'100%', height:'1px', marginBottom:'5vh'}}></hr>
            <Grid container style={myStyles.footer}>
                <Grid item xs={12}>
                    <h1 style={myStyles.footerH1}>Avengers, assemble!</h1>
                </Grid>
                <Grid item xs={6}>
                    <img style={{maxWidth:'100%',}} src={images.symbol} alt="Avengers Symbols"/>
                </Grid>
                <Grid item xs={12}>
                    <Button sx={myStyles.headerButton} component={Link} to="/signup">Sign Up</Button>
                    <Button sx={myStyles.headerButton} href="/signin">Sign In</Button>
                </Grid>
            </Grid>
        </Container>
    )
}