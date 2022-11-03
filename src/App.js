import { Routes, Route, BrowserRouter } from "react-router-dom";
import './App.css';
import FirstPage from "../src/Components/FirstPage";
import SecondPage from "../src/Components/SecondPage";
import ThirdPage from "../src/Components/ThirdPage";

function App() {
  return (
    <div>
      <BrowserRouter basename="/githubHosting">
        <Routes>
          <Route path="/githubHosting" element={<FirstPage />} exact></Route>
          <Route path="/second" element={<SecondPage />} exact></Route>
          <Route path="/third" element={<ThirdPage />} exact></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
