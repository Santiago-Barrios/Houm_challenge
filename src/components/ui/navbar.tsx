import { NavLink } from "react-router-dom";
import { useStyles } from "../../shared/styles/useStyles";

export const Navbar = () => {
  const clases = useStyles();

  const handleLogOut = () => {
    // TODO
    console.log("logout");
  };

  return (
    <nav className="navbar navbar-expand-sm " style={clases.navbar}>
      {/* <Link className="navbar-brand" to="/">
        Pokemon
      </Link> */}

      <div className="navbar-collapse">
        <div className="navbar-nav">
          <NavLink
            className="nav-item nav-link "
            style={ ({isActive}) => !isActive ? clases.navbarLink : clases.navbarLinkActive}
            to="/"
            >
            List
          </NavLink>

          <NavLink
            className="nav-item nav-link"
            style={ ({isActive}) => !isActive ? clases.navbarLink : clases.navbarLinkActive}
            to="/about"
          >
            about
          </NavLink>

          <NavLink
            className="nav-item nav-link"
            style={ ({isActive}) => !isActive ? clases.navbarLink : clases.navbarLinkActive}

            to="/help"
          >
            help
          </NavLink>
        </div>
      </div>

      <div className="navbar-collapse collapse w-100 order-3 dual-collapse2 d-flex justify-content-end">
        <ul className="navbar-nav ml-auto">
          <span className="nav-item nav-link" style={{color: "white"}}>
            {" "}
            Santiago{" "}
          </span>
          <button
            className="nav-item nav-link btn"
            style={clases.navbarLink}
            onClick={handleLogOut}
          >
            Logout
          </button>
        </ul>
      </div>
    </nav>
  );
};
