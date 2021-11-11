import { Header, Footer } from './components';
import './gridsystem.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { useSelector } from 'react-redux';
import routes from './routes'

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
        <Router>
            {showContentMenus(routes)}
        </Router>
    );
}

export default App;
