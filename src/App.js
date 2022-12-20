
import './App.css';
import Home from './components/home/home';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Navbar from './components/navbar/navbar';
import About from './components/about/about';
import Details from './components/details/details';
import EpDetails from './components/details/epDetails';
import StreamEp from './components/details/streamEp';
import SearchResult from './components/Search/searchResult';

function App() {
 
  return (
    <>

    <BrowserRouter>
    <Navbar />
      <Routes>
      
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="details/:id" element={<Details />} />
        <Route path="details/watch/:id" element={<EpDetails />} />
        <Route path="details/watch/:id/:episodeNum" element={<StreamEp />} />
        <Route path="search/:animename" element={<SearchResult />} />

        
      </Routes>
   
    </BrowserRouter>
    </>
  );
}

export default App;
