import './App.css';
import Header from './Header';
import Footer from './Footer';
import Home from './Home';
import About from './About';
import Category from './Category/Category';
import CategoryDescription from './Category/CategoryDescription';
import Error from './Error';


// SPA - single page application
// SPA — это одностраничное приложение

import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

function App() {
  return (
    <>
     
     <Router>
     <Header/>

      <Routes>
        <Route exact path='/' element={<Home/>}/>
        <Route  path='/about' element={<About/>}/>
        <Route exact path='/cat' element={<Category/>}/>
        <Route  path='/cat/:CatParams' element={<CategoryDescription/>}/>

        <Route path="*" element={<Error/>}/>
      </Routes>

      <Footer/>
     </Router>

     
    </>
  );
}

export default App;
