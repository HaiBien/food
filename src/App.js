import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Food from "./food";
import FoodDetail from "./food/detail";

function App() {
    return (
        <div className="">
            <Router>
                {/* Định nghĩa các tuyến đường */}
                <Routes>
                    <Route path="/" element={<Food />} />
                    <Route path="/food/:id" element={<FoodDetail />} />
                </Routes>
            </Router>
        </div>
    );
}

export default App;
