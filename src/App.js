import React from "react";
import {
    BrowserRouter as Router,
    Routes,
    Route,
} from "react-router-dom";
import Home from "./pages";
import Portfolio from "./pages/portfolio";
 
function App() {
    return (
        <Router>
            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route exact path="/portfolio" element={<Portfolio />} />
            </Routes>
        </Router>
    );
}
 
export default App;