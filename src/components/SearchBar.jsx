
function SearchBar({ searchTerm, onSearchChange }) {
  return (
    <div className="search-container">

      <div className="search-input-wrapper">

        <span className="search-icon">⌕</span>

        <input
          type="text"
          placeholder="Search projects by title, category..."
          value={searchTerm}
          onChange={(e) => onSearchChange(e.target.value)}
          aria-label="Search projects"
        />

        {searchTerm && (
          <button
            type="button"
            className="clear-search"
            onClick={() => onSearchChange("")}
            aria-label="Clear search"
          >
            ✖
          </button>
        )}

      </div>

    </div>
  );
}

export default SearchBar;
