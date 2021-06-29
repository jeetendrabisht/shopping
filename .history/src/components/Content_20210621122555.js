import { Switch, Route } from "react-router-dom";
import RouteError from "./RouteError";
import Products from "./Products";
import Register from "./Register";
import SignIn from "./SignIn";
import Home from "./Home";

function Content() {
    return <>
        <Switch>
            <Route exact path="/" component={Home}></Route>
            <Route exact path="/home" component={Home}></Route>
            <Route exact path="/products" component={Products}></Route>
            <Route exact path="/register" component={Register}></Route>
            <Route exact path="/signin" component={SignIn}></Route>
            <Route component={RouteError}></Route>
        </Switch>
    </>
}

export default Content;