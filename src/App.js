import { useState, useEffect } from "react";
import axios from "axios";
import Result from "./Components/Result";

const APIURL =
  "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1";
const SEARCHAPI =
  "https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query=";

function App() {
  const [movies, setMovies] = useState([1]);
  const [search, setSearch] = useState("");

  const changeTheSearch = (e) => {
    // console.log(e.target.value);
    setSearch(e.target.value);
  };
  const getAllMovies = () => {
    axios
      .get(APIURL)
      .then((res) => {
        // console.log(res.data.results);
        setMovies(res.data.results);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const getSearchMovies = () => {
    // console.log(SEARCHAPI + search)
    axios
      .get(SEARCHAPI + search)
      .then((res) => {
        // console.log(res.data.results);
        setMovies(res.data.results);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    setMovies([]);
    // console.log("Home");
    if (search === "") {
      getAllMovies();
    } else {
      getSearchMovies();
    }
  }, [search]);

  return (
    <div className="max-w-[1240px] shadow-xl min-h-[400px] mx-auto p-3">
      <input
        type="search"
        value={search}
        onChange={changeTheSearch}
        className="w-full border border-black rounded text-slate-600 p-3"
      />
      {movies.length === 0 ? (
        <div className="text-3xl text-center mt-2">Loading ....</div>
      ) : (
        <Result movies={movies} />
      )}
    </div>
  );
}

export default App;
