import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./assets/global.css";
import Provider from "./contexts/MainContext";
import Sections from "./pages/Sections";
import SelectedCharacter from "./pages/SelectedCharacter";
function App() {
  return (
    <Router>
      <Provider>
        <Route exact path="/" component={Sections} />
        <Route exact path="/character/:id" component={SelectedCharacter} />
      </Provider>
    </Router>
  );
}

export default App;
