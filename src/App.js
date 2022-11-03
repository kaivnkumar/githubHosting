import { Routes, Route } from "react-router-dom";
import './App.css';
import FirstPage from "../src/Components/FirstPage";
import SecondPage from "../src/Components/SecondPage";
import ThirdPage from "../src/Components/ThirdPage";

function App() {
  return (
    <div>  
      <Routes>
        <Route path="/githubHosting/" element={<FirstPage />} exact></Route>
        <Route path="/githubHosting/second" element={<SecondPage />} exact></Route>
        <Route path="/githubHosting/third" element={<ThirdPage />} exact></Route>
      </Routes>
    </div>
  );
}

export default App;
