import React from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import {auth} from '../Config/Firebase'
import { Navigate } from 'react-router-dom'

const UserLogin=({children, inLogin = true})=>{

    const [user] = useAuthState(auth);
 
    if(!user && inLogin){
        return children
    }else{
        return <Navigate to='/'/>
    }

}

export default UserLogin
