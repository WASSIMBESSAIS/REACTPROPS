import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Player from "./components/player";
function App() {
  return (
    <div className="App">
      <Player name="Messi" />
      <Player />
      <Player />
      <Player />
    </div>
  );
}

export default App;
