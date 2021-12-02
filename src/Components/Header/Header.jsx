import logo from "../../assets/logo/logo.png";
import "./header.css";

import { Link } from "react-router-dom";

function Header() {
  let url = "";
  return (
    <>
      <header>
        <a href={url}>
          <Link to="/">
            <img src={logo} className="logo" alt="" />
          </Link>
        </a>

        <ul>
          <Link to="/quem-somos">
            <li className="item__menu__home">
              <a className="menu" href={url}>
                Quem Somos
              </a>
            </li>
          </Link>

          <Link to="/planos">
            <li className="item__menu__home">
              <a className="menu" href={url}>
                Planos
              </a>
            </li>
          </Link>

          <Link to="/cadastro">
            <li className="item__menu__home">
              <a className="menu" href={url}>
                Cadastre-se
              </a>
            </li>
          </Link>

          <div className="pipe"></div>

          <Link to="/login">
            <li className="item__menu__home">
              <a className="menu" href={url}>
                <li className="active-header">Acesse</li>
              </a>
            </li>
          </Link>
        </ul>
      </header>
    </>
  );
}

export default Header;
