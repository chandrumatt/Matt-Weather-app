import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { fetchWeather } from "./api/fetchWeather";
import "./App.css";
import Contact from "./Contact";
import Weather from "./Weather";

const App = () => {
  const [query, setQuery] = useState("");
  const [weather, setWeather] = useState({});

  const search = async (e) => {
    if (e.key === "Enter") {
      const data = await fetchWeather(query);
      setWeather(data);
      setQuery("");
    }
  };

  return (
    <Router>
      <div>
        <nav className="nav-container">
          <div className="logo">
            <img src="/images/logo.png" alt="logo" />
            <h1 style={{ color: "white", paddingLeft: "5px" }}>
              Matt-Engineering-Solutions
            </h1>
          </div>
          <Link to="/" className="nav-link">
            Weather
          </Link>
          <Link to="/contact" className="nav-link">
            Contact
          </Link>
        </nav>

        <Routes>
          <Route
            path="/"
            element={
              <Weather
                query={query}
                setQuery={setQuery}
                weather={weather}
                search={search}
              />
            }
          />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
