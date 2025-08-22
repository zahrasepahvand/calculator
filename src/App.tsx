import { useState } from "react";
import './App.css';
import Display from "./components/Display";
import { Button } from "semantic-ui-react";

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
    <>
      <div className="calculator">
        <Display value={display} />

        <div className="buttons">
          {/* Row 1 */}
          <Button size="small" onClick={() => handleNumber("1")}>1</Button>
          <Button size="small" onClick={() => handleNumber("2")}>2</Button>
          <Button size="small" onClick={() => handleNumber("3")}>3</Button>
          <Button size="small" onClick={() => handleOperator("+")}>+</Button>

          {/* Row 2 */}
          <Button size="small" onClick={() => handleNumber("4")}>4</Button>
          <Button size="small" onClick={() => handleNumber("5")}>5</Button>
          <Button size="small" onClick={() => handleNumber("6")}>6</Button>
          <Button size="small" onClick={() => handleOperator("-")}>-</Button>

          {/* Row 3 */}
          <Button size="small" onClick={() => handleNumber("7")}>7</Button>
          <Button size="small" onClick={() => handleNumber("8")}>8</Button>
          <Button size="small" onClick={() => handleNumber("9")}>9</Button>
          <Button size="small" onClick={() => handleOperator("*")}>x</Button>

          {/* Row 4 */}
          <Button onClick={handleClear}>C</Button>
          <Button size="small" onClick={() => handleNumber("0")}>0</Button>
          <Button onClick={handleEquals}>=</Button>
          <Button size="small" onClick={() => handleOperator("/")}>÷</Button>
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
