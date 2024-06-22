
import React from "react";
import './../styles/App.css';

const App = () => {
  return (
    <div>
        <p style={{fontWeight: "bold" }}>Button clicked {count} times</p>
        <button onClick={() => setCount((prev) => prev + 1)}>Click me</button>
    </div>
  );
};

export default App;
