import CharacterEditor from "./components/CharacterEditor";
import Footer from "./components/Footer";
import React from "react";

function App() {
  return (
    <>
      <CharacterEditor />
      <div className="backdrop"></div>
      <Footer />
    </>
  );
}

export default App;
