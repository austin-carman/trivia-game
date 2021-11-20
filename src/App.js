import Form from "./components/Form";
import HighScores from "./components/HighScores";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Trivia</h1>
        <Form />
        <HighScores />
      </header>
    </div>
  );
}

export default App;
