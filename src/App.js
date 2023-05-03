import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import LogPanel from "./pages/register";


function App() {
  return (
    <div id="main-wraper">
      {/* <Home/> */}
    <Router>
      <Routes>
        <Route path="/exam-time" element={<Home/>}></Route>
        <Route path="/login" element={<LogPanel/>}></Route>
        <Route path="/register" element={<h1>register</h1>}></Route>
      </Routes>
    </Router>
    </div>
  );
}

export default App;
