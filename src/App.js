import React from "react";
import {
    BrowserRouter as Router,
    Routes,
    Route,
} from "react-router-dom";
import Home from "./pages";
import Redir from "./pages";
 
function App() {
    return (
        <Router>
            <Routes>
                <Route exact path="/portfolio" element={<Home />} />
                <Route exact path="/" element={<Redir />} />
            </Routes>
        </Router>
        
    );
}
 
export default App;