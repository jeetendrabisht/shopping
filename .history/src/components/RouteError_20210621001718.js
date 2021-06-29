import "../scss/routeError_content.scss";

export default function RouteError() {
    return <div className="routeError_content">
        <h1>Path Not Found!</h1>
        <h2>Suggested Path</h2>
        <p>/home</p>
        <p>/products</p>
    </div>
}