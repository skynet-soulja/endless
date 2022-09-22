import "./Header.css";

import logo from "../../assets/logo-endless.svg";

export function Header() {
  return (
    <header className="header">
      <div className="gutter">
        <img src={logo} className="logo" alt="logo" />
      </div>
    </header>
  );
}
