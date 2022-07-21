import './App.css';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import { ThemeProvider } from '@mui/material';

import Navbar from './components/Navbar';
import theme from './themes/theme';
import Footer from './components/Footer'
import { Outlet } from 'react-router-dom';//npm install react-router-dom@6



const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Navbar></Navbar>
      
 
    
        <Outlet/>
        <Footer />
        {/* <Routes>
          <Route path="/" element={<MovieList />} />
          <Route path="/indonesia" element={<IndonesiaList />}/>
          <Route path='/price' element={<Price />}/>
          <Route path='/about' element={<About />}/>
          <Route path='/subs/:type' element={<Subscribe />}/>
          <Route path='/detail/:data' element={<DetailMovie />}/>
          <Route path='/*' element={<Box sx={{mt:10,textAlign:"center"}}><h2>Halaman Tidak Ada</h2></Box>}/>
        </Routes> */}
      </div>
    </ThemeProvider>
  );
}

export default App;
