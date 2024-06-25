import React from "react";
import LandingPage from "./components/Landing page/LandingPage";
function App() {
  return (
    <div
      className="App"
      style={{
        position: "absolute",
        right: 0,
        left: 0,
        top: 0,
        bottom: 0,
      }}
    >
      <LandingPage />
    </div>
  );
}

export default App;
