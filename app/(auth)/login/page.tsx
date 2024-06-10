"use client";
import React, { useState } from 'react';
import { Box, Stack, Button, Checkbox, FormControl, FormControlLabel, FormLabel, Link as MuiLink, TextField, Typography } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowAltCircleLeft } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';
import ForgotPassword from '@/components/auth/forgotpassword';
import { Container as SignInContainer, Card } from '@/components/auth/custom';


export default function SignIn() {
  const [emailErrorMessage, setEmailErrorMessage] = useState('');
  const [passwordErrorMessage, setPasswordErrorMessage] = useState('');
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
  };

  const validateInputs = () => {
    const email = document.getElementById('email') as HTMLInputElement;
    const password = document.getElementById('password') as HTMLInputElement;

    let isValid = true;

    if (!email.value || !/\S+@\S+\.\S+/.test(email.value)) {
      setEmailErrorMessage('Please enter a valid email address.');
      isValid = false;
    } else {
      setEmailErrorMessage('');
    }

    if (!password.value || password.value.length < 6) {
      setPasswordErrorMessage('Password must be at least 6 characters long.');
      isValid = false;
    } else {
      setPasswordErrorMessage('');
    }

    return isValid;
  };

  return (
    <SignInContainer direction="column" justifyContent="space-between">
        <Stack
          direction="row"
          sx={{
            justifyContent: 'space-between',
            position: { xs: 'static', sm: 'fixed' },
            width: '100%',
            p: { xs: 2, sm: 4 },
          }}
        >
          <Link href={"/"}>
            <Button
              startIcon={<FontAwesomeIcon icon={faArrowAltCircleLeft} />}
            >
              Back
            </Button>
          </Link>
          
        </Stack>
        <Stack
          sx={{
            justifyContent: 'center',
            height: { xs: '100%', sm: '100dvh' },
            p: 2,
          }}
        >
          <Card>
            <Typography
              component="h1"
              variant="h4"
              sx={{ width: '100%', fontSize: 'clamp(2rem, 10vw, 2.15rem)' }}
            >
              Sign in
            </Typography>
            <Box
              component="form"
              onSubmit={handleSubmit}
              noValidate
              sx={{
                display: 'flex',
                flexDirection: 'column',
                width: '100%',
                gap: 2,
              }}
            >
              <FormControl>
                <FormLabel htmlFor="email">Email</FormLabel>
                <TextField
                  error={emailErrorMessage.length != 0}
                  helperText={emailErrorMessage}
                  id="email"
                  type="email"
                  name="email"
                  placeholder="your@email.com"
                  autoComplete="email"
                  autoFocus
                  required
                  fullWidth
                  variant="outlined"
                  color={emailErrorMessage.length != 0 ? 'error' : 'primary'}
                  sx={{ ariaLabel: 'email' }}
                />
              </FormControl>
              <FormControl>
                <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                  <FormLabel htmlFor="password">Password</FormLabel>
                  <MuiLink
                    component="button"
                    onClick={handleClickOpen}
                    variant="body2"
                    sx={{ alignSelf: 'baseline' }}
                  >
                    Forgot your password?
                  </MuiLink>
                </Box>
                <TextField
                  error={passwordErrorMessage.length != 0}
                  helperText={passwordErrorMessage}
                  name="password"
                  placeholder="••••••"
                  type="password"
                  id="password"
                  autoComplete="current-password"
                  required
                  fullWidth
                  variant="outlined"
                  color={passwordErrorMessage.length != 0 ? 'error' : 'primary'}
                />
              </FormControl>
              <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Remember me"
              />
              <ForgotPassword open={open} handleClose={handleClose} />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                onClick={validateInputs}
              >
                Sign in
              </Button>
              <Link href={"/register"} className='text-center'>
              <MuiLink
                variant="body2"
              >
                Don&apos;t have an account? Sign up
              </MuiLink>
              </Link>
              
            </Box>
          </Card>
        </Stack>
      </SignInContainer>
  );
}