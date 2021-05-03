import React, { ReactNode } from "react";
import Head from "next/head";
import { Navbar, Nav } from "react-bootstrap";
import { SiInstagram, SiFacebook } from "react-icons/si";
import NavbarItem from "../interfaces/NavbarItem";

type Props = {
  children?: ReactNode;
  title?: string;
  navbar?: NavbarItem[];
};

const Layout = ({
  children,
  title = "This is the default title",
  navbar = [
    { title: "Portfolio", URL: "/portfolio" },
    { title: "About me", URL: "/aboutMe" },
    { title: "Contact", URL: "/contact" },
  ],
}: Props) => (
  <div>
    <Head>
      <html lang="en" />
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <meta name ="copyright" content="Niccolò Mantovani" />
      <meta name ="keywords" content="Aurora Leso, Model, Photography, Photo, Picture"/>
      <meta name="description" content="Aurora Leso model site" />
      <meta name="author" content="Niccolò Mantovani" />
    </Head>
    <header>
      <nav className="navbar-dark navbar py-5 container">
        <Navbar.Brand className="navLinkBrand display-4" href="/" lang="it">
          Aurora Leso
        </Navbar.Brand>
        {navbar.map((item) => (
          <Nav className="justify-content-end">
            <a className="navLink" href={item.URL}>
              {item.title}
            </a>
          </Nav>
        ))}
        <Navbar.Brand className="socialIcon" href="https://www.instagram.com/auroraleso" target="_blank" rel="noopener me">
          <i>
            <SiInstagram />
          </i>
        </Navbar.Brand>
        <Navbar.Brand className="socialIcon" href="https://www.facebook.com/aurora.leso" target="_blank" rel="noopener me">
          <i>
            <SiFacebook />
          </i>
        </Navbar.Brand>

        {/* mobile menù */}
        <Navbar.Toggle data-toggle="collapse" data-target="#navbarCollapseContent" />
        <Navbar.Collapse id="navbarCollapseContent">
          {navbar.map((item) => (
            <Nav className="justify-content-end">
              <a className="navLinkCollapse" href={item.URL}>
                {item.title}
              </a>
            </Nav>
          ))}
        </Navbar.Collapse>
      </nav>
    </header>
    {children}
    <footer className="text-center">
      <hr />
      <p>
        {" "}
        &copy; 2021 powered by
        {" "}
        <a
          lang="it"
          className="linkFooter"
          target="_blank"
          rel="noopener me noreferrer"
          title="Niccolò Mantovani site"
          href="https://nicomanto.github.io/About-me"
        >
          {"Niccolò Mantovani"}
        </a>
      </p>
    </footer>
  </div>
);

export default Layout;
