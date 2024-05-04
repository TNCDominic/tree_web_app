import PhotoSlide from './components/photo_carousel'
import BlogText from './components/blog_text.jsx'
import { grid_row_height } from './constant/layout_params.jsx'
import { ThemeProvider } from '@mui/material/styles'
import { theme } from './constant/theme.jsx'
import TopNavBar from './components/side_navbar.jsx'
import './css/BlogContent.css'
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper'

function blogContent(){
    return(
    <>
        <ThemeProvider theme = {theme}>
            <TopNavBar/>

            <Grid container layout={'row'} sx={{paddingTop:'2%', paddingLeft:'2%', paddingRight:'2%', height:'100px'}}>
                <Grid item xs={12} sm={6} md={8}>
                    <Box sx={{display: "flex", 
                              flexDirection:"column",
                              height: grid_row_height,
                              borderRadius :3,
                              bgcolor: theme.palette.primary.blogTextbg,
                              overflow: "hidden",
                              overflowY: "scroll"}}>
                        <BlogText/>                        
                    </Box>

                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                    <Paper height={'100%'} sx={{boxShadow: "none"}}>
                        <PhotoSlide/>
                    </Paper>
                </Grid>
            </Grid>
        </ThemeProvider>
    </>
    )
}

export default blogContent