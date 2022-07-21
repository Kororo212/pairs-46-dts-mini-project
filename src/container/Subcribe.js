import React from 'react';
import {Box} from '@mui/material';
import { useParams } from 'react-router-dom';
import {auth} from '../Config/Firebase';
import { useAuthState } from 'react-firebase-hooks/auth';


const Subscribe =()=>{
    let params = useParams();
    const [user] = useAuthState(auth);
    
    const userEm = user.email
    return (
        <Box className='subs' sx={{mt:10, display:"flex",minHeight:'80vh'}}>
            <h1>Thank you for subscribe {userEm}</h1>
            <h2>type : {params?.type}</h2>
        </Box>
    )
}
export default Subscribe;