import "./App.css";
import Foodbox from "./Components/FoodBox/Foodbox";
import foodData from "../resources/FoodData";
import { useState } from "react";

function App() {
  const [searchItem, setSearchItem] = useState("");

  const handleSearch = (e) => {
    setSearchItem(e.target.value);
  };

  const filteredData = foodData.filter((el) =>
    el.name.toLocaleLowerCase().includes(searchItem.toLocaleLowerCase())
  );

  return (
    <>
      <div className="searchSection">
        <h1>Pro Nutrition</h1>
        <h2>Search Bar</h2>
        <input
          type="text"
          placeholder="Search for item"
          onChange={handleSearch}
        ></input>
      </div>
      {filteredData.map((el, i) => (
        <Foodbox data={el} index={i} key={i} />
      ))}
    </>
  );
}

export default App;
