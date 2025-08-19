import { useState } from "react";
import "./App.css";


function App() {
  const [display, setDisplay] = useState("0");

  return (
    <div className="calculator">
      <h1>Calculator</h1>
      <div className="display">{display}</div>
      <div className="buttons">
        {/* Example buttons (you’ll expand this) */}
        <button onClick={() => setDisplay(display + "1")}>1</button>
        <button onClick={() => setDisplay(display + "2")}>2</button>
        <button onClick={() => setDisplay(display + "3")}>3</button>
        <button onClick={() => setDisplay("")}>C</button>
      </div>
    </div>
  );
}

export default App;

