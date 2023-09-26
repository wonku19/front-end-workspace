import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  useNavigate,
} from "react-router-dom";
import { useState } from "react";
import "./App.css";

const Home = ({ list, deleteMovie }) => {
  const onClick = (event) => {
    deleteMovie(event.target.id);
  };
  return (
    <div>
      <h2>Movies</h2>
      <table className="movies-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Genre</th>
            <th>Release Date</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {list.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.title}</td>
              <td>{item.genre}</td>
              <td>{item.release_date}</td>
              <td>
                <button onClick={onClick} id={item.id}>
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

const Create = ({ addMovie }) => {
  const navigate = useNavigate();

  const onSubmit = (event) => {
    event.preventDefault();
    const id = event.target.id.value;
    const title = event.target.title.value;
    const genre = event.target.genre.value;
    const release_date = event.target.release_date.value;

    if (!id || !title || !genre || !release_date) {
      alert("모든 값을 입력해주세요.");
      return;
    }

    addMovie(id, title, genre, release_date);
    navigate("/");
    event.target.reset();
  };
  return (
    <div>
      <h2>Create Movie</h2>
      <form onSubmit={onSubmit}>
        <div>
          <label htmlFor="id">Input movie id: </label>
          <input type="number" id="id" name="id" />
        </div>
        <div>
          <label htmlFor="title">Input movie title: </label>
          <input type="text" id="title" name="title" />
        </div>
        <div>
          <label htmlFor="genre">Input movie genre: </label>
          <input type="text" id="genre" name="genre" />
        </div>
        <div>
          <label htmlFor="release_date">Release Date: </label>
          <input type="date" id="release_date" name="release_date" />
        </div>
        <input type="submit" value="Add Movie" />
      </form>
    </div>
  );
};

const App = () => {
  const [movies, setMovies] = useState([
    { id: 1, title: "Drama", genre: "Drama", release_date: "2022-01-01" },
    { id: 2, title: "Action", genre: "Action", release_date: "2022-02-01" },
    { id: 3, title: "Comedy", genre: "Comedy", release_date: "2022-03-01" },
  ]);

  const addMovie = (id, title, genre, release_date) => {
    const parsedId = parseInt(id);

    if (movies.some((movie) => movie.id === parsedId)) {
      alert("중복된 ID 입니다.");
      return;
    }

    const deleteMovie = (id) => {
      const newList = movies.filter((item) => item.id !== parseInt(id));
      setMovies(newList);
    };

    return (
      <BrowserRouter>
        <div>
          <nav>
            <Link to="/">List</Link>
            <Link to="/create">Add New Movie</Link>
          </nav>
        </div>
        <Routes>
          <Route
            path="/"
            element={<Home list={movies} deleteMovie={deleteMovie} />}
          />
          <Route path="/create" element={<Create addMovie={addMovie} />} />
        </Routes>
      </BrowserRouter>
    );
  };
};

export default App;
