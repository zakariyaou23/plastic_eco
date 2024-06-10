"use client";
import { Stack, Card as MuiCard } from '@mui/material';
import { styled } from '@mui/material/styles';

export const Container = styled(Stack)(({ theme }) => ({
    height: 'auto',
    paddingBottom: theme.spacing(12),
    backgroundImage:
      theme.palette.mode === 'light'
        ? 'radial-gradient(ellipse at 50% 50%, hsl(210, 100%, 97%), hsl(0, 0%, 100%))'
        : 'radial-gradient(at 50% 50%, hsla(210, 100%, 16%, 0.3), hsl(220, 30%, 5%))',
    backgroundRepeat: 'no-repeat',
    [theme.breakpoints.up('sm')]: {
      paddingBottom: 0,
      height: '100dvh',
    },
  }));
export const Card = styled(MuiCard)(({ theme }) => ({
    display: 'flex',
    flexDirection: 'column',
    alignSelf: 'center',
    gap: theme.spacing(4),
    width: '100%',
    padding: theme.spacing(2),
    boxShadow:
      theme.palette.mode === 'light'
        ? 'hsla(220, 30%, 5%, 0.05) 0px 5px 15px 0px, hsla(220, 25%, 10%, 0.05) 0px 15px 35px -5px, hsla(220, 30%, 5%, 0.05) 0px 0px 0px 1px'
        : 'hsla(220, 30%, 5%, 0.5) 0px 5px 15px 0px, hsla(220, 25%, 10%, 0.08) 0px 15px 35px -5px, hsla(220, 30%, 5%, 0.05) 0px 0px 0px 1px',
    [theme.breakpoints.up('sm')]: {
      padding: theme.spacing(4),
      width: '450px',
    },
  }));