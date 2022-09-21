import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import Snackbar from '@mui/material/Snackbar';
import authService from '../service/auth.service';



const theme = createTheme();

export default function SignIn(props) {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [snackbarMessage, setSnackbarMessage] = useState(false);
  
    let navigate = useNavigate();
  
  
    const handleSubmit = (event) => {
      event.preventDefault();
  
      if(!username || !password ||
        username === 'undefined' ||
        password === 'undefined')
        {
             alert('Please fill in all required fields!')
             return;
        }
   
      authService.login(username, password).then(
        () => {
          props.setLoggedIn(true);
          var roles=authService.getToken().roles;
          var admin=false;
          roles.forEach(element => {
            if(element === "ROLE_ADMIN"){
              admin=true;
            }
          });
          if(admin){
            props.setRole("ROLE_ADMIN");
          }else{
            props.setRole("ROLE_CLIENT");
          }
          setSnackbarMessage("Successful login!")
          navigate("/");
        },
        (error) => {
          const resMessage =
            (error.response &&
              error.response.data &&
              error.response.data.message) ||
            error.message ||
            error.toString();
          console.log(error);
          setSnackbarMessage("Error loging in. Please check if you have verified your email!")
        }
      );
   
  
    };

    const onChangeUsername = (e) => {
        const username = e.target.value;
        console.log(username);
        setUsername(username);
      };
    
      const onChangePassword = (e) => {
        const password = e.target.value;
        console.log(password);
        setPassword(password);
      };
  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Login
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
          <TextField
              margin="normal"
              required
              fullWidth
              id="username"
              label="Username"
              name="username"
              autoComplete="username"
              autoFocus
              onChange={onChangeUsername}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              onChange={onChangePassword}
              autoComplete="current-password"
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item>
                <Link href="/signUp" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
      <Snackbar
                        open={snackbarMessage !== ''}
                        autoHideDuration={3000}
                        onClose={() => setSnackbarMessage('')}
                        message={snackbarMessage}
                    />
    </ThemeProvider>
  );
}
