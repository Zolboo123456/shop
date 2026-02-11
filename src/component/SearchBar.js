const SearchBar = ({ checked, setChecked, search, setSearch }) => {
  return (
    <div>
      <input
        type="text"
        placeholder="Search..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        style={{
          padding: "6px",
          width: "384px",
          marginBottom: "10px",
        }}
      />

      <div style={{ marginTop: "10px" }}>
        <input
          type="checkbox"
          checked={checked}
          onChange={(e) => setChecked(e.target.checked)}
        />
        <span> Only show products in stock</span>
      </div>
    </div>
  );
};

export default SearchBar;
