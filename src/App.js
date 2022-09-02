import Home from "./pages/Home";
import Project from "./pages/Project";

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects/:projectId" element={<Project />} />
      </Routes>
    </Router>

    
  );
}


export default App;
