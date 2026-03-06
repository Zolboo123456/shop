import ProductTable from "./ProductTable";
import SearchBar from "./SearchBar";

const FilterableProductTable = ({
  data,
  checked,
  setChecked,
  search,
  setSearch,
  setDatabase,
  emojiMap,
}) => {
  return (
    <div
      style={{
        width: "400px",
        minHeight: "377.5px",
        border: "1px solid black",
        padding: "20px",
        backgroundColor: "white",
      }}
    >
      <h1 style={{ textAlign: "center" }}>PRODUCTS</h1>

      <SearchBar
        checked={checked}
        setChecked={setChecked}
        search={search}
        setSearch={setSearch}
      />

      <ProductTable
        info={data}
        checked={checked}
        search={search}
        setDatabase={setDatabase}
        emojiMap={emojiMap}
      />
    </div>
  );
};

export default FilterableProductTable;
