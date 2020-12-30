import React, { useState } from "react";
import Counter from "./Counter";
import Info from "./Info";

function App() {
  const [visible, setVisible] = useState(false);
  return (
    <>
      <button
        onClick={() => {
          setVisible(!visible);
        }}
      >
        {visible ? "보이기" : "숨기기"}
      </button>
      {visible && (
        <div>
          <Counter />
          <br />
          <Info />
        </div>
      )}
    </>
  );
}

export default App;
