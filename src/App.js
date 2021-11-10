import { Service, Home, Feedback, Login } from './pages';
import './gridsystem.css'
import { Route, Routes } from 'react-router-dom'
function App() {
    return (
        <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/service" element={<Service />} />
            <Route path="/feedback" element={<Feedback />} />
            <Route path="/login" element={<Login />} />
        </Routes>
    );
}

export default App;
