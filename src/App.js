import { Route, Routes } from "react-router-dom";
import Home from "./components/home"
import Navbar from "./components/navbar";
import Create from "./components/create";
import Profile from "./components/profile";
import About from "./components/about";
import Categories from "./components/categories";
import Signup from "./components/signup";
import Login from "./components/login";
import Granim from "react-granim";
import './App.css';

function App() {
  return (
    <div className="App">
      <Granim
        direction={"diagonal"}
        isPausedWhenNotInView={true}
        stateTransitionSpeed={15000}
        states={{
          "default-state": {
            gradients: [
              ["#4e54c8", "#8f94fb"],
              ["#7474bf", "#348ac7"],
              ["#24c6dc", "#514a9d"],
              ["#4776e6", "#8e54e9"],
              ["#2193b0", "#6dd5ed"]
            ]
          }
        }} />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/create" exact element={<Create />} />
          <Route path="/profile" exact element={<Profile />} />
          <Route path="/about" exact element={<About />} />
          <Route path="/categories" exact element={<Categories />} />
          <Route path="/signup" exact element={<Signup />} />
          <Route path="/login" exact element={<Login />} />
        </Routes>
    </div>
  );
}

export default App;