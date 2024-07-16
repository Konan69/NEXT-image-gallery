"use client";

import { Container, Navbar, Nav, NavDropdown } from "@/components/bootstrap";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavBar() {
  const pathname = usePathname();

  return (
    <Navbar
      bg="primary"
      variant="dark"
      sticky="top"
      expand="lg"
      collapseOnSelect
    >
      <Container>
        <Navbar.Brand as={Link} href="/">
          NEXTJS Image Gallery
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="main-navbar" />
        <Navbar.Collapse className="" id="main-navbar">
          <Navbar.Text>
            Signed in as: <a href="#login">Mark Otto</a>
          </Navbar.Text>
          <Nav className="flex-row gap-4">
            <Nav.Link as={Link} href="/static" active={pathname === "/static"}>
              Static
            </Nav.Link>
            <Nav.Link
              as={Link}
              href="/dynamic"
              active={pathname === "/dynamic"}
            >
              Dynamic{" "}
            </Nav.Link>
            <Nav.Link as={Link} href="/isr" active={pathname === "/isr"}>
              ISR
            </Nav.Link>
            <NavDropdown title="Topics" id="topics-dropdown">
              <NavDropdown.Item as={Link} href="/topics/health">
                Health
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} href="/topics/fitness">
                Fitness
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} href="/topics/coding">
                Coding
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
