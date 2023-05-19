import { useEffect, useState } from "react"

function App() {
  const [movies, setMovies] = useState([])
  useEffect(() => {
    fetch("/movies")
    .then((r) => r.json())
    .then(movies => setMovies(movies))
  }, [])

  const movieList = movies.map(movie => <li key={movie.id}>{movie.title}</li>)
  return <ul>
    {movieList}
  </ul>
}

export default App;
