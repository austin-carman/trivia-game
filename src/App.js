import Form from "./components/Form";
import styled from "styled-components";

const StyledHeader = styled.header`
  color: #2076d2;
  text-align: center;
`;

function App() {
  return (
    <div className="App">
      <StyledHeader className="App-header">
        <h1>Trivia</h1>
        <h4>Can master each category?</h4>
        <Form />
      </StyledHeader>
    </div>
  );
}

export default App;
