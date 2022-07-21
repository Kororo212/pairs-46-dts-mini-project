import MovieCard from '../components/MovieCard';
import {Box} from '@mui/system';
import { useState,useEffect } from 'react';

import axios from 'axios';
import { async } from '@firebase/util';
import Loading from '../components/Loading';

const Indo =()=>{
    const [movies,setMovies] = useState([]);
    const Key = process.env.IMDB_KEY;
    const URL = `https://api.themoviedb.org/3/discover/movie?api_key=${Key}&with_original_language=id`;
    const [loading,setLoading] = useState(true);
    const fetchData = async()=>{
        setLoading(true)
        try{
            const data = await axios
            .get(`${URL}`)
            .then((res)=>{
            const data = res.data.results.sort((a,b)=>a.title.localeCompare(b.title));
            setMovies(data);
        })
        setLoading(false)
    }
        catch(err){
            console.log(err)
        }
    }
    useEffect(()=>{
        fetchData();
    },[])



    return(
        <Box>{loading? <Box><Loading/></Box>:<><Box sx={{mt:10, textAlign:"center"}}><h1>Film Indonesia</h1></Box>
        <Box sx={{display:'flex',flexDirection : 'row',justifyContent:'space-Around',flexWrap:'wrap'}}>   
            {movies.map((movie,i) =>(<div key={i}><MovieCard movie={movie}/></div>))}
          
        </Box></>}
            

        </Box>
    )

}

export default Indo;
