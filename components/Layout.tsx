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
        <meta name ="keywords" content="Aurora Leso, Model, Biography, Measures, Contacts, Photo, Photography, Picture"/>
        <meta name="description" content="Aurora Leso model site" />
        <meta name="author" content="Niccolò Mantovani" />
      </Head>
      <header>
        <nav className="navbar-dark navbar py-5 container">
          <Navbar.Brand className="navLinkBrand display-4" href="/" lang="it">
            Aurora Leso
          </Navbar.Brand>
          {navbar.map((item) => (
              <a className="navLink" href={item.URL}>
                {item.title}
              </a>
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
            rel="noopener me noreferrer"
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
