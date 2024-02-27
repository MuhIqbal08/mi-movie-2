import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import DashboardPages from './Pages/DashboardPages';
import HomeNav from './Pages/HomeNav';
import TopRatedNav from './Pages/TopRatedNav';
import DetailMovieNav from './Pages/DetailMovieNav';

function App() {
  return (
  <Router>
    <Routes>
      <Route path='/' element={<HomeNav />} />
      <Route path='/top-rated' element={<TopRatedNav />} />
      <Route path='/detail/:id' element={<DetailMovieNav />} />
    </Routes>
  </Router>
  )
}

export default App;
