import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import authService from '../service/auth.service';
import Snackbar from "@mui/material/Snackbar";

function Copyright(props) {
    return (
      <Typography variant="body2" color="text.secondary" align="center" {...props}>
        {'Copyright © '}
        <Link color="inherit" href="https://mui.com/">
          TriumphBet
        </Link>{' '}
        {new Date().getFullYear()}
        {'.'}
      </Typography>
    );
  }


const theme = createTheme();

export default function SignUp() {
    let navigate = useNavigate();
    const [firstName, setName] = useState("");
    const [lastName, setSurname] = useState("");
    const [email, setEmail] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [successful, setSuccessful] = useState(false);
    const [message, setMessage] = useState("");
    const [snackbarMessage, setSnackbarMessage] = useState(false);
  
    const handleSubmit = (event) => {
      event.preventDefault();
      setMessage("");
      setSuccessful(false);
  
      let regEmail =
        /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      if (!regEmail.test(email)) {
        alert("Invalid email address!");
        return;
      }
  
      if (
        !firstName || firstName.length <3 || lastName.length <3|| password.length <3|| username.length <3||
        !lastName ||
        !email ||
        !username ||
        !password ||
        firstName === "undefined" ||
        lastName === "undefined" ||
        email === "undefined" ||
        username === "undefined" ||
        password === "undefined"
      ) {
        alert("Please fill in all required fields!");
        return;
      }
  
      authService.register(firstName, lastName, email,username,  password).then(
        (response) => {
          setMessage(response.data.message);
          setSuccessful(true);
          alert("Successful registration! Please verify your email!");
          navigate("/login");
        },
        (error) => {
          const resMessage =
            (error.response &&
              error.response.data &&
              error.response.data.message) ||
            error.message ||
            error.toString();
  
          setMessage(resMessage);
          setSuccessful(false);
          setSnackbarMessage("Registration unsuccessful!")
        }
      );
  
      console.log(successful);
      console.log(message);
    };

    const onChangeName = (e) => {
        const name = e.target.value;
        setName(name);
      };
    
      const onChangeSurname = (e) => {
        const surname = e.target.value;
        setSurname(surname);
      };
    
      const onChangeEmail = (e) => {
        const email = e.target.value;
        setEmail(email);
      };
      const onChangeUsername = (e) => {
        const username = e.target.value;
        setUsername(username);
      };

      const onChangePassword = (e) => {
        const password = e.target.value;
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
          Sign up
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
          <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="given-name"
                  name="firstName"
                  required
                  fullWidth
                  id="firstName"
                  label="First Name"
                  autoFocus
                  onChange={onChangeName}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="lastName"
                  label="Last Name"
                  name="lastName"
                  autoComplete="family-name"
                  onChange={onChangeSurname}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  onChange={onChangeEmail}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="username"
                  label="Username"
                  name="username"
                  autoComplete="username"
                  onChange={onChangeUsername}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                  onChange={onChangePassword}
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign Up
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link href="/login" variant="body2">
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 8, mb: 4 }} />
      </Container>
      <Snackbar
        open={snackbarMessage !== ""}
        autoHideDuration={3000}
        onClose={() => setSnackbarMessage("")}
        message={snackbarMessage}
      />
    </ThemeProvider>
  );
}