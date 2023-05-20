import { BrowserRouter, Routes, Route } from "react-router-dom";
import Quotes from "./Components/Quotes";
import logo from './logo.svg';
import Acc from './Components/Acc'
import './App.css';
import Github from "./Components/Github";
import Slider from "./Components/Slider";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Acc />} />
        <Route path="/quotes" element = {<Quotes/>}/>
        <Route path="/github" element = {<Github/>} />
        <Route path="/slider" element = {<Slider/>} />
        </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
