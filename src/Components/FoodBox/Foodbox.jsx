import { useState } from "react";
import "./Foodbox.css"

const Foodbox = (props) => {
    const { data, index } = props;
    const [amount, setAmount] = useState(0);
    const [qty, setQty] = useState(0);

    const handleAmount = (e) => {
        if (e.target.value >= 0) {
            setAmount(e.target.value);
        } else {
            setAmount(0);
        }
    };

    const handleCheck = () => {
        setQty(amount * data.cal);
    };

    const handleReset = () => {
        setAmount(0);
        setQty(0);
    };


  return (
    <>
      <div className="mainContainer">
        <div className="leftSection">
          <div className="imageContainer">
            <img src={data.img} style={{ width: "200px" }}></img>
          </div>
          <div>
            <p>{data.name}</p>
            <p>{data.cal}</p>
          </div>
          <input
            type="number"
            placeholder="Enyter a number"
            value={amount}
            onChange={handleAmount}
          ></input>
          <button onClick={handleCheck}>+</button>
        </div>
        <div className="rightSection">
          <p>
            {amount} {data.name} = {qty} calories
          </p>
          <button onClick={handleReset}>Reset</button>
        </div>
      </div>
    </>
  );
};
export default Foodbox;
