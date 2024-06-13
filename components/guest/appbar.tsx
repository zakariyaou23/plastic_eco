"use client";
import { AppBar, Box, Button, Container, Divider, Drawer, Menu, MenuItem, Toolbar, Typography } from "@mui/material";
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
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const [anchorE2, setAnchorE2] = useState<null | HTMLElement>(null);
    const anchor = Boolean(anchorEl);
    const anchor2 = Boolean(anchorE2);
    const toggleDrawer = (newOpen: boolean) => () => {
        setOpen(newOpen);
    };

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleClick2 = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorE2(event.currentTarget);
    };
    const handleClose2 = () => {
        setAnchorE2(null);
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
                                <Typography className="font-bold" color="text.primary" sx={{ py: '6px', px: '12px' }}>
                                    Map
                                </Typography>
                            </Link>
                            <Link href={"/post"}>
                                <Typography className="font-bold" color="text.primary" sx={{ py: '6px', px: '12px' }}>
                                    Posts
                                </Typography>
                            </Link>
                            <Typography 
                                    className="font-bold hover:cursor-pointer" 
                                    color="text.primary" 
                                    id="button"
                                    aria-controls={anchor ? 'menu' : undefined}
                                    aria-haspopup="true"
                                    aria-expanded={anchor ? 'true' : undefined}
                                    onClick={handleClick}
                                    sx={{ py: '6px', px: '12px' }}
                                    >
                                Open Your Business
                            </Typography>
                            <Menu
                                id="menu"
                                anchorEl={anchorEl}
                                open={anchor}
                                onClose={handleClose}
                                MenuListProps={{
                                'aria-labelledby': 'button',
                                }}
                            >
                                <Link href={"/machines"}>
                                    <MenuItem onClick={handleClose}>Machines</MenuItem>
                                </Link>
                                <Link href={"/processes"}>
                                    <MenuItem onClick={handleClose}>Manufacturing Process</MenuItem>
                                </Link>
                            </Menu>
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
                                variant="text"
                                size="small"
                                className="text-green-700"
                            >
                                Sign in
                            </Button>
                        </Link>
                        <Link href={"/register"}>
                            <Button
                                variant="contained"
                                size="small"
                                className='bg-green-700'
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
                                    <Typography>
                                        Maps
                                    </Typography>
                                </Link>
                                
                                <Link href={"/post"} className="my-4">
                                    <Typography>
                                        Posts
                                    </Typography>
                                </Link>
                                
                                <Typography
                                    className="font-bold hover:cursor-pointer" 
                                    id="button2"
                                    aria-controls={anchor2 ? 'menu2' : undefined}
                                    aria-haspopup="true"
                                    aria-expanded={anchor2 ? 'true' : undefined}
                                    onClick={handleClick2}
                                    >
                                    Open Your Business
                                </Typography>
                                <Menu
                                    id="menu2"
                                    anchorEl={anchorE2}
                                    open={anchor2}
                                    onClose={handleClose2}
                                    MenuListProps={{
                                    'aria-labelledby': 'button2',
                                    }}
                                >
                                    <Link href={"/machines"}>
                                        <MenuItem onClick={handleClose2}>Machines</MenuItem>
                                    </Link>
                                    <Link href={"/processes"}>
                                    <MenuItem onClick={handleClose2}>Manufacturing Process</MenuItem>
                                    </Link>
                                </Menu>
                                <Divider />
                                <div className="my-2">
                                    <Link href={"/register"}>
                                        <Button
                                            className="bg-green-700"
                                            variant="contained"
                                            sx={{ width: '100%' }}
                                        >
                                            Sign up
                                        </Button>
                                    </Link>
                                </div>
                                <div>
                                    <Link href={"/login"}>
                                        <Button
                                            className="text-green-700 border-green-700"
                                            variant="outlined"
                                            sx={{ width: '100%' }}
                                        >
                                            Sign in
                                        </Button>
                                    </Link>
                                </div>
                            </Box>
                        </Drawer>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
}