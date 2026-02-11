import ProductTable from "./ProductTable";
import SearchBar from "./SearchBar";

const FilterableProductTable = ({
  data,
  checked,
  setChecked,
  search,
  setSearch,
}) => {
  return (
    <div
      style={{
        width: "400px",
        height: "600px",
        border: "1px solid grey",
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

      <ProductTable info={data} checked={checked} search={search} />
    </div>
  );
};

export default FilterableProductTable;
