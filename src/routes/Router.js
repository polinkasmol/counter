import { Route, Routes } from "react-router-dom";
import CounterContainer from "../components/Counter/containers/CounterContainer";
import ControlPanelView from "../components/ControlPanel/components";
import TodosApp from "../components/Todos/components/TodosApp";
import { RouteName } from "./routeNames";

const Router = () => {
    return(
        <Routes>
            <Route path={RouteName.HOME} element={<h1>Home page</h1>} />
            <Route path={RouteName.COUNTER} element={<CounterContainer/>} />
            <Route path={RouteName.CONTROL_PANEL} element={<ControlPanelView/>} />
            <Route path={RouteName.TODO} element={<TodosApp/>} />
        </Routes>
    );
};
export default Router;