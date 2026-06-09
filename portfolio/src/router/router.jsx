import { createBrowserRouter } from "react-router-dom";
import App from "../App/App";
import Home from "../Pages/Home/Home";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                index: true,
                element: <Home />,
            },
        ],
    },
]);

export default router;
