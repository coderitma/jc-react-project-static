import { Outlet, Link } from "react-router-dom";

export const appName = {
  ecommerce: "/ecommerce",
};

export function EcommerceMain() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            Gramedio.com
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link" to="/">
                  Signin
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <div>
        <Outlet />
      </div>
    </>
  );
}
