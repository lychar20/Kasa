import "./footer.scss";
import LOGO_footer from "assets/image/LOGO_footer.png";

function Footer() {
  return (
    <div className="footer">
      <img
        src={LOGO_footer}
        alt="logo-la-kasa-footer"
        className="logo_footer"
      />
      <p className="reserved"> © 2020 Kasa. All rights reserved</p>
    </div>
  );
}

export default Footer;
