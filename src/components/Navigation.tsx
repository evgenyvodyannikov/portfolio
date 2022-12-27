import { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import { Nav, Navbar } from "react-bootstrap";
import logo from "../assets/img/logo.svg";
import nav1 from "../assets/img/nav-icon1.svg";
import nav2 from "../assets/img/nav-icon2.svg";
import nav3 from "../assets/img/nav-icon3.svg";

const Navigation = () => {
  const [activeLink, setActiveLink] = useState<string>("home");
  const [isScrolled, setIsScrolled] = useState<boolean>(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    // add event listener on scroll
    window.addEventListener("scroll", onScroll);
    // remove if component removed from DOM
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const onUpdateActiveLink = (value: string) => {
    console.log(value);
    setActiveLink(value);
  };

  return (
    <Navbar expand="lg" className={isScrolled ? "scrolled" : ""}>
      <Container>
        <Navbar.Brand href="#home">
          <img src={logo} alt="logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav">
          <span className="navbar-toggler-icon" />
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link
              href="#home"
              className={
                activeLink === "home" ? "active navbar-link" : "navbar-link"
              }
              onClick={(event: React.MouseEvent<HTMLInputElement>) =>
                onUpdateActiveLink("home")
              }
            >
              Home
            </Nav.Link>
            <Nav.Link
              href="#skills"
              className={
                activeLink === "skills" ? "active navbar-link" : "navbar-link"
              }
              onClick={(event: React.MouseEvent<HTMLInputElement>) =>
                onUpdateActiveLink("skills")
              }
            >
              Skills
            </Nav.Link>
            <Nav.Link
              href="#projects"
              className={
                activeLink === "projects" ? "active navbar-link" : "navbar-link"
              }
              onClick={(event: React.MouseEvent<HTMLInputElement>) =>
                onUpdateActiveLink("projects")
              }
            >
              Projects
            </Nav.Link>
          </Nav>
          <span className="navbar-text">
            <div className="social-icon">
              <a href="https://www.linkedin.com/in/eugene-vodyannikov-b2395725b/" target="_blank">
                <img src={nav1} alt="" />
              </a>
              <a href="https://vk.com/v_lucky_id" target="_blank">
                <img src={nav2} alt="" />
              </a>
              <a href="https://github.com/evgenyvodyannikov" target="_blank">
                <img src={nav3} alt="" />
              </a>
            </div>
            <button className="vvd" onClick={() => console.log("connect")} />
            <span>Let's Connect</span>
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigation;
