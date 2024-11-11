import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import mainpage from "./pages/mainpage";

function App() {
  return (
    <Router>
      <Route path="/" component={mainpage} />
    </Router>
  );
}
export default App;
