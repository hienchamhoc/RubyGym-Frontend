<<<<<<< HEAD
import { Header, Footer } from './components';
import './gridsystem.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { useSelector } from 'react-redux';
import routes from './routes'

=======
import { Service, Home, Feedback, Login } from './pages';
import './gridsystem.css'
import { Route, Routes } from 'react-router-dom'
>>>>>>> 05ddadc622ee7547456bb38cf5927f9c79a0a14b
function App() {

    const showContentMenus = () => {
        let result = null;
        result = routes.map((route, index) => {
            return (
                <Route
                    key={index}
                    path={route.path}
                    element={route.element}
                />
            )
        })
        return <Routes>{result}</Routes>;
    }

    return (
<<<<<<< HEAD
        <Router>
            {showContentMenus(routes)}
        </Router>
=======
        <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/service" element={<Service />} />
            <Route path="/feedback" element={<Feedback />} />
            <Route path="/login" element={<Login />} />
        </Routes>
>>>>>>> 05ddadc622ee7547456bb38cf5927f9c79a0a14b
    );
}

export default App;
