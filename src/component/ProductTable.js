const ProductTable = ({ info, checked, search, setDatabase, emojiMap }) => {
  const searchData = info.filter((item) =>
    item.name.toLowerCase().includes(search.toLowerCase()),
  );

  const data = checked ? searchData.filter((item) => item.stocked) : searchData;

  const fruitData = data.filter((item) => item.category === "Fruits");
  const vegetableData = data.filter((item) => item.category === "Vegetables");
  const noItem = searchData.length === 0;
  const handleDelete = (idToDelete) => {
    console.log(idToDelete);

    const dataAfterDelete = info.filter((item) => item.id !== idToDelete);
    setDatabase(dataAfterDelete);
  };

  return (
    <table
      style={{
        marginTop: "20px",
        width: "100%",
        borderCollapse: "collapse",
      }}
    >
      {!noItem && (
        <thead>
          <tr style={{ background: "#f5f7fa" }}>
            <th style={{ padding: 12 }}>Name</th>
            <th style={{ padding: 12 }}>Emoji</th>
            <th style={{ padding: 12 }}>Price</th>
            <th style={{ padding: 12 }}>Delete</th>
          </tr>
        </thead>
      )}

      {noItem && (
        <tbody>
          <tr style={{ textAlign: "center" }}>
            <td style={{ paddingTop: "30px" }}>No item found.</td>
          </tr>
        </tbody>
      )}

      <tbody>
        {fruitData.length > 0 && (
          <tr>
            <th
              colSpan="2"
              style={{
                textAlign: "center",
                padding: 12,
              }}
            >
              Fruits
            </th>
          </tr>
        )}

        {fruitData.map((rowData, index) => (
          <tr key={index}>
            <td
              style={{
                padding: 12,
                borderTop: "1px solid #eee",
                color: rowData.stocked ? "black" : "red",
              }}
            >
              {rowData.name}
            </td>
            <td
              style={{
                padding: 12,
                borderTop: "1px solid #eee",
                textAlign: "center",
              }}
            >
              <span>
                {emojiMap[rowData.name.toLowerCase().replace(" ")] || "📦"}
              </span>
            </td>
            <td
              style={{
                padding: 12,
                borderTop: "1px solid #eee",
                textAlign: "center",
              }}
            >
              ${rowData.price}
            </td>
            <td
              style={{
                padding: 12,
                borderTop: "1px solid #eee",
                textAlign: "right",
              }}
            >
              <button
                onClick={() => handleDelete(rowData.id)}
                onChange={handleDelete}
                style={{
                  backgroundColor: "#ff4d4f",
                  color: "white",
                  border: "none",
                  padding: "6px 14px",
                  borderTop: "1px solid #eee",
                  borderRadius: "8px",
                  cursor: "pointer",
                  fontSize: "13px",
                  fontWeight: "500",
                  transition: "0.2s ease",
                }}
              >
                Delete
              </button>
            </td>{" "}
          </tr>
        ))}

        {vegetableData.length > 0 && (
          <tr>
            <th colSpan="2" style={{ textAlign: "center", padding: 12 }}>
              Vegetables
            </th>
          </tr>
        )}

        {vegetableData.map((rowData, index) => (
          <tr key={index}>
            <td
              style={{
                padding: 12,
                borderTop: "1px solid #eee",
                color: rowData.stocked ? "black" : "red",
              }}
            >
              {rowData.name}
            </td>
            <td
              style={{
                padding: 12,
                borderTop: "1px solid #eee",
                textAlign: "center",
              }}
            >
              <span>
                {emojiMap[rowData.name.toLowerCase().replace(" ")] || "📦"}
              </span>
            </td>
            <td
              style={{
                padding: 12,
                borderTop: "1px solid #eee",
                textAlign: "center",
              }}
            >
              ${rowData.price}
            </td>
            <td
              style={{
                padding: 12,
                borderTop: "1px solid #eee",
                textAlign: "right",
              }}
            >
              <button
                onClick={() => handleDelete(rowData.id)}
                style={{
                  backgroundColor: "#ff4d4f",
                  color: "white",
                  border: "none",
                  padding: "6px 14px",
                  borderRadius: "8px",
                  cursor: "pointer",
                  fontSize: "13px",
                  fontWeight: "500",
                  transition: "0.2s ease",
                }}
              >
                Delete
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ProductTable;
