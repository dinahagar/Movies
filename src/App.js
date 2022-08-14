import './App.css';
import {BrowserRouter , Routes , Route} from "react-router-dom"
import Home from './components/Home/Home';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import MovieDetails from './components/MovieDetails/MovieDetails';
import TopRatedPage from "./components/Pages/TopRatedPage"
import TrendingPage from "./components/Pages/TrendingPage"
import UpComingPage from "./components/Pages/UpComingPage"
import LatestPage from "./components/Pages/LatestPage"
import SimilarPage from './components/Pages/SimilarPage';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";
// import List from './components/Pages/List/List';
import Search from './components/Pages/Search';

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
          <Routes>
            <Route path='/' exact element={<Home />} />
            <Route path='/moviedetails' element={<MovieDetails />} />
            <Route path='/topratedpage' element={<TopRatedPage />} />
            <Route path='/trendingpage' element={<TrendingPage />} />
            <Route path='/upcomingpage' element={<UpComingPage />} />
            <Route path='/latestpage' element={<LatestPage />} />
            <Route path='/similarpage' element={<SimilarPage />} />
            {/*<Route path='/list' element={<List />} />*/}
            <Route path='/search' element={<Search />} />
          </Routes>
        <Footer />
      </BrowserRouter>

    </div>
    
  );
}

export default App;
