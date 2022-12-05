import React from 'react';
import { NavBar, Footer } from '../../components'
import { 
    Box,
    Button,
    Container,
    Grid,
    Typography,
} from '@mui/material';
import images from '../../assets/images/index.js'

interface Props {
    title: string;
}

const myStyles = {
    container: {
        backgroundColor: 'white',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        width:'70%',
    },
    headerH1: {
        fontFamily: 'bangers',
        fontSize: '3.5em',
        lineHeight: '1em',
        marginLeft: '1vw',
    },
    headerH3: {
        marginLeft: '1vw',
        fontSize: '1.5em',
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
    header: {
        marginTop: '2vh',
    },
    main1: {
        padding: '6vh 11vw 6vh 11vw',
    },
    main2: {
        padding: '0 5vw',
        alignItems: 'center',
    },
    main3: {
        padding: '0 6vw',
        alignItems: 'start',
    },
    mainH1: {
        fontFamily: 'bangers',
        fontSize: '3.5em',
        color: 'black',
        lineHeight: '1em',
        textAlign: 'center' as 'center', 
    },
    mainH3: {
        fontFamily: 'bangers',
        fontSize: '2.1em',
        color: 'black',
        textAlign: 'center' as 'center', 
    },
    mainH6: {
        fontSize: '1em',
        textAlign: 'center' as 'center', 
    }
}

export const Home = (props:Props) => {
    return (
        <Box>
            <NavBar/>
                <Container sx={myStyles.container}>
                    
                    <Grid container sx={myStyles.header}>
                        <Grid item xs={7}>
                            <h1 style={myStyles.headerH1}>Welcome to the Marvel Universe! Where every hero, including you, has a story!</h1>
                            <h3 style={myStyles.headerH3}>Here's an enticing sentence to convince you to join our Marvel Database! Blah potato tomato broccoli carrot squash.
                            It is so persuasive, you can't help but give in!</h3>
                            <Button sx={myStyles.headerButton}>View Docs</Button>
                            <Button sx={myStyles.headerButton}>Join Slack</Button>
                        </Grid>

                        <Grid item xs={5}>
                            <img style={{maxWidth:'100%'}} src={images.bp} alt="Black Panther"/>
                        </Grid>
                    </Grid>

                    <Grid container sx={myStyles.main1} spacing={1}>
                        <Grid item xs={12}>
                            <h1 style={myStyles.mainH1}>Don't mind me. Just another Marvel header to reel you in!</h1>
                        </Grid>
                        <Grid item xs={12}>
                            <h6 style={myStyles.mainH6}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et 
                            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip 
                            ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore 
                            eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia 
                            deserunt mollit anim id est laborum.</h6>
                        </Grid>
                    </Grid>

                    <Grid container sx={myStyles.main2} spacing={3}>
                        <Grid item xs={4}>
                            <img style={{maxWidth:'100%', height:'auto', marginRight:'2vw'}} src={images.vision} alt="Vision"/>
                        </Grid>
                        <Grid item xs={4}>
                            <img style={{maxWidth:'100%', height:'auto'}} src={images.moonknight} alt="Moon Knight"/>
                        </Grid>
                        <Grid item xs={4}>
                            <img style={{maxWidth:'100%', height:'auto'}} src={images.shang} alt="Shang Chi"/>
                        </Grid>
                    </Grid>
                    
                    <Grid container sx={myStyles.main3} spacing={4}>
                        <Grid item xs={4}>
                            <h3 style={myStyles.mainH3}>Who We Are</h3>
                            <h6 style={myStyles.mainH6}>
                                If you are a fan of using traditional API routes, we have those for you!
                            </h6>
                        </Grid>
                        <Grid item xs={4}>
                            <h3 style={myStyles.mainH3}>Our Purpose</h3>
                            <h6 style={myStyles.mainH6}>
                                If you want ALL data from one endpoint, we have that too!
                            </h6>
                        </Grid>
                        <Grid item xs={4}>
                            <h3 style={myStyles.mainH3}>Newsletter</h3>
                            <h6 style={myStyles.mainH6}>
                                All data will be persisted inside of a secure Postgres Database.
                            </h6>
                        </Grid>
                    </Grid>

                </Container>
            <Footer/>
        </Box>
    )
}