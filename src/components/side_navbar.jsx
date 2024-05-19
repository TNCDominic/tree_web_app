import React from "react";
import '../App.css'
import { 
    Box,
    Button,
    AppBar, 
    Toolbar,
    Drawer,
    IconButton, 
    Typography, 
    Divider,
    List,
    ListItem,
    ListItemButton,
    ListItemText,
    CssBaseline,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import HomeIcon from "@mui/icons-material/Home";
import { createTheme, responsiveFontSizes } from '@mui/material/styles';
import { ThemeProvider } from "@emotion/react";
import { useNavigate } from "react-router-dom";

const drawerWidth = 240;
const navItems = ['被子植物 (Magnoliophyta)', 
                  '真蕨 (Filicophyta)',
                  '地錢 (Marchantiophyta)',
                  '苔類植物 (Bryophyta)'];

function TopNavBar({title}) {
    const [mobileOpen, setMobileOpen] = React.useState(false)
    const navigateToParent = (path) => {
        window.location.href = path
      };
    const toggleDrawer = (newOpen) => () => {
        setMobileOpen(newOpen);
      };
    const drawer = (
        <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer(false)}>
            <Typography variant="h6" sx={{ my:2, textAlign:'center'}}>
                Category
            </Typography>
            <Divider/>
            <List>
                {navItems.map((item) => (
                    <ListItem key={item} disablePadding>
                    <ListItemButton sx={{ textAlign: 'center' }}>
                        <ListItemText primary={item} />
                    </ListItemButton>
                    </ListItem>
                ))}
            </List>
        </Box>
    );

    let font_theme = createTheme();
    font_theme = responsiveFontSizes(font_theme);

    return (
    <div className="header">
        <Box sx={{ flexGrow:1 }}>
            <CssBaseline/>
            <AppBar position="static">
                <Toolbar>
                    <IconButton 
                        className='icon_button'
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        onClick={toggleDrawer(true)}
                        sx={{mr:1}}
                        >
                            <MenuIcon/>
                    </IconButton>
                    <ThemeProvider theme={font_theme}>
                    <Typography variant="h5" component="div" sx={{flexGrow:1}}>
                        {title}
                    </Typography>
                    </ThemeProvider>
                    <IconButton 
                        className='icon_button'
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{mr:2}}
                        onClick={()=>navigateToParent('/')}
                        >
                            <HomeIcon/>
                    </IconButton>
                </Toolbar>
            </AppBar>
        </Box>

        <Drawer 
            open={mobileOpen}
            onClose={toggleDrawer(false)}>
            {drawer}
        </Drawer>
    </div>
    )
}

export default TopNavBar