import { useState } from "react";
import "./App.css";
import Display from "./components/Display";
import Button from "./components/Button";

function App() {
  const [display, setDisplay] = useState("0");
  const [firstValue, setFirstValue] = useState<number | null>(null);
  const [operator, setOperator] = useState<string | null>(null);
  const [waitingForSecond, setWaitingForSecond] = useState(false);

  const handleNumber = (num: string) => {
    if (display === "0" || waitingForSecond) {
      setDisplay(num);
      setWaitingForSecond(false);
    } else {
      setDisplay(display + num);
    }
  };

  const handleOperator = (op: string) => {
    setFirstValue(parseFloat(display));
    setOperator(op);
    setWaitingForSecond(true);
  };

  const handleEquals = () => {
    if (firstValue === null || operator === null) return;
    if (waitingForSecond) return;

    const secondValue = parseFloat(display);
    let result = 0;

    switch (operator) {
      case "+":
        result = firstValue + secondValue;
        break;
      case "-":
        result = firstValue - secondValue;
        break;
      case "*":
        result = firstValue * secondValue;
        break;
      case "/":
        result = secondValue !== 0 ? firstValue / secondValue : NaN;
        break;
    }

    setDisplay(result.toString());
    setFirstValue(result);
    setOperator(null);
    setWaitingForSecond(true);
  };

  const handleClear = () => {
    setDisplay("0");
    setFirstValue(null);
    setOperator(null);
    setWaitingForSecond(false);
  };

  return (
    <><div className="calculator">
      <Display value={display} />

      <div className="buttons">
        {/* Row 1 */}
        <Button label="1" onClick={() => handleNumber("1")} />
        <Button label="2" onClick={() => handleNumber("2")} />
        <Button label="3" onClick={() => handleNumber("3")} />
        <Button label="+" onClick={() => handleOperator("+")} />

        {/* Row 2 */}
        <Button label="4" onClick={() => handleNumber("4")} />
        <Button label="5" onClick={() => handleNumber("5")} />
        <Button label="6" onClick={() => handleNumber("6")} />
        <Button label="-" onClick={() => handleOperator("-")} />

        {/* Row 3 */}
        <Button label="7" onClick={() => handleNumber("7")} />
        <Button label="8" onClick={() => handleNumber("8")} />
        <Button label="9" onClick={() => handleNumber("9")} />
        <Button label="x" onClick={() => handleOperator("*")} />

        {/* Row 4 */}
        <Button label="C" onClick={handleClear} />
        <Button label="0" onClick={() => handleNumber("0")} />
        <Button label="=" onClick={handleEquals} />
        <Button label="÷" onClick={() => handleOperator("/")} />
      </div>
    </div>
    <div>
      <p>You put two numbers and get the result.</p>
      <p>The answer could also be used as the first number for the next calculation.</p>
    </div>
  </>

  );
}

export default App;
