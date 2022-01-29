import { Background } from "./components/backgorund";
import { GlobalStyle } from "./styles/styles";
import { CalcProvider } from "./context/ContextCalc";

function App() {
  return (
    <CalcProvider>
      <Background />
      <GlobalStyle />
    </CalcProvider>
  );
}

export default App;
