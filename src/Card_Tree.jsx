import CardMedia from '@mui/material/CardMedia'
import * as React from 'react'
import { Box, Button, Typography } from '@mui/material'
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'

function Card(){
    return(
        <div className='treeCard'>
            <img></img>
            <h2></h2>
            <p>This is a paragraph</p>
        </div>
    );
}

export default Card
// const bull = (
//     <Box
//         component="span"
//         sx={{
//             display:'inline-block',
//             mx:'2px',
//             transform: 'scale(0.8)'
//         }}
//     >
//     </Box>
// )

// const card = (
//     <React.Fragment>
//         <CardContent>
//             <Typography 
//                 sx={{fontSize:14}} 
//                 color="text.secondary" 
//                 gutterBottom
//             >
//                 Word of the Day
//             </Typography>
//         </CardContent>
//         <CardActions >
//             <Button size="small">Learn More</Button>
//         </CardActions>
//     </React.Fragment>
// )
// function CardTree(){
//     return (
//         <Box sx={{minWidth:275}}>
//             <Card variant="outlined">
//                 {card}
//             </Card>
//         </Box>
//     );
// }

// export default CardTree