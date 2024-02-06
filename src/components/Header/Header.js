import { ReactComponent as LogoImage } from "../../assets/img/Logo.svg";
import Container from "react-bootstrap/Container";
import header from "./Header.module.scss";

const Header = () => (
  <header className={header.header}>
    <Container className={header.container} fluid="xl">
      <LogoImage />
      <nav className={header.navigation}>
        <a href="/" className={header.link}>
          Users
        </a>
        <a href="/" className={header.link}>
          Sign Up
        </a>
      </nav>
    </Container>
  </header>
);
export default Header;
