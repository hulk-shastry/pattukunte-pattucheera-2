import React from "react";
import "./styles/App.css";
import Home from "./pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import TimeTravel from "./pages/TimeTravel";
import Banner from "./components/banner";

const App = () => {
  const [moviesList, setMoviesList] = React.useState([]);

  React.useEffect(() => {
    fetch(`${process.env.REACT_APP_CDN_URL}/movies.json`)
      .then((response) => response.json())
      .then((movies) => {
        setMoviesList(movies);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <div>
      {process.env.REACT_APP_BANNER && <Banner />}
      <BrowserRouter>
        <Routes>
          <Route exact path="/timetravel" element={<TimeTravel moviesList={moviesList} />} />
          <Route path="/*" element={<Home moviesList={moviesList} />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
