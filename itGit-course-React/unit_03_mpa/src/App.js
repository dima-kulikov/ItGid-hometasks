
import './App.css';
import Header from './Header';
import Footer from './Footer';
import Home from './Home';
import About from './About';
import Category from './Category/Category';
import CategoryDescription from './Category/CategoryDescription';
import Error from './Error';


// MPA - Multi Page Applications
// MPA — это многостраничные приложения, работающие, как привычные нам веб-сайты

import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

function App() {
  return (
    <>
     <Header/>
     <Router>

      <Routes>
        <Route exact path='/' element={<Home/>}/>
        <Route  path='/about' element={<About/>}/>
        <Route exact path='/cat' element={<Category/>}/>
        <Route  path='/cat/:CatParams' element={<CategoryDescription/>}/>

        <Route path="*" element={<Error/>}/>
      </Routes>
     </Router>

     <Footer/>
    </>
  );
}

export default App;
