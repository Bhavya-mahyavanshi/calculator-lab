import { useState } from "react";

export default function Calculator() {
  const [display, setDisplay] = useState("0");

  const handleClick = (value) => {
    if (display === "0") setDisplay(value);
    else setDisplay(display + value);
  };

  const handleClear = () => {
    setDisplay("0");
  };

  const handleEquals = () => {
    try {
      const result = eval(display);
      setDisplay(String(result));
    } catch {
      setDisplay("Error");
    }
  };
  const buttons = [
    "7",
    "8",
    "9",
    "/",
    "4",
    "5",
    "6",
    "*",
    "1",
    "2",
    "3",
    "-",
    "0",
    "C",
    "=",
    "+",
  ];

  return (
    <div style={{ width: "200px", margin: "50px auto", textAlign: "center" }}>
      <input
        value={display}
        readOnly
        style={{
          width: "100%",
          height: "40px",
          marginBottom: "10px",
          textAlign: "right",
        }}
      />
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gap: "5px",
        }}
      >
        {buttons.map((btn) => (
          <button
            key={btn}
            onClick={() => {
              if (btn === "C") handleClear();
              else if (btn === "=") handleEquals();
              else handleClick(btn);
            }}
          >
            {btn}
          </button>
        ))}
      </div>
    </div>
  );
}
