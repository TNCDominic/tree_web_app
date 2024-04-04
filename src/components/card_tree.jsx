import { 
    Box, 
    Card, 
    CardContent, 
    Typography, 
    CardActions, 
    Button,
    CardMedia,
} from "@mui/material"

import photo_1 from '../assets/photo_1.jpeg'

function TreeCard(){
    return (
        <Box width='300px'>
            <Card>
                <CardMedia
                    component='img'
                    height="140px"
                    image= {photo_1}
                    alt="Image"/>
                <CardContent>
                    <Typography
                     variant="h5"
                     component="div">
                        城市中的無憂樹
                    </Typography>
                    <Typography
                     gutterBottom
                     variant="h5">
                        𝙎𝙖𝙧𝙖𝙘𝙖 𝙞𝙣𝙙𝙞𝙘𝙖
                    </Typography>
                    <Typography
                     variant="body2"
                     color='text.secondary'>
                        FABACEAE
                        𝙰𝚜𝚑𝚘𝚔𝚊/ 𝚊𝚜𝚑𝚘𝚔 briksh
                        𝙰𝚜𝚑𝚘𝚔𝚊/ 𝚊𝚜𝚑𝚘𝚔(𝘚𝘢𝘯𝘴𝘬𝘳𝘪𝘵 梵文): without sorrow
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button size="small">Share</Button>
                    <Button size="small">Learn More</Button>
                </CardActions>
            </Card>
        </Box>
    )
}

export default TreeCard