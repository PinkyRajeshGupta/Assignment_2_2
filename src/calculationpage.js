import React, { useState } from "react";

function Calculationpage() {
  const [count, setCount] = useState(0);
  const [resultvalue, setresultvalue] = useState(0);

  const calculate = (event) => {
    var a = parseInt(count) + event;
    setresultvalue(a);
  };

  return (
    <div className="container">
      <span className="title">calculation.....</span>
      <div className="innercontent">
        <div className="contentitem">
          <input
            type="number"
            placeholder="eanter a number"
            value={count}
            onChange={(e) => setCount(e.target.value)}
          />
        </div>
        <div className="btns contentitem">
          <button onClick={() => calculate(-1)}>-1</button>
          <button onClick={() => calculate(1)}>1</button>
          <button onClick={() => calculate(-10)}>-10</button>
          <button onClick={() => calculate(10)}>10</button>
        </div>
        <div className="contentitem">
          <p>
            Result:<span className="result">{resultvalue}</span>{" "}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Calculationpage;
