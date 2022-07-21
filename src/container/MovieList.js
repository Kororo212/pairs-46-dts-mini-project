import react from 'react';
import MovieCard from '../components/MovieCard';
import {Box} from '@mui/system';
import { useState,useEffect } from 'react';
// import DataMovies from '../data/movies.json';
// import { LineAxisOutlined } from '@mui/icons-material';
import axios from 'axios';
import Loading from '../components/Loading';


const MovieList = ()=>{
    //data dari ../data/movies.json

const [movies,setmovies] = useState([]);
const Key = process.env.IMDB_KEY;
const URL = `https://api.themoviedb.org/3/trending/movie/day?api_key=${Key}`
const SrcURL = `https://api.themoviedb.org/3/search/movie?api_key=${Key}=`
const [Search, setSearch] = useState('');
const [loading,setLoading] = useState(true);
const [dataNotFound,setdataNotFound] = useState(true);


const find = async() =>{
    setLoading(true)
    setdataNotFound(true)
    if(Search !== ''){

        try{
            const data = await axios
            .get(`${SrcURL}${Search}`)
            .then(res=>{
                const dataM = res.data.results;
                const listData = dataM.sort((a,b)=>a.title.localeCompare(b.title))
                const dataPoster = listData.filter((data)=>data.poster_path !== null)
                setmovies(dataPoster)
            })
   
            if(movies.length === 0){
                setdataNotFound(false)
            }
            setLoading(false)
        }catch(e){
            console.log(e)
        }
    }
    else{
        try{
            const data = await axios
            .get(`${URL}`)
            .then(res =>{
            const dataM = res.data.results.sort((a,b)=>a.title.localeCompare(b.title));
            setmovies(dataM);
            
            })
            setLoading(false)
        }catch(e){
            console.log(e)
        }
    }

}

      
    



useEffect(()=>{
   
  find()
},[Search,dataNotFound])

  

 
 
  
    return (
        <Box>
        {/* //     <MovieCard/>
        //     <MovieCard/>
        //     <MovieCard/>
        //     <MovieCard/>
    //     <MovieCard/> */}
        <Box sx={{position:'relative',marginTop:'100px',display:'flex',justifyContent:'center'}}>
            <input className="input" type="text" placeholder="cari film" onChange={(x)=>setSearch(x.target.value)}/>
            <button className='btn' onClick={()=>find()} >Search</button>
        </Box>
         {loading? <Box><Loading/></Box> : dataNotFound ?
         
         
         <div><Box sx={{display:'flex',flexDirection : 'row',justifyContent:'space-Around',flexWrap:'wrap'}}>   
                {movies.map((movie,i) =>(<div key={i}><MovieCard movie={movie}/></div>))}
            </Box></div>:<Box sx={{textAlign:'center',mt:3,color:'red',minHeight:'80vh'}}><h2>Movie not found</h2></Box>}
        </Box>
    )
}

export default MovieList;
