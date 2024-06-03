import {
  Box,
  Button,
  Container,
  Grid,
  Link,
  TextField,
  Typography,
  Switch,
  FormControlLabel,
} from '@mui/material';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Role, registerUser } from './helpers/authFunctions';

export const SignUp = () => {
  const [values, setValues] = useState({
    email: '',
    username: '',
    password: '',
    role: Role.PLAYER,
    teamName: '',
  });

  const navigate = useNavigate();

  const handleSubmit = async (e: {
    preventDefault: () => void;
    currentTarget: HTMLFormElement | undefined;
  }) => {
    e.preventDefault();
    console.log(values);
    try {
      await registerUser({
        email: values.email,
        username: values.username,
        password: values.password,
        role: values.role,
        teamName: values.teamName,
      });
      console.log('dupa2');
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <Container component="main" maxWidth="xs">
      <Box
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Typography component="h1" variant="h3">
          Warhammer Cards Manager
        </Typography>
        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
          <TextField
            value={values.email}
            onChange={(e) => {
              setValues({
                ...values,
                email: e.target.value,
              });
            }}
            margin="normal"
            variant="standard"
            required
            fullWidth
            id="email"
            label="Email"
            name="email"
            autoComplete="email"
            autoFocus
          />
          <TextField
            value={values.username}
            onChange={(e) => {
              setValues({
                ...values,
                username: e.target.value,
              });
            }}
            margin="normal"
            variant="standard"
            required
            fullWidth
            id="username"
            label="Username"
            name="username"
            autoComplete="usernames"
            autoFocus
          />
          <TextField
            value={values.password}
            onChange={(e) => {
              setValues({
                ...values,
                password: e.target.value,
              });
            }}
            margin="normal"
            variant="standard"
            required
            fullWidth
            name="password"
            label="Hasło"
            type="password"
            id="password"
            autoComplete="current-password"
          />
          <TextField
            value={values.teamName}
            onChange={(e) => {
              setValues({
                ...values,
                teamName: e.target.value,
              });
            }}
            margin="normal"
            variant="standard"
            required
            fullWidth
            id="teamName"
            label="Nazwa Drużyny"
            name="teamName"
            autoComplete="teamName"
            autoFocus
          />
          <FormControlLabel
            control={
              <Switch
                checked={values.role === Role.GAME_MASTER}
                onChange={(event) => {
                  setValues({
                    ...values,
                    role: event.target.checked ? Role.GAME_MASTER : Role.PLAYER,
                  });
                }}
                name="role"
                color="primary"
              />
            }
            label={values.role === Role.GAME_MASTER ? 'Game Master' : 'Player'}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Zarejestruj się
          </Button>
          <Grid container>
            <Grid item>
              <Link
                href="#"
                variant="body2"
                onClick={() => navigate('../login')}
              >
                {'Masz już konto? Zaloguj się'}
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Container>
  );
};
