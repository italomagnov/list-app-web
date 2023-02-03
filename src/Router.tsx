import { Home } from 'pages/Home';
import { List } from 'pages/List';
import { Route, Routes } from 'react-router';
import { BrowserRouter } from 'react-router-dom';

function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route
                    path="/"
                    element={<Home />}
                />
                <Route
                    path="/list"
                    element={<List />}
                />
            </Routes>
        </BrowserRouter>
    );
}

export default Router;

{
    /* <div className="h-screen flex items-center justify-center bg-background"></div> */
}
