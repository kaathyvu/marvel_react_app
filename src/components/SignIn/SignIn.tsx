import React, { useState } from 'react';
import { NavBar, Footer } from '../../components';
import firebase from 'firebase/app';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import {
    getAuth,
    GoogleAuthProvider,
    onAuthStateChanged,
    signOut,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
} from 'firebase/auth';
import { 
    Box,
    Button,
    Container,
    Grid,
    Snackbar,
    Alert as MUIAlert,
    AlertProps,
    AlertTitle,
    CircularProgress,
    Typography,
} from '@mui/material';
import images from '../../assets/images/index.js'
import { useNavigate, Link } from 'react-router-dom';
import { styled } from '@mui/system';
import { useForm } from 'react-hook-form';
import { Input, PwInput } from '../sharedComponents/Input'

const myStyles = {
    container: {
        backgroundColor: 'white',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        width:'70%',
    },
    headerButton: {
        fontFamily: 'bangers',
        color: 'white',
        fontSize: '28px',
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
    headerButton2: {
        fontFamily: 'bangers',
        color: '#d61a28',
        fontSize: '28px',
        borderRadius: '7px',
        border: '2px solid #d61a28',
        backgroundColor: 'white',
        padding:'0 4vh 0 4vh',
        margin:'0.5vw 0 0 0',
        "&:hover": {
            color:'white',
            backgroundColor: '#d61a28',
            transition: '0.25s ease',
        }
    },
    headerH1: {
        fontFamily: 'bangers',
        fontSize: '3.5em',
        lineHeight: '1em',
        margin: '3vh 0 1vh 0',
    },
    mainH6: {
        fontSize: '1em',
        marginTop: '5vh',
    },
    form: {
        display: 'flex',
        justifyContent: 'space-evenly',
        alignItems: 'center',
    },
}

const NavA = styled(Link) ({
    fontFamily: 'arimo',
    fontSize: '1em',
    display: 'block',
    color: '#d61a28',
    textDecoration: 'none',
    "&:hover": {
        color: 'black',
        transition: '0.25s ease'
    }
})

interface buttonProps {
    open?: boolean,
    onClick?: () => void
}

interface userProps {
    email?: any,
    password?: any
}

const Alert = (props:AlertProps) => {
    return <MUIAlert elevation={6} variant='filled'/>
}

const GoogleButton = (props:buttonProps) => {
    const navigate = useNavigate();
    const provider = new GoogleAuthProvider();
    const auth = getAuth();
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);

    const signIn = async () => {
        await signInWithGoogle()
        localStorage.setItem('myAuth', 'true')
        navigate('/')
    }

    if (loading) {
        return <CircularProgress/>
    }

    let MyAuth = localStorage.getItem('myAuth')
    if (MyAuth == 'true') {
        return (
            <Box>
            <NavBar/>

            <Container sx={myStyles.container}>
                <Grid container sx={{textAlign:'center'}}>
                    <Grid item xs={12}>
                        <h6 style={myStyles.mainH6}>You are already signed in!</h6>
                        <Button sx={myStyles.headerButton2} href='/dashboard'>Dashboard</Button>
                        <Button sx={myStyles.headerButton} href='/signout'>Sign Out</Button>
                    </Grid>
                </Grid>
            </Container>
            <Footer/>
        </Box>
        )
    } else {
        return (
            <Button sx={myStyles.headerButton} onClick={signIn}>Sign In With Google</Button>
        )
    }
}

