import React from "react";
import "../App.css"
import { 
    Box, 
    AppBar, 
    Toolbar, 
    IconButton, 
    Typography 
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu"
import HomeIcon from "@mui/icons-material/Home"

const drawerWidth = 240;
const navItems = ['被子植物 (Magnoliophyta)', 
                  '真蕨 (Filicophyta)',
                  '地錢 (Marchantiophyta)',
                  '苔類植物 (Bryophyta)'];

function DrawerAppBar(props){
    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen((prevState) => !prevState);
    };

    const drawer = (
        <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
            
        </Box>
    );
}

function TopNavBar() {
    return (
        <Box sx={{ flexGrow:1 }}>
            <AppBar position="static">
                <Toolbar>
                    <IconButton 
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{mr:1}}
                        >
                            <MenuIcon/>
                    </IconButton>
                    <Typography variant="h5" component="div" sx={{flexGrow:1}}>
                        Trees
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
    )
}

export default TopNavBar