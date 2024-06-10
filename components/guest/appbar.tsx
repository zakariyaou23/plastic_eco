"use client";
import { AppBar, Box, Button, Container, Divider, Drawer, MenuItem, Toolbar, Typography } from "@mui/material";
import Image from "next/image";
import logo from "@/public/logo-no-bg.png";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
const logoStyle = {
    cursor: 'pointer',
};
export default function Appbar() {
    const [open, setOpen] = useState(false);

    const toggleDrawer = (newOpen: boolean) => () => {
        setOpen(newOpen);
    };
    return (
        <AppBar position="fixed"
            sx={{
                boxShadow: 0,
                bgcolor: 'transparent',
                backgroundImage: 'none',
                mt: 2,
            }}>
            <Container maxWidth="lg">
                <Toolbar
                    variant="regular"
                    sx={(theme) => ({
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        flexShrink: 0,
                        borderRadius: '999px',
                        bgcolor:
                            theme.palette.mode === 'light'
                                ? 'rgba(255, 255, 255, 0.4)'
                                : 'rgba(0, 0, 0, 0.4)',
                        backdropFilter: 'blur(24px)',
                        maxHeight: 40,
                        border: '1px solid',
                        borderColor: 'divider',
                        boxShadow:
                            theme.palette.mode === 'light'
                                ? `0 0 1px rgba(85, 166, 246, 0.1), 1px 1.5px 2px -1px rgba(85, 166, 246, 0.15), 4px 4px 12px -2.5px rgba(85, 166, 246, 0.15)`
                                : '0 0 1px rgba(2, 31, 59, 0.7), 1px 1.5px 2px -1px rgba(2, 31, 59, 0.65), 4px 4px 12px -2.5px rgba(2, 31, 59, 0.65)',
                    })}
                >
                    <Box
                        sx={{
                            flexGrow: 1,
                            display: 'flex',
                            alignItems: 'center',
                            px: 0,
                        }}
                    >
                        <Image src={logo} width={"25"} height={"25"} className="mx-[12px]" style={logoStyle} alt={"logo"} />
                        <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
                            <Link href={"/map"}>
                                <MenuItem
                                    sx={{ py: '6px', px: '12px' }}
                                >
                                    <Typography className="font-bold" color="text.primary">
                                        Map
                                    </Typography>
                                </MenuItem>
                            </Link>
                            <Link href={"/post"}>
                                <MenuItem
                                    sx={{ py: '6px', px: '12px' }}
                                >
                                    <Typography className="font-bold" color="text.primary">
                                        Posts
                                    </Typography>
                                </MenuItem>
                            </Link>
                            
                            <MenuItem
                                onClick={() => console.log('faq')}
                                sx={{ py: '6px', px: '12px' }}
                            >
                                <Typography className="font-bold" color="text.primary">
                                    FAQ
                                </Typography>
                            </MenuItem>
                        </Box>
                    </Box>
                    <Box
                        sx={{
                            display: { xs: 'none', md: 'flex' },
                            gap: 0.5,
                            alignItems: 'center',
                        }}
                    >
                        <Link href={"/login"}>
                            <Button
                                color="primary"
                                variant="text"
                                size="small"
                            >
                                Sign in
                            </Button>
                        </Link>
                        <Link href={"/register"}>
                            <Button
                                color="primary"
                                variant="contained"
                                size="small"
                            >
                                Sign up
                            </Button>
                        </Link>

                    </Box>
                    <Box sx={{ display: { sm: '', md: 'none' } }}>
                        <Button
                            variant="text"
                            color="primary"
                            aria-label="menu"
                            onClick={toggleDrawer(true)}
                            sx={{ minWidth: '30px', p: '4px' }}
                        >
                            <FontAwesomeIcon icon={faBars} />
                        </Button>
                        <Drawer anchor="right" open={open} onClose={toggleDrawer(false)}>
                            <Box
                                sx={{
                                    minWidth: '60dvw',
                                    p: 2,
                                    backgroundColor: 'background.paper',
                                    flexGrow: 1,
                                }}
                            >
                                <Box
                                    sx={{
                                        display: 'flex',
                                        flexDirection: 'column',
                                        alignItems: 'end',
                                        flexGrow: 1,
                                    }}
                                >
                                </Box>
                                <Link href={"/map"}>
                                    <MenuItem>
                                        Maps
                                    </MenuItem>
                                </Link>
                                
                                <Link href={"/post"}>
                                    <MenuItem>
                                        Posts
                                    </MenuItem>
                                </Link>
                                
                                <MenuItem onClick={() => console.log('faq')}>FAQ</MenuItem>
                                <Divider />
                                <MenuItem>
                                    <Link href={"/register"}>
                                        <Button
                                            color="primary"
                                            variant="contained"
                                            sx={{ width: '100%' }}
                                        >
                                            Sign up
                                        </Button>
                                    </Link>
                                </MenuItem>
                                <MenuItem>
                                    <Link href={"/login"}>
                                        <Button
                                            color="primary"
                                            variant="outlined"
                                            sx={{ width: '100%' }}
                                        >
                                            Sign in
                                        </Button>
                                    </Link>
                                </MenuItem>
                            </Box>
                        </Drawer>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
}