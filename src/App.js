import FilterableProductTable from "./component/FilterableProductTable";
import AddItem from "./component/addItem";
import { useState, useEffect } from "react";

const App = () => {
  const newData = JSON.parse(localStorage.getItem("products")) || [];

  const [checked, setChecked] = useState(false);
  const [search, setSearch] = useState("");
  const [database, setDatabase] = useState(newData);

  useEffect(() => {
    localStorage.setItem("products", JSON.stringify(database));
  }, [database]);

  const emojiMap = {
    apple: "🍎",
    greenapple: "🍏",
    banana: "🍌",
    orange: "🍊",
    lemon: "🍋",
    lime: "🍋",
    grape: "🍇",
    watermelon: "🍉",
    strawberry: "🍓",
    blueberry: "🫐",
    cherry: "🍒",
    peach: "🍑",
    mango: "🥭",
    pineapple: "🍍",
    coconut: "🥥",
    kiwi: "🥝",
    pear: "🍐",
    melon: "🍈",
    carrot: "🥕",
    corn: "🌽",
    broccoli: "🥦",
    lettuce: "🥬",
    cucumber: "🥒",
    pepper: "🫑",
    eggplant: "🍆",
    garlic: "🧄",
    onion: "🧅",
    potato: "🥔",
    tomato: "🍅",
    mushroom: "🍄",
    avocado: "🥑",
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        backgroundColor: "#ffe2e6",
        gap: "30px",
      }}
    >
      <FilterableProductTable
        data={database}
        checked={checked}
        setChecked={setChecked}
        search={search}
        setSearch={setSearch}
        setDatabase={setDatabase}
        emojiMap={emojiMap}
      />
      <AddItem database={database} setDatabase={setDatabase} />
    </div>
  );
};

export default App;
