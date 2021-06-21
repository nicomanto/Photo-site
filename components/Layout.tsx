import React, { ReactNode } from "react";
import Head from "next/head";
import { Navbar, Nav } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import i18n from "../i18n/config";
import { SiInstagram, SiFacebook } from "react-icons/si";
import NavbarItem from "../interfaces/NavbarItem";
import {Button} from "react-bootstrap";

type Props = {
  children?: ReactNode;
  title?: string;
};



const Layout = ({
  children,
  title = "This is the default title",
}: Props) => {
  const { t } = useTranslation(["layout"]);

  const navbar: NavbarItem[] = [
    { title: t('portfolio'), URL: "/portfolio" },
    { title: t('aboutMe'), URL: "/aboutMe" },
    { title: t('contacts'), URL: "/contacts" },
  ];

  const changeLanguage= (lang: string)=>{
    i18n.changeLanguage(lang); 
    document.documentElement.lang = i18n.language;
  }

  return (
    <>
      <Head>  
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name ="copyright" content="Niccolò Mantovani" />
        <meta name ="keywords" content={t('keywords')}/>
        <meta name="description" content={t('description')} />
        <meta name="author" content="Niccolò Mantovani" />
      </Head>
      <header>

        <Navbar expand="lg">
          <Navbar.Brand className="navLinkBrand" href="/" lang="it" title="Home">Aurora Leso</Navbar.Brand>
          <Navbar.Brand className="socialIcon" href="https://www.instagram.com/auroraleso" title="Instragram Aurora Leso" target="_blank" rel="noopener">
            <SiInstagram />
          </Navbar.Brand>
          <Navbar.Brand className="socialIcon" href="https://www.facebook.com/aurora.leso" title="Facebook Aurora Leso" target="_blank" rel="noopener">
              <SiFacebook />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbar-nav" className="navbar-dark"/>
          <Navbar.Collapse id="navbar-nav">
            <Nav className="ml-auto">
              {navbar.map((item) => (
                  <Nav.Link className="navLink text-right px-4" href={item.URL} title={item.title} >{item.title}</Nav.Link>
                ))}
            </Nav>
          </Navbar.Collapse>       
        </Navbar>
        
      </header>
      <main>
        {children}
      </main>
      <footer className="text-center mb-3">
        <p>
          {" "}
          &copy; 2021
          {" "}
          <a
            lang="it"
            className="simpleLink"
            target="_blank"
            rel="noopener"
            title="Niccolò Mantovani site"
            href="https://nicomanto.github.io/About-me"
          >
            {"Niccolò Mantovani"}
          </a>
        </p>

        <Button variant="outline-light" onClick={() => {changeLanguage("it");}} size="sm">IT</Button>
        <Button variant="outline-light" onClick={() => {changeLanguage("en");}} size="sm">EN</Button>
      </footer>
    </>
  )
};

export default Layout;
