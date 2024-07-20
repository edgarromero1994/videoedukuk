
import Nav from "./components/Nav/Nav";
import NotFound from "./components/NotFound/NotFound";
import Home from "./pages/Home"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
 
function App() {
  return (
    <>
    <Router>
    <Nav/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
    </Router>
  </>
    
 
  )
}

export default App
