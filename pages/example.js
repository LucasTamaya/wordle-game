import { useState, useEffect } from "react";

export default function Example() {
  const [data, setData] = useState([1, 2, 3, 4, 5]);

  const updateArray = () => {
    const newArray = Array.from(data);
    newArray[data.length - 1] = "caca";
    setData(newArray);
  };

  return (
    <div>
      <h1>Example page</h1>
      {data.map((x) => (
        <div>{x}</div>
      ))}

      <button className="border border-red-500" onClick={() => updateArray()}>
        Delete one
      </button>
    </div>
  );
}
