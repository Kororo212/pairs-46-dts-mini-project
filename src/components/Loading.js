import React from "react";
import { Box } from "@mui/system";


const Loading =()=>{
    return(
        <Box>
            <Box sx={{width:'100%',minHeight:'100vh',
            mt:7
            ,display:'flex'
            ,alignContent:'center'
            ,flexDirection:'column'
            ,justifyContent:'center'
            ,alignItems:'center'}} className="load"
            >   
                <h3>Loading...</h3>
            </Box>
        </Box>
    )
}
export default Loading;