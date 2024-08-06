import { Grid, Paper, Typography, TextField, Button, Box } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom';
import PageContainer from '../../components/HOC/PageContainer'

export default function Forgot() {
    return (
        <PageContainer
            showheader
            showfooter
            bgcolor="#8590AD" display="flex" justifyContent='center' alignItems='center'>
            <Paper sx={{ borderRadius: '20px' }}>
                <Grid item p={3} >
                    <form>

                        <Grid item mt={2}>
<<<<<<< HEAD
                            <Typography fontSize='medium'>Forgot Your Password?</Typography>
=======
                            <Typography fontSize={'xx-large'}>Forgot Your Password?</Typography>
>>>>>>> 39b26a963521c00ba62d3e6d0a15aed2f3838da5
                        </Grid>
                        <Grid item mt={2}>
                            <Typography fontSize='medium'>Please enter the email address you`d like your password reset information sent to</Typography>
                        </Grid>
                        <Grid item mt={3}>
                            <TextField label="Enter Email Address" variant="outlined" size='small' fullWidth />
                        </Grid>
                        <Grid item mt={3} >
                            <Link to="/Reset"><Button variant='contained' color='primary' fullWidth type='submit'>Request Reset Password</Button></Link>
                        </Grid>
                        <Grid item mt={2} textAlign='center'>
                            <Link to="/" style={{ textDecoration: "none" }}>Back to Login</Link>
                        </Grid>
                    </form>
                </Grid>
            </Paper>
        </PageContainer>
    )
}