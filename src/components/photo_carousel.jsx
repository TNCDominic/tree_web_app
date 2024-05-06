import React from 'react'
import Carousel from 'react-material-ui-carousel'
import { Paper, Button } from '@mui/material'
import styled from '@emotion/styled'

function PhotoSlide(props){
    var items = [
        {
            img_src: '/image/Saraca_Indica/photo_1.jpeg'
        },
        {
            img_src: '/image/Saraca_Indica/photo_2.jpeg'
        },
        {
            img_src: '/image/Saraca_Indica/photo_3.jpeg'
        },
        {
            img_src: '/image/Saraca_Indica/photo_4.jpeg'
        }
    ]
    
    return (
        <div>
            <Carousel>
                {
                    items.map(
                        (item, i) => <Item key={i} item={item} />
                    )
                }
            </Carousel>
        </div>
    )
}

function Item(props)
{
    return (
        <Paper sx={{
            boxShadow: "none"
        }}>
            <img src={props.item.img_src} alt="城市中的無憂樹𝙎𝙖𝙧𝙖𝙘𝙖 𝙞𝙣𝙙𝙞𝙘𝙖" style={{height:'500px', marginLeft: "auto", marginRight: "auto", display: "flex", justifyContent: "center"}}></img>
        </Paper>
    )
}

export default PhotoSlide