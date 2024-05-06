import React from "react";
import Box from "@mui/material/Box";
import ImageOverlay from './components/overlayImage';
import Grid from '@mui/material/Grid'
import { Typography } from "@mui/material";
import './css/Homepage.css'
import { useNavigate } from "react-router-dom";

function Homepage () {
    const isa_text =<p>
                    Prepare
                    <br/>
                    for your 
                    <br/>
                    ISA
                    <br/>
                    Assessment
                    </p>
    const blog_text =<p>
                     Visit
                     <br/>
                     my Blogs 
                     <br/>
                     to Learn More 
                     <br/>
                     about Trees
                     </p>
    let navigateTo = useNavigate();

    function routeChange(path){
        navigateTo(path);
    }
    return (
        <>
        
        <div style={{
            backgroundImage: `url('image/homepage_bg.jpg')`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            width:'100%', 
            height:'500px',
            // Placing the innner box at the center relatively
            display: 'flex',
            paddingLeft: '10%',
            paddingRight: '10%',
            // justifyContent: 'center',
            alignItems: 'center'
        }}>
            <Typography variant="h1" color="#FFFFFF">
                Learn <br/> Everythings <br/> About Trees
            </Typography>
        </div>
        
        <Grid container layout={'row'} sx ={{padding:'1%'}}> 
            <Grid item xs={12} sm={6} md={6} sx ={{display:'flex', justifyContent:'space-around', marginTop:'2%'}}>
                <button className='homepage_button' type='button'>
                <ImageOverlay img='image/ISAAssessment.jpg' img_text={isa_text}/>
                </button>
            </Grid>
            <Grid item xs={12} sm={6} md={6} sx ={{display:'flex', justifyContent:'space-around', marginTop:'2%'}}>
                <button className='homepage_button' type='button' onClick={() => routeChange('blogs')}>
                    <ImageOverlay img='image/TreeBlog.jpg' img_text={blog_text}/>
                </button>
            </Grid>
        </Grid>
        </>
    )
}

export default Homepage