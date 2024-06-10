"use client";
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { CssBaseline } from "@mui/material";

const defaultTheme = createTheme({ palette: { mode : "light" } });

export default function Theme({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ThemeProvider theme={defaultTheme}>
        <CssBaseline />
        {children}
    </ThemeProvider>
  );
}