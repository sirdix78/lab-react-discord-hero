// src/App.jsx
import './App.css';
import bgImg from "./assets/discord-background.png";
import logoImg from "./assets/discord-logo-white.png";
import navImg from './assets/menu-icon.png';

function App() {
  return (
    <div className="App">
      <nav className='images'>
        <img src = {logoImg} className="logoImg" alt="logo Img"/>
        <img src = {navImg} className="navImg" alt="nav Img"/>
      </nav>
      <h1>Imagine a place...</h1>
      <p>...when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages.</p>
      <button className="download">Download for Mac</button> 
      <button className="open">Opend Discord in your browser</button>
      <img src = {bgImg} className="bgImg" alt="bg Img" />
    </div>
  );
}

export default App;