import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import LogPanel from "./pages/register";
import { createContext,useState } from "react";

export const registerContext = createContext() 
function App() {
  const [panel,setPanel]=useState(false)

  return (
    <registerContext.Provider value={{panel,setPanel}}>

    <div id="main-wraper">
    <Router>
      <Routes>
        <Route path="/exam-time" element={<Home/>}></Route>
        <Route path="/login" element={<LogPanel/>}></Route>
        <Route path="/register" element={<h1>register</h1>}></Route>
      </Routes>
    </Router>
    </div>
    </registerContext.Provider>
  );
}

export default App;
