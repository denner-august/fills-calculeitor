import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Background } from "./components/backgorund";
import { GlobalStyle } from "./styles/styles";
import { CalcProvider } from "./context/ContextCalc";
import { Resultado } from "./components/conteudo/Resultado";

function App() {
  return (
    <Router>
      <CalcProvider>
        <Routes>
          <Route path="/" element={<Background />} />
          <Route path="/resultado" element={<Resultado />} />
        </Routes>
        <GlobalStyle />
      </CalcProvider>
    </Router>
  );
}

export default App;
