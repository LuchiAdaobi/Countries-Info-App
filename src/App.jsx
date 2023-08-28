import { useEffect, useState } from "react";
import Country from "./Country";

function App() {
  const [countries, setCountries] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("");

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  const goToNextPage = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  const goToPreviousPage = () => {
    setCurrentPage((prevPage) => prevPage - 1);
  };

  useEffect(() => {
    getCountries();
  }, [query]);

  const getCountries = async () => {
    try {
      const response = await fetch(`https://restcountries.com/v3.1/all`);
      const data = await response.json();
      setCountries(data);
      // console.log(data);
    } catch (error) {
      console.error("Error fetching Countries:", error);
    }
  };

  const updateSearch = (e) => {
    setSearch(e.target.value);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    setQuery(search.toLowerCase());
    setSearch("");
  };

  // Filter countries based on case-insensitive search query
  const filteredCountries = countries.filter((country) =>
    country.name.common.toLowerCase().includes(query)
  );

  const totalPages = Math.ceil(filteredCountries.length / itemsPerPage);
  const pageRange = Array.from({ length: totalPages }, (_, index) => index + 1);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  return (
    <div className="app">
      <form className="search-form" onSubmit={handleSearch}>
        <input
          type="text"
          placeholder="Enter Country Name"
          className="search-bar"
          value={search}
          onChange={updateSearch}
        />
        <button type="submit" className="search-button">
          Search
        </button>
      </form>

      <div className="countries">
        {filteredCountries.length === 0 ? (
          <h2 className="error-msg">
            No matching countries found
          </h2>
        ) : (
          filteredCountries
            .slice(startIndex, endIndex)
            .map((country) => (
              <Country
                key={country.cca3}
                name={country.name.common}
                capital={country.capital}
                region={country.region}
                population={country.population}
                currency={country.currencies}
                language={country.languages}
                idd={country.idd}
                timezone={country.timezones}
                flag={country.flags.png}
                map={country.maps.googleMaps}
              />
            ))
        )}
      </div>

      <div className="pagination">
        <button onClick={goToPreviousPage} disabled={currentPage === 1}>
          Previous
        </button>
        {pageRange.map((pageNumber) => {
          const rangeStart = currentPage <= 3 ? 1 : currentPage - 2;
          const rangeEnd = rangeStart + 4;

          if (pageNumber >= rangeStart && pageNumber <= rangeEnd) {
            return (
              <button
                key={pageNumber}
                onClick={() => setCurrentPage(pageNumber)}
                className={currentPage === pageNumber ? "active" : ""}
              >
                {pageNumber}
              </button>
            );
          }
          return null;
        })}
        <button
          onClick={goToNextPage}
          disabled={endIndex >= filteredCountries.length}
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default App;
