import "./error.scss";
import { Link, Outlet } from "react-router-dom";

function Error() {
  return (
    <div className="error_message">
      <div className="number_error"> 404 </div>

      <h1 className="error_text">
        Oups La page que vous demandez n'existe pas
      </h1>

      <Link to="/" className="back">
        Retourner sur la page d'accueil
      </Link>
      <Outlet />
    </div>
  );
}

export default Error;
