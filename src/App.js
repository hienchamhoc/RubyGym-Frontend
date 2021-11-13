import './gridsystem.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import routes from './routes'
import { ScrollToTop } from './components'
import { useDispatch } from 'react-redux'
import { useEffect } from 'react'
import * as Actions from './store/actions'

function App() {

    const dispatch = useDispatch();

    useEffect(() => {
        const user = JSON.parse(localStorage.getItem('user'));
        console.log("user: ", user);
        dispatch(Actions.saveUserToRedux(user));
    }, [])


    //Tạo các Route
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
            <ScrollToTop>
                {showContentMenus(routes)}
            </ScrollToTop>
        </Router>
    );
}

export default App;
