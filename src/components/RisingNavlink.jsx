import React from 'react';

import styled, { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    background-color: hsl(210deg 55% 92%);
    font-family: sans-serif;
    color: black;
  }
`;

const Header = styled.header`
  position: sticky;
  top: 0;
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  background: white;
  padding: 16px 32px;
  width: min(75vw, 700px);
  border-radius: 4px;
`;

const Logo = styled.a`
  font-size: 1.5rem;
  font-weight: 900;
  text-decoration: none;
  color: inherit;
`;

const Nav = styled.nav``;

const NavList = styled.ul`
  display: flex;
  gap: 16px;
  list-style: none;
  padding: 0;
  margin: 0;
`;

const NavLinkAnchor = styled.a`
  display: block;
  position: relative;
  text-decoration: none;
  color: inherit;
  font-weight: 500;
  font-size: 1.25rem;
`;

const Revealed = styled.span`
  color: hsl(333deg 100% 50%);
  position: absolute;
  top: 0;
  left: 0;
  filter: drop-shadow(0px 0px 4px white);
  clip-path: polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%);
  transition: clip-path 1000ms;

  ${NavLinkAnchor}:hover & {
    clip-path: polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%);
    transition: clip-path 300ms;
  }
`;

function NavLink({ href, children }) {
  return (
    <NavLinkAnchor href={href}>
      {children} <Revealed aria-hidden={true}>{children}</Revealed>
    </NavLinkAnchor>
  );
}

function RisingNavlink() {
  return (
    <>
      <GlobalStyles />
      <Header>
        <Logo href="/">Logo</Logo>

        <Nav>
          <NavList>
            <li>
              <NavLink href="/">One</NavLink>
            </li>
            <li>
              <NavLink href="/">Two</NavLink>
            </li>
            <li>
              <NavLink href="/">Three</NavLink>
            </li>
          </NavList>
        </Nav>
      </Header>
    </>
  );
}

export default RisingNavlink;
