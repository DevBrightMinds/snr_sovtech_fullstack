import {
    BrowserRouter as Router,
    useRoutes,
} from "react-router-dom";

import "./App.css";

import HomeScreen from "./screens/HomeScreen";
import DetailsScreen from "./screens/DetailsScreen";

// redux //
import { createStore } from "redux";
import { Provider } from "react-redux";
import allReducers from "./utils/Redux/Reducers/Index";

const store = createStore(allReducers);

const AppRoutes = () => {
    const routes = useRoutes(
        [
            { path: "/", element: <HomeScreen /> },
            { path: "/details", element: <DetailsScreen /> }
        ]
    )

    return routes;
}

const App = () => {
    return <>
        <Provider store={store}>
            <Router>
                <AppRoutes />
            </Router>
        </Provider>

    </>
}

export default App;