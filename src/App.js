import React from "react";
import {
    BrowserRouter as Router,
    Routes,
    Route,
} from "react-router-dom";
import Home from "./pages";
 
function App() {
    return (
        <Router>
            <Routes>
                <Route exact path="/portfolio" element={<Home />} />
            </Routes>
        </Router>
    );
}
 
export default App;