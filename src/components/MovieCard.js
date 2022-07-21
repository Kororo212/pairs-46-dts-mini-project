import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Rating } from '@mui/material';
import { useNavigate} from 'react-router-dom';


export default function MovieCard({movie}) {
let navigate = useNavigate();
const test = (data)=>{
  navigate(`/detail/${data}`)

}


const BaseImageUrl = "https://image.tmdb.org/t/p/original";

  return (
    <Card id={movie.id} sx={{ display: 'flex', marginTop:8,width:350, mb:5}} onClick={()=>{test(movie.id)}}>
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <CardContent sx={{ flex: '1 0 auto' }}>
      <CardMedia
        component="img"
        sx={{ width: 150,height:225 }}
        image= {`${BaseImageUrl}${movie.poster_path}`}
        alt="Poster_Movie"
      />
        </CardContent>
      </Box>
        <Box sx={{ display: 'flex', alignItems: 'left', pl: 1, pb: 1,flexDirection:'column',justifyContent:'center' }}>
            <Typography component="div" variant="h6" >
            {movie.title}
            </Typography>
            <Typography variant="subtitle1" color="text.secondary" component="div">
             {new Date(movie.release_date).getFullYear()}
            </Typography>
            <Rating name="read-only" precision={0.1} value={movie.vote_average/2} readOnly />
          {/* <IconButton aria-label="previous">
            {theme.direction === 'rtl' ? <SkipNextIcon /> : <SkipPreviousIcon />}
            </IconButton>
            <IconButton aria-label="play/pause">
            <PlayArrowIcon sx={{ height: 38, width: 38 }} />
            </IconButton>
            <IconButton aria-label="next">
            {theme.direction === 'rtl' ? <SkipPreviousIcon /> : <SkipNextIcon />}
        </IconButton> */}
        <Box sx={{}}>{movie.vote_average.toFixed(2)}</Box>
        </Box>
    </Card>
  );
}
