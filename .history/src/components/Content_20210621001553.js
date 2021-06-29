import { Switch, Route } from "react-router-dom";
import RouteError from "./RouteError";
import Products from "./Products";
import Home from "./Home";
import "../scss/content.scss";

function Content() {
    return <div className="main-content">
        <Switch>
            <Route exact path="/" component={Home}></Route>
            <Route exact path="/home" component={Home}></Route>
            <Route exact path="/products" component={Products}></Route>
            <Route component={RouteError}></Route>
        </Switch>
    </div>
}

export default Content;