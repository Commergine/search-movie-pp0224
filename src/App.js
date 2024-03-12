import './App.css';
import SearchIcon from './search.svg';
import LogoColor from './logo-color.png';
import { useEffect, useState } from 'react';
import Movies from './Movies';

const API_URL = 'http://www.omdbapi.com/?apikey=f464a3b7&';

const App = () => {

  const searchMovie = async (title) => {
    const response = await fetch(`${API_URL}s=${title}`);
    const data = await response.json()

    console.log(data)
    setMovies(data.Search)
  }

  const [search, setSearch] = useState('');

  const [movies, setMovies] = useState([]);

  useEffect(()=>{
    searchMovie('Natasha');
  },[])

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      searchMovie(search);
    }
  };


  return (
    <div className='App'>
       
        <h1><img src={LogoColor} alt='logo'/>TMovie library</h1>
 
        <div className='search'>
          <input 
            placeholder='Movie to watch' 
            value={search}
            onChange={(e) => setSearch(e.target.value)} 
            onKeyDown={handleKeyDown}
          />
          <img 
            src={SearchIcon}
            alt='search'
            onClick={()=>{searchMovie(search)}}
          />
        </div>
        {
          movies?.length > 0 ? (
        <div className='container'>
          {movies.map((movies) => (
              <Movies movie={movies}/>
          ))}
          

        </div>
          ) : (
            <div className='empty'>
              <h2> No movies found, try anouther search word</h2>
              </div>
          )
        }
    </div>
  );
}

export default App;


// Here is your key: 
// OMDb API: http://www.omdbapi.com/?i=tt3896198&apikey=f464a3b7