import React from "react";
import { Box } from "@mui/system";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { useAuthState } from 'react-firebase-hooks/auth'; //npm i react-firebase-hooks
import { auth } from '../Config/Firebase'; 
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@mui/material";



const LogUser = () =>{
    const navigate = useNavigate()
    const [visible,setVisible] = useState(false)
    const [togle,setTogle] = useState(false)
    const [user] = useAuthState(auth)
    const UserValid= ()=>{
        const Users = user
        if(Users === null){
            setTogle(true)
        }
        else{
            setTogle(false)
        }
    }
    const handleLogout = async()=>{
        try {
            await signOut(auth);
            setVisible(false)
            alert('Telah berhasil Logout')
            navigate('/')
          } catch (err) {
            console.log(err);
          }
    }
    const toogle = ()=>{
        setVisible(state => !state)
    }

    useEffect(() => {
        UserValid()
    }, [user]);
    return(
        <Box>
            <Box>
            <AccountCircleIcon sx={{fontSize:40}} onClick={()=>{toogle()}}/>

            <Box sx={{visibility: visible? 'visible':'hidden',display:'flex'}}  >
            <Box sx={{position:'absolute',width:'20px',height:'20px',backgroundColor:'rgba(0%, 0%, 20%, 0.70)',
                transform: 'rotate(46deg)',
                marginLeft: '10px',
        }}></Box>
            <Box sx={{position:'absolute',top:0,mt:7,backgroundColor:'rgba(0%, 0%, 20%, 1)',width:'50px',height:'40px',
                display: 'flex',
                justifyContent: 'center',
                flexDirection: 'row',
                alignItems: 'center',
                alignContent: 'stretch',
                flexWrap: 'nowrap',

        }}>
            {togle? <><NavLink onClick={()=>setVisible(false)} to={'/login'} key={'login'} style={{textDecoration:'none',color:'white'}}>
      Login
    </NavLink></>:<><Button onClick={()=>handleLogout()}style={{textDecoration:'none',color:'white',fontSize:'12px',textTransform:'none'}}>
      Logout
    </Button></>}
                
            </Box>

            </Box>
            </Box>
        </Box>
    )
}


export default LogUser;