import { Switch,Route } from "react-router-dom";
import Products from "./Products";
import "../scss/content.scss";

function Content() {
    return <div className="main-content">
        <Switch>
            <Route component={Products}></Route>
            <Route></Route>
        </Switch>
    </div>
}

export default Content;