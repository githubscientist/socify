import { Link } from "react-router-dom"

// Menu for unauthenticated users
const guestMenu = (
    <>
        <li className="nav-item">
            <Link className="nav-link" to="/login">Login</Link>
        </li>
        <li className="nav-item">
            <Link className="nav-link" to="/register">Register</Link>
        </li>
    </>
)

// Menu for authenticated users
const userMenu = (
    <>
        <li className="nav-item">
            <Link className="nav-link" to="/profile">{ } Profile</Link>
        </li>
        <li className="nav-item">
            <Link className="nav-link" to="/createPost">Create Post</Link>
        </li>
        <li className="nav-item">
            <Link className="nav-link" to="/logout">Logout</Link>
        </li>
    </>
)

// Menu for admin users
const adminMenu = (
    <>
        <li className="nav-item">
            <Link className="nav-link" to="/admin/dashboard">Admin Dashboard</Link>
        </li>
        <li className="nav-item">
            <Link className="nav-link" to="/admin/users">Manage Users</Link>
        </li>
        <li className="nav-item">
            <Link className="nav-link" to="/admin/posts">Manage Posts</Link>
        </li>
        <li className="nav-item">
            <Link className="nav-link" to="/admin/logout">Logout</Link>
        </li>
    </>
)

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">Socify</Link>
                <button className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNav"
                    aria-controls="navbarNav"
                    aria-expanded="false"
                    aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link" to="/">Home</Link>
                        </li>
                        { }
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;