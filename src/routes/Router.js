import { Route, Routes } from "react-router-dom";
import CounterContainer from "../components/Counter/containers/CounterContainer";
import { RouteName } from "./routeNames";

const Router = () => {
    return(
        <Routes>
            <Route path={RouteName.HOME} element={<h1>Home page</h1>} />
            <Route path={RouteName.COUNTER} element={<CounterContainer/>} />
        </Routes>
    );
};
export default Router;