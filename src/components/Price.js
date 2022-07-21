import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Button, TableFooter } from '@mui/material';
import {useNavigate} from 'react-router-dom'
import {auth} from '../Config/Firebase.js'
import { useAuthState } from 'react-firebase-hooks/auth';

function createData(name,Free, Bronze, Silver, Gold, Platinum) {
  return { name,Free, Bronze, Silver, Gold, Platinum};
}

const rows = [
  createData('Video','5/day', '20/day', '50/day','150/day', 'unlimited'),
  createData('Subtitle',1, 20, 50, 100, 'All Language'),
  createData('No Ads','no', 'yes', 'yes', 'yes', 'yes'),
  createData('Max Download',0, '10/day', '25/day', '50/day', 'unlimited'),

];

export default function Price() {
  const [user] = useAuthState(auth);
  
  let navigate = useNavigate();
  const onSubs=(type)=>{
    if(user){

      navigate(`/subs/${type}`);
    }else{
      alert('Anda harus login terlebih dahulu')
      navigate('/login')
    }
  }
  return (
    <TableContainer component={Paper} sx={{minHeight:'92vh'}}>
      <Table sx={{ minWidth: 300,marginTop:"100px" }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Type</TableCell>
            <TableCell align="center">Free</TableCell>
            <TableCell align="center">Bronze</TableCell>
            <TableCell align="center">Silver</TableCell>
            <TableCell align="center">Gold</TableCell>
            <TableCell align="center">Platinum</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="center">{row.Free}</TableCell>
              <TableCell align="center">{row.Bronze}</TableCell>
              <TableCell align="center">{row.Silver}</TableCell>
              <TableCell align="center">{row.Gold}</TableCell>
              <TableCell align="center">{row.Platinum}</TableCell>
            
    
            </TableRow>
            
          ))}
        </TableBody>
        <TableFooter>
        <TableRow>
            <TableCell></TableCell>
            <TableCell ></TableCell>
            <TableCell align="center"><Button onClick={()=>{onSubs('Bronze')}}>Beli</Button></TableCell>
            <TableCell align="center"><Button onClick={()=>{onSubs('Silver')}}>Beli</Button></TableCell>
            <TableCell align="center"><Button onClick={()=>{onSubs('Gold')}}>Beli</Button></TableCell>
            <TableCell align="center"><Button onClick={()=>{onSubs('Platinum')}}>Beli</Button></TableCell>
          </TableRow>
        </TableFooter>
      </Table>
    
    </TableContainer>
  );
}
