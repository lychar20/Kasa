import { Link, Outlet } from "react-router-dom";
import LOGO from "assets/image/LOGO.png";
import "./header.scss";

function Header() {
  return (
    <><div className="hearder_marge">  
      <div className="header">
        <img src={LOGO} alt="logo-la-kasa" className="logo" />

        <nav>
          <Link to="/" className="link">
            Accueil
          </Link>
          <Link to="/about" className="link">
            A Propos
          </Link>
        </nav>
      </div>
      </div>
      <Outlet />
    </>
  );
}

export default Header;


