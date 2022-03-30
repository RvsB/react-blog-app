import { Link } from "react-router-dom";

const NotFound = () => {
    return ( 
        <div className="not-found">
            <h2>Sorry for the inconvinience!</h2>
            <p>The page you requested for cannot be found!</p>
            <Link className="not-found-link" to="/">Back to the homepage...</Link>
        </div>
    );
}

export default NotFound;