import React, { ReactNode } from "react";
import Head from "next/head";
import { Navbar, Nav} from "react-bootstrap";
import NavbarItem from "../interfaces/NavbarItem";
import {SiInstagram, SiFacebook} from "react-icons/si"

type Props = {
  children?: ReactNode;
  title?: string;
  navbar?: NavbarItem[];
};

const Layout = ({ children, title = "This is the default title", navbar=[{title: "Portfolio", URL: "/portfolio"},{title: "About", URL: "/about"},{title: "Contatti", URL: "/contatti"}] }: Props) => (
  <div>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <header>

    <nav className="navbar py-5 container">
      <Navbar.Brand className="navLink display-4" href="/">Aurora Leso</Navbar.Brand>
      
        {navbar.map((item) => (
          <Nav className="justify-content-end">
            <a className="navLink" href={item.URL}>{item.title}</a>
          </Nav>
        ))}
      <Navbar.Brand href="/"><i><SiFacebook/></i></Navbar.Brand>
      <Navbar.Brand href="/"><i><SiInstagram/></i></Navbar.Brand>
        
    </nav>
    </header>
    {children}
    <footer>
      <hr />
      <span>I'm here to stay (Footer)</span>
    </footer>
  </div>
);

export default Layout;
