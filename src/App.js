import FilterableProductTable from "./component/FilterableProductTable";
import { useState } from "react";

const database = [
  { category: "Fruits", price: "$1", stocked: true, name: "Apple" },
  { category: "Fruits", price: "$1", stocked: true, name: "Dragonfruit" },
  { category: "Fruits", price: "$2", stocked: false, name: "Passionfruit" },
  { category: "Vegetables", price: "$2", stocked: true, name: "Spinach" },
  { category: "Vegetables", price: "$4", stocked: false, name: "Pumpkin" },
  { category: "Vegetables", price: "$1", stocked: true, name: "Peas" },
];

const App = () => {
  const [checked, setChecked] = useState(false);
  const [search, setSearch] = useState("");

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        backgroundColor: "#ffe2e6",
      }}
    >
      <FilterableProductTable
        data={database}
        checked={checked}
        setChecked={setChecked}
        search={search}
        setSearch={setSearch}
      />
    </div>
  );
};

export default App;
