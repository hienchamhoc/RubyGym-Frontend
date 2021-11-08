import { Header } from './components';
import './gridsystem.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

function App() {
    return (
        <Router>
            <Header />
        </Router>
    );
}

export default App;
