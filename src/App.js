import { Header } from './components';
import { About } from './components';
import { Home } from './components';
import { Footer } from './components';
import { Login } from './components';
import './gridsystem.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

function App() {
    return (
        <Router>
            <Header />
            <Routes>
                <Route path="/" exact element={<Home />} />
                <Route path="/about" exact element={<About />} />
                <Route path="/login" exact element={<Login />} />
            </Routes>
            <Footer />
        </Router>
    );
}

export default App;
