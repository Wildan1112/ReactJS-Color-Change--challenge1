import { useState } from "react";
import Input from "./Input";
import Square from "./Square";

function App() {
  const [color, setColor] = useState("");
  const [hexValue, setHexValue] = useState("");
  const [isDarkText, setIsDarkText] = useState(true);

  return (
    <div className="App">
      <Square warna={color} hexValue={hexValue} isDarkText={isDarkText} />
      <Input
        warna={color}
        setWarna={setColor}
        setHexValue={setHexValue}
        isDarkText={isDarkText}
        setIsDarkText={setIsDarkText}
      />
    </div>
  );
}

export default App;
