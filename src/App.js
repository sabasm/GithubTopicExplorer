import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/layout/header";
import Landing from "./components/pages/Landing";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <main>
        <Routes>
          <Route exact path="/" element={<Landing />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
