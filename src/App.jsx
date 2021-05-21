import "./App.css";
import { Header } from "./components/Header/Header";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Footer } from "./components/Footer/Footer";
import "./App.css";
import { About } from "./pages/About/About";
import { CV } from "./pages/CV/CV";
import { Skills } from "./pages/Skills/Skills";
import { Hobbies } from "./pages/Hobbies/Hobbies";

function App() {
  return (
    <Router>
      <div className="app-container">
        <Header />
        <Switch>
          <Route path="/" exact />
          <Route path="/about" component={About} />
          <Route path="/cv" component={CV} />
          <Route path="/skills" component={Skills} />
          <Route path="/hobbies" component={Hobbies} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
