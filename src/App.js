import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./components/layout/footer";
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
      <Footer />
    </BrowserRouter>
  );
}

export default App;
