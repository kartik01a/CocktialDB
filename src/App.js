import {BrowserRouter as Router, Route,Routes} from 'react-router-dom'
import About from './pages/About'
import Home from './pages/Home'
import Error from './pages/Error'
import Navbar from './pages/Navbar'
import SingleCocktail from './pages/SingleCocktail'

function App() {
  return (
    <Router>
      <Navbar/>
      <Routes> 
        <Route path='/' element={<Home/>} />
        <Route path='about' element={<About/>} />
        <Route path='cocktail/:id' element={<SingleCocktail/>} />
        <Route path='*' element={<Error/>} />
      </Routes>
    </Router>
  );
}

export default App;
