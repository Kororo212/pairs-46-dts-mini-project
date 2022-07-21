
import {Box} from '@mui/material';



const About=()=>{

    return(
        <Box sx={{minHeight:'82vh'}}>
            <Box sx={{mt:10,textAlign:"center"}}>
                <h2>About</h2>         
            </Box>
            <Box sx={{mt:10,border:"4px solid black"
            ,width:"80%"
            ,height:"max-content"
            ,ml:2,mr:2,
            position: "relative",
            top: "50%",
            left: "50%",
            transform: "translate(-50%,-50% )",
            borderRadius:"10px",textAlign:"center"}}>
           
            <h3>Tentang</h3>
            <p>Situs ini dibuat untuk mempelajari front end <span style={{color:"blue"}}>React.js</span></p>
            

            </Box>
          

        </Box>
    )
}
export default About;