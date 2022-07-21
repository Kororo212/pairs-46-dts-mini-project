import { MovieFilter} from '@mui/icons-material';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import * as React from 'react';
import { Link, NavLink } from 'react-router-dom';
import LogUser from './LogUser';



const navItems = [
  {text:'Indonesian',link:'/indonesia'}
, {text:'Pricing', link:'/price'}
, {text:'About',link:'/about'},

];


const Navbar = () => {


  return (
    <Box sx={{ display: 'flex',justifyContent:'center' }}>
      <AppBar component="nav">
        <Toolbar>
          <MovieFilter sx={{ display: 'flex', mr: 1 }} />
          <Typography
            variant="h6"
            component="div"
            sx={{
              flexGrow: 1,
              display: 'block',
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
            }}
          ><Link style={{color:'white'}} to='/'>NONTON</Link>
          </Typography>
          <Box sx={{ display: 'block' }}>
            {navItems.map((item,i)=>(
              <NavLink key={i} style={{margin:"10px"}}
              to={item.link}
              className={({isActive})=> isActive ? 'nav-active': 'nav-inactive'}
              >
                 {item.text}
              </NavLink>
            ))}
         </Box>
         <LogUser />
        </Toolbar>
      </AppBar>
     
 
    </Box>
  );
}

export default Navbar;