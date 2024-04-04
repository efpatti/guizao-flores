import React from "react";
import "./Rodape.css";
import { Text, Link, Box, useColorMode, Stack, Center } from "@chakra-ui/react";
import { FaInstagram, FaFacebook, FaTwitter } from "react-icons/fa";
function Footer() {
  const { colorMode } = useColorMode();
  const navLinks = [
    {
      name: "Página Inicial",
      href: "/home",
    },
    {
      name: "Sobre nós",
      href: "/aboutus",
    },
    {
      name: "Produtos",
      href: "/catalogo",
    },
    {
      name: "Contato",
      href: "/contato",
    },
  ];

  const socialLinks = [
    {
      icon: FaInstagram,
      size: "24px", // increase size
    },
    {
      icon: FaFacebook,
      size: "24px", // increase size
    },
    {
      icon: FaTwitter,
      size: "24px", // increase size
    },
  ];
  return (
    <Box bg={colorMode === "light" ? "#F6F4F0" : "transparent"}>
      <footer className="footer position-relative mt-3">
        <div className="footerContent">
          <div className="footerSection">
            <ul>
              {navLinks.map((link, index) => (
                <li key={index}>
                  <Link href="/">{link.name}</Link>{" "}
                  {/* Add margin-right to separate links */}
                </li>
              ))}
            </ul>

            <Stack
              direction="row"
              spacing="10px" // Increase spacing between social links
              align="center" // Align items vertically center
              style={{ justifyContent: "center", alignItems: "center" }}
            >
              {socialLinks.map((rede, i) => (
                <Link
                  key={i}
                  fontSize={rede.size}
                  color={colorMode === "light" ? "#405B18" : "greenyellow"}
                >
                  {React.createElement(rede.icon)}
                </Link>
              ))}
            </Stack>
          </div>
        </div>
        <p className="footerText">© 2024 Todos os direitos reservados.</p>
      </footer>
    </Box>
  );
}

export default Footer;
