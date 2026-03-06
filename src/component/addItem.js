import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

const AddItem = ({ setDatabase, database, rowData }) => {
  const [formData, setFormData] = useState({
    category: "",
    name: "",
    price: "",
    stocked: false,
    id: uuidv4(),
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = () => {
    setDatabase((prev) => {
      const updatedProducts = [...prev, formData];
      localStorage.setItem("products", JSON.stringify(updatedProducts));
      return updatedProducts;
    });

    setFormData({
      category: "",
      name: "",
      price: "",
      stocked: false,
      id: uuidv4(),
    });
  };

  const handleClick = (products) => {
    if (products.length === 0) {
      alert("There are no products to be added!");
    } else {
      handleSubmit();
    }
  };

  return (
    <div
      style={{
        width: "300px",
        padding: "25px",
        backgroundColor: "white",
        display: "flex",
        flexDirection: "column",
        gap: "18px",
        border: "none",
        borderRadius: "30px",
      }}
    >
      <h2 style={{ textAlign: "center", margin: 0 }}>ADD NEW ITEM</h2>

      <div style={{ display: "flex", flexDirection: "column", gap: "5px" }}>
        <label>Category</label>
        <select
          name="category"
          value={formData.category}
          onChange={handleChange}
          style={{
            height: "38px",
            borderRadius: "6px",
            border: "1px solid #ccc",
            padding: "0px 8px",
          }}
        >
          <option value="">Select Category</option>
          <option value="Fruits">Fruits</option>
          <option value="Vegetables">Vegetables</option>
        </select>
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: "5px" }}>
        <label>Name</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Enter item name"
          style={{
            height: "38px",
            borderRadius: "6px",
            border: "1px solid #ccc",
            padding: "0 8px",
          }}
        />
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: "5px" }}>
        <label>Price $</label>
        <input
          type="number"
          name="price"
          value={formData.price}
          onChange={handleChange}
          min={1}
          style={{
            height: "38px",
            borderRadius: "6px",
            border: "1px solid #ccc",
            padding: "0 8px",
          }}
        />
      </div>

      <div>
        <input
          name="stocked"
          checked={formData.stocked}
          onChange={handleChange}
          type="checkbox"
        />
        <label style={{ paddingLeft: "10px" }}>In stock</label>
      </div>

      <button
        onClick={handleClick}
        style={{
          height: "40px",
          backgroundColor: "#222",
          color: "white",
          border: "none",
          borderRadius: "6px",
          cursor: "pointer",
        }}
      >
        Add Item
      </button>
    </div>
  );
};

export default AddItem;
