import { useState, useEffect } from "react";
import axios from "axios";
import Result from "./Components/Result";

const APIURL =
  "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1";

function App() {
  const [movies, setMovies] = useState([1]);
  const [search, setSearch] = useState("");

  const getAllMovies = () => {
    axios
      .get(APIURL)
      .then((res) => {
        console.log(res.data.results);
        setMovies(res.data.results);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    // console.log("Home");
    if (search === "") {
      getAllMovies();
    } else {
      // getSearchMovies();
    }
  }, [search]);

  return (
    <div className="max-w-[1240px] shadow-xl min-h-[400px] mx-auto p-3">
      <input
        type="search"
        className="w-full border border-black rounded text-slate-600 p-3"
      />
      <Result movies={movies} />
    </div>
  );
}

export default App;
