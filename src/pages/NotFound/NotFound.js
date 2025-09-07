import { Link } from "react-router-dom";
import "./NotFound.css";

const NotFound = () => {
    return (
        <div className="notfound">
            <h1 className="notfound-title">404</h1>
            <h2 className="notfound-subtitle">Developer Not Found 🚀</h2>
            <p className="notfound-text">
                The page you’re looking for doesn’t exist or may have been moved.
            </p>
            <Link to="/" className="notfound-link">
                Back to Home
            </Link>
        </div>
    );
};

export default NotFound;
