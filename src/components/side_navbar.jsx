import React from "react";
import "../App.css"
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
import MenuIcon from "@mui/icons-material/Menu"
import HomeIcon from "@mui/icons-material/Home"

const drawerWidth = 240;
const navItems = ['被子植物 (Magnoliophyta)', 
                  '真蕨 (Filicophyta)',
                  '地錢 (Marchantiophyta)',
                  '苔類植物 (Bryophyta)'];

function TopNavBar(props) {

    const [mobileOpen, setMobileOpen] = React.useState(false);

    const toggleDrawer = (newOpen) => () => {
        setMobileOpen(newOpen);
      };

    const drawer = (
        <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer(false)}>
            <Typography varian="6" sx={{ my:2 }}>
                Tree
            </Typography>
            <Divider/>
            <List>
                {navItems.map((item) => (
                    <ListItem key={item} disablePadding>
                    <ListItemButton sx={{ testAlign: 'center' }}>
                        <ListItemText primary={item} />
                    </ListItemButton>
                    </ListItem>
                ))}
            </List>
        </Box>
    );

    return (
        <>
        <Box sx={{ flexGrow:1 }}>
            <CssBaseline/>
            <AppBar position="static">
                <Toolbar>
                    <IconButton 
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        onClick={toggleDrawer(true)}
                        sx={{mr:1}}
                        >
                            <MenuIcon/>
                    </IconButton>
                    <Typography variant="h5" component="div" sx={{flexGrow:1}}>
                        Blog
                    </Typography>
                    <IconButton 
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{mr:2}}
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
        </>
    )
}

export default TopNavBar