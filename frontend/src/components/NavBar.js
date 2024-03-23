import React, { useState, useContext } from "react";
import {
  Flex,
  Text,
  Button,
  Stack,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  useColorMode,
  Box,
  Link,
  Image,
} from "@chakra-ui/react";
import {
  MdDarkMode,
  MdLightMode,
  MdAccountCircle,
  MdShoppingCart,
} from "react-icons/md";
import { CartContext } from "../CartContext";
import Logo from "../img/guizao-flores.png";

const NavBar = ({ categories, onSelectCategory, onSearch }) => {
  const navData = [
    {
      name: "Início",
      href: "/",
    },
    {
      name: "Sobre nós",
      href: "aboutus",
    },
    {
      name: "Produtos",
      href: "products",
    },
    {
      name: "Contato",
      href: "contact",
    },
  ];

  const accountData = [
    {
      name: "Entrar",
      href: "signin",
    },
    {
      name: "Cadastrar-se",
      href: "signup",
    },
  ];

  const { colorMode, toggleColorMode } = useColorMode();
  const [color, setColor] = useState(false);
  const cart = useContext(CartContext);
  const [show, setShow] = useState(false);
  const [addToCartClicked, setAddToCartClicked] = useState(false);
  const handleClose = () => {
    setShow(false);
    setAddToCartClicked(false);
  };
  const handleShow = () => setShow(true);
  const productsCount = cart.items.reduce(
    (sum, product) => sum + product.quantity,
    0
  );
  const changeColor = () => {
    if (window.scrollY >= 90) {
      setColor(true);
    } else {
      setColor(false);
    }
  };

  window.addEventListener("scroll", changeColor);

  return (
    <Box
      w="100%"
      position="fixed"
      zIndex="5"
      top="0"
      as="nav"
      pl="1.5rem"
      pr="1.5rem"
      pt="1rem"
      pb="1rem"
      bg={colorMode === "light" ? "white" : "#1A202C"}
    >
      <Flex
        align="center"
        justify="space-between"
        colorScheme={colorMode === "light" ? "dark" : "light"}
      >
        <Box>
          <Image src={Logo} alt="Logo" boxSize="100px" />
        </Box>
        <Stack direction="row" spacing="6" justify="center" flex="1">
          {navData.map((item, i) => (
            <Text fontSize="md" key={i}>
              <Link href={item.href}>{item.name}</Link>
            </Text>
          ))}
        </Stack>
        <Stack direction="row" gap="3" mr="4">
          <Box>
            <Button onClick={toggleColorMode} variant="ghost">
              {colorMode === "light" ? <MdDarkMode /> : <MdLightMode />}
            </Button>
          </Box>
          <Box>
            <Menu>
              <MenuButton as={Button} variant="ghost">
                <MdAccountCircle />
              </MenuButton>
              <MenuList>
                {accountData.map((item, i) => (
                  <MenuItem key={i}>{item.name}</MenuItem>
                ))}
              </MenuList>
            </Menu>
          </Box>
          <Box>
            <Button variant="ghost" onClick={handleShow}>
              <MdShoppingCart /> ({productsCount})
            </Button>
          </Box>
        </Stack>
      </Flex>
    </Box>
  );
};

export default NavBar;
