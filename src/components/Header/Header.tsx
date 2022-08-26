import { Container } from "./styles";
import { BrowserRouter as Router } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import { useState } from "react";

import Curriculo from "../../assets/Akhatkulov Ibrokhim's Resume .pdf";
export function Header() {
  const [isActive, setActive] = useState(false);

  function toggleTheme() {
    let html = document.getElementsByTagName("html")[0];
    html.classList.toggle("light");
  }

  function closeMenu() {
    setActive(false);
  }

  return (
    <Container className="header-fixed">
      <Router>
        <HashLink smooth to="#home" className="logo">
          <span>A.</span>
          <span>Ibrohim</span>
        </HashLink>

        <input
          onChange={toggleTheme}
          className="container_toggle"
          type="checkbox"
          id="switch"
          name="mode"
        />
        <label htmlFor="switch">Toggle</label>

        <nav>
          <HashLink smooth to="#home" onClick={closeMenu}>
            Home
          </HashLink>
          <HashLink smooth to="#aboutme" onClick={closeMenu}>
            About me
          </HashLink>
          <HashLink smooth to="#skills" onClick={closeMenu}>
            Skills
          </HashLink>
          <HashLink smooth to="#portfolio" onClick={closeMenu}>
            Portfolio
          </HashLink>
          <HashLink smooth to="#contact" onClick={closeMenu}>
            Contact
          </HashLink>
          <a href={Curriculo} download className="button">
            CV
          </a>
        </nav>
        {/* <div
          aria-expanded={isActive ? "true" : "false"}
          aria-haspopup="true"
          aria-label={isActive ? "Fechar menu" : "Abrir menu"}
          className={isActive ? "menu active" : "menu"}
          onClick={() => {
            setActive(!isActive);
          }}
        ></div> */}
      </Router>
    </Container>
  );
}