export const SignIn = () => {
    const [open, setOpen] = useState(false);
    const navigate = useNavigate();
    const { register, handleSubmit } = useForm({});
    const auth = getAuth();

    const handleSnackOpen = () => {
        setOpen(true);
    };

    const handleSnackClose = () => {
        setOpen(false);
        navigate('/')
    };

    const onSubmit = async (data: any, event: any) => {
        console.log(data.email, data.password)

        signInWithEmailAndPassword(auth, data.email, data.password)
            .then((userCredential) => {
                localStorage.setItem('myAuth', 'true')
                const user = userCredential.user
                navigate('/')
            })
            .catch((error) => {
                console.log(error.message)
            })
    }

    let MyAuth = localStorage.getItem('myAuth')
    if (MyAuth == 'true') {
        return (
            <Box>
            <NavBar/>

            <Container sx={myStyles.container}>
                <Grid container sx={{textAlign:'center'}}>
                    <Grid item xs={12}>
                        <h6 style={myStyles.mainH6}>You are already signed in!</h6>
                        <Button sx={myStyles.headerButton2} href='/dashboard'>Dashboard</Button>
                        <Button sx={myStyles.headerButton} href='/signout'>Sign Out</Button>
                    </Grid>
                </Grid>
            </Container>
            <Footer/>
        </Box>
        )
    } else {
        return (
            <Box>
                <NavBar/>
                <Container sx={myStyles.container}>

                    <Grid container sx={myStyles.form}>
                        <Grid item xs={6}>
                            <h1 style={myStyles.headerH1}>Sign In Here!</h1> 
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <div>
                                    <label htmlFor='email'><b>Email</b></label>
                                    <Input {...register('email')} name='email' placeholder='Enter Email'/>
                                </div>
                                <div>
                                    <label htmlFor='password'><b>Password</b></label>
                                    <PwInput {...register('password')} name='password' placeholder='Enter Password'/>
                                </div>
                                    <Button sx={myStyles.headerButton2} type='submit'>Submit</Button>
                                    <GoogleButton open={open} onClick={handleSnackClose}/>
                            </form>

                            <h6 style={myStyles.mainH6}>Don't have an account?</h6>
                            <NavA to='/signup'>Register Now!</NavA>

                            <Snackbar message="Success" open={open} autoHideDuration={3000}>
                                <Alert severity='success'> 
                                    <AlertTitle>Successful Sign In. Redirecting to Home Page</AlertTitle>
                                </Alert>
                            </Snackbar>
                        </Grid>

                        <Grid item xs={5}>
                            <img src={images.scarlett} alt="Scarlet Witch" style={{maxWidth:'100%'}}/>
                        </Grid>
                    </Grid>

                </Container>
                <Footer/>
            </Box>
        )
    }
}

export const SignUp = () => {
    const [open, setOpen] = useState(false);
    const navigate = useNavigate();
    const { register, handleSubmit } = useForm({})
    const auth = getAuth()

    const handleSnackOpen = () => {
        setOpen(true)
    }

    const handleSnackClose = () => {
        setOpen(false)
    }

    const onSubmit = async (data: any, event: any) => {
        console.log(data.email, data.password)
        console.log(auth)

        createUserWithEmailAndPassword(auth, data.email, data.password)
            .then((userCredential) => {
                console.log(userCredential)
                const user = userCredential.user;
                console.log(user)
                navigate('/signin')
            })
            .catch((error) => {
                console.log(error.message)
            })
    }

    return (
        <Box>
            <NavBar/>
            <Container sx={myStyles.container}>

                <Grid container sx={myStyles.form}>
                    <Grid item xs={3}>
                        <img src={images.loki} alt="Loki" style={{maxWidth:'100%'}}/>
                    </Grid>

                    <Grid item xs={6}>
                        <h1 style={myStyles.headerH1}>Create an Account!</h1> 
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div>
                                <label htmlFor='email'><b>Email</b></label>
                                <Input {...register('email')} name='email' placeholder='Enter Email'/>
                            </div>
                            <div>
                                <label htmlFor='password'><b>Password</b></label>
                                <PwInput {...register('password')} name='password' placeholder='Enter Password'/>
                            </div>
                                <Button sx={myStyles.headerButton} type='submit'>Submit</Button>
                        </form>

                        <Snackbar message="Success" open={open} autoHideDuration={3000}>
                            <Alert severity='success'> 
                                <AlertTitle>Successful Sign Up. Redirecting to Sign In</AlertTitle>
                            </Alert>
                        </Snackbar>
                    </Grid>

                </Grid>

            </Container>
            <Footer/>
        </Box>
    )
}

export const SignUsOut = () => {
    localStorage.setItem('myAuth', 'false')

    return (
        <Box>
        <NavBar/>

        <Container sx={myStyles.container}>
            <Grid container sx={{textAlign:'center'}}>
                <Grid item xs={12}>
                    <h6 style={myStyles.mainH6}>You have successfully signed out!</h6>
                    <Button sx={myStyles.headerButton} href='/'>Return to Home</Button>
                </Grid>
            </Grid>
        </Container>
        <Footer/>
    </Box>
    )
}