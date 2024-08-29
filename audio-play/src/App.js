import logo from './logo.svg';
import './App.css';

import { Button, ButtonIcon, ButtonGroup } from "@hrc/button";

function App() {
  const audio1 = new Audio("https://upload.wikimedia.org/wikipedia/commons/9/9b/Hydroprogne_caspia_-_Caspian_Tern_XC432679.mp3");
  const audio2 = new Audio("https://upload.wikimedia.org/wikipedia/commons/b/b5/Hydroprogne_caspia_-_Caspian_Tern_XC432881.mp3");


  function toggleAudio1() {
    if(audio1.paused) {
      audio1.play();
    } else {
      audio1.pause();
    }
  }

  function toggleAudio2() {
    if(audio2.paused) {
      audio2.play();
    } else {
      audio2.pause();
    }
  }

  return (
    <div className="App">
      <header className="App-header">
        <button onClick={toggleAudio1}>Toggle Audio 1</button>
        <button onClick={toggleAudio2}>Toggle Audio 2</button>
        <br />
        <Button onClick={toggleAudio1}>Toggle Audio 1</Button>
      </header>
    </div>
  );
}

export default App;
