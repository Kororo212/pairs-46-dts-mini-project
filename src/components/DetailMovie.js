import { Box } from "@mui/material";
import axios from "axios";
import React from "react";
import { useParams } from "react-router-dom";
import { useState,useEffect} from "react";
import CardMedia from "@mui/material/CardMedia";
import {Button} from "@mui/material";
import Loading from "./Loading";



const DetailMovie = ()=>{
let params = useParams();
const YT = 'https://www.youtube.com/embed/';
const URL = "https://api.themoviedb.org/3/movie/";
const KEY = "?api_key=844c872feee1c2892d10199ce6c7fa4d";
const BaseImageUrl = "https://image.tmdb.org/t/p/original";
const Detail = "&append_to_response=videos";
const [movie,setMovie] = useState([]);
const [genres,setGenres] = useState([]);
const [loading,setLoading] = useState(true);
const [trailer,setTrailer] = useState([]);
const [backdrop,setBackdrop] = useState();






useEffect(()=>{
    const fetchData = async()=>{
       try {
        const data = await axios
        .get(`${URL}${params?.data}${KEY}${Detail}`)
        .then(res=>{
            let dataMovie = res.data;
            setMovie(dataMovie)
            console.log(dataMovie)
            setGenres(dataMovie.genres)
           const mov= dataMovie.videos.results;
           const movie = mov.filter((data)=>data.type === "Trailer")[0];
     
           const trailer = YT+movie.key;
           setTrailer(trailer)
           if(dataMovie.backdrop_path === null){
            setBackdrop(dataMovie.poster_path)
        
           }else{
            setBackdrop(dataMovie.backdrop_path)
           }
         
            
        });
        setLoading(false);
       }catch(e){
        console.log(e)
       }
    }
    fetchData();

},[params])


        return (
   
           <Box sx={{mt:6,backgroundImage:`url(${BaseImageUrl}${backdrop})`,backgroundRepeat:'no-repeat',backroundPosition:'center-center',backgroundAttachment:'fixed',backgroundSize:'100%  100%'}}>{loading? <Box sx={{mt:10}}>Loading...</Box>:<div><Box sx={{display:"flex",justifyContent: "center",flexDirection: "column",
           alignContent: "center",
           alignItems: "center"}} >

                   <h1 style={{textAlign:"center",color:'white'}}>{movie.title}</h1>
           <CardMedia
           component="img"
           sx={{ width: 150,height:225}}
           image= {`${BaseImageUrl}${movie.poster_path}`}
           alt={`img_${movie.title}`}
           />
           </Box>
           <Box sx={{mt:6,
               width: "80%",
               height: "max-content",
               position: "relative",
               left: "30px",
               color:'white'
           
           
           }}>
               <h3>Synopsys:</h3>
               <p>{movie.overview}</p>
           </Box>
           <Box sx={{
                 display: "flex",
                 alignItems: "stretch",
                 justifyContent: "center",
                 alignContent: "flex-end",
                 flexDirection: "row",
                 flexWrap: "wrap",
                 color:'white'
             
           }}>
               <h4 style={{marginRight:"20px",}}>Rating : {movie.vote_average}</h4>
               <h4>Vote : {movie.vote_count}</h4> 
           </Box>
           <Box sx={{    
               display: "flex",
               flexDirection: "row",
               flexWrap: "wrap",
               justifyContent: "center"}}>
               {genres.map((data)=>(
               <Button key={data.id} style={{marginLeft:"20px",marginBottom:"30px"}}>{data.name}</Button>))}
           </Box></div>}
            <CardMedia sx={{width:"100%",height:'100%',display:'flex',justifyContent:'center',flexDirection:'column',alignItems:'center',pb:8}}>
                <h3 style={{color:'white'}}>Trailer</h3>
                <iframe frameBorder= "0" src={trailer} style={{width:'500px',height:'350px'}}allowFullScreen></iframe>
                
            </CardMedia>
            
            </Box>
    )
}
export default DetailMovie;