import { Link } from "react-router-dom";

export default function Nav() {
    return <div>
        <h1>Nav</h1>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
    </div>
}