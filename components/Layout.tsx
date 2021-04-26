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

const Layout = ({ children, title = "This is the default title", navbar=[{title: "Portfolio", URL: "/portfolio"},{title: "About me", URL: "/aboutMe"},{title: "Contact", URL: "/contact"}] }: Props) => (
    <>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <header>

    <nav className="navbar-dark navbar py-5 container">
      <Navbar.Brand className="navLinkBrand display-4" href="/" lang="it" >Aurora Leso</Navbar.Brand>
        {navbar.map((item) => (
            <Nav className="justify-content-end">
              <a className="navLink" href={item.URL}>{item.title}</a>
            </Nav>
        ))}
      <Navbar.Brand href="/"><i><SiFacebook/></i></Navbar.Brand>
      <Navbar.Brand href="/"><i><SiInstagram/></i></Navbar.Brand>
      
      {/*mobile menù*/}
      <Navbar.Toggle data-toggle="collapse" data-target="#navbarCollapseContent"/>
      <Navbar.Collapse id="navbarCollapseContent">
      {navbar.map((item) => (
          
            <Nav className="justify-content-end">
              <a className="navLinkCollapse" href={item.URL}>{item.title}</a>
            </Nav>
          
        ))}
      </Navbar.Collapse>
        
    </nav>
    </header>
    {children}
    <footer className="text-center">
      <hr />
      <p> &copy; 2021 <a lang="it" className="linkFooter" href="https://nicomanto.github.io/About-me">Niccolò Mantovani</a></p>
    </footer>
    </>
);

export default Layout;
