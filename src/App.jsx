import './App.css'
import Signup from './components/Signup'
import Signin from './components/Signin'
import Home from './components/Home'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

   function App() {
     return (
       <BrowserRouter> 
         <Routes>
           <Route path="/" element={<Home />} />
           <Route path="/signup" element={<Signup />} />
           <Route path="/signin" element={<Signin />} />
         </Routes>
       </BrowserRouter>
     );
   }




export default App
