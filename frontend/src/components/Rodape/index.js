import React from "react";
import "./Rodape.css";
import { Text, Link, Box, useColorMode, Stack } from "@chakra-ui/react";
import { FaInstagram, FaFacebook, FaTwitter } from "react-icons/fa";
function Rodape() {
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
    },
    {
      icon: FaFacebook,
    },
    {
      icon: FaTwitter,
    },
  ];
  const { colorMode } = useColorMode();
  return (
    <Box
      bg={colorMode === "light" ? "#F6F4F0" : "transparent"}
      // border="0px"
      // borderTop="1px"
      // borderColor={colorMode == "light" ? "gray.700" : "gray.400"}
    >
      <footer className="footer position-relative">
        <div className="footerContent">
          <div className="footerSection">
            <Text>Sobre</Text>
            <p>Este é um exemplo de rodapé em React.</p>
          </div>
          <div className="footerSection">
            <Text>Links Úteis</Text>
            <ul>
              {navLinks.map((link, index) => (
                <li key={index}>
                  <Link href="/">{link.name}</Link>
                </li>
              ))}
            </ul>
          </div>
          <Stack direction="row" spacing="5px">
            {socialLinks.map((rede, i) => (
              <Link key={i}>{React.createElement(rede.icon)}</Link>
            ))}
          </Stack>
        </div>
        <p className="footerText">© 2024 Todos os direitos reservados.</p>
      </footer>
    </Box>
  );
}

export default Rodape;
