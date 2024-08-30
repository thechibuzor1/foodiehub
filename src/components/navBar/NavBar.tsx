import React, { useEffect, useState } from "react";
import "./NavBar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { icon } from "@fortawesome/fontawesome-svg-core/import.macro";

export default function NavBar() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const apikey = "d2308e29beb74abd98075418cf1fc2f8";

  useEffect(() => {
    const fetchResults = async () => {
      if (query.length > 2) {
        try {
          const response = await fetch(
            `https://api.spoonacular.com/recipes/autocomplete?apiKey=${apikey}&number=5&query=${query}`
          );
          const data = await response.json();
          setResults(data);
        } catch (error) {
          console.error("Error fetching autocomplete results:", error);
        }
      } else {
        setResults([]);
      }
    };

    fetchResults();
  }, [query]);

  const handleInputChange = (e: any) => {
    setQuery(e.target.value);
  };

  return (
    <div className="navContainer">
      <div className="navbar">
        <div className="alignRow">
          <FontAwesomeIcon
            className="icon"
            icon={icon({ name: "utensils", style: "solid" })}
            color="black"
          />
          <h1>FoodieHub</h1>
        </div>
        <div className="home-search-con">
          <FontAwesomeIcon
            className="icon"
            icon={icon({ name: "magnifying-glass", style: "solid" })}
            color="black"
          />
          <input
            placeholder="Search"
            className="home-search"
            value={query}
            onChange={handleInputChange}
            type="text"
          />
          {query.length !== 0 && (
            <FontAwesomeIcon
              onClick={() => setQuery("")}
              className="icon"
              icon={icon({ name: "x", style: "solid" })}
              color="black"
            />
          )}
        </div>
        <div className="alignRow">
          <FontAwesomeIcon
            className="icon"
            icon={icon({ name: "user", style: "solid" })}
            color="black"
          />
          <h2>Chibuzor</h2>
        </div>
      </div>
      {results.length > 0 && (
        <div className="searchResultsCon">
          {results.map((item: any) => (
            <div key={item.id} className="searchResult">
              <p>{item.title}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
