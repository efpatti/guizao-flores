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
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
} from "@chakra-ui/react";
import {
  MdDarkMode,
  MdLightMode,
  MdAccountCircle,
  MdShoppingCart,
} from "react-icons/md";
import { CartContext } from "../CartContext";
import Logo from "../img/guizao-flores.png";
import CartProduct from "./CartProduct";

const NavBar = ({ categories, onSelectCategory }) => {
  const navData = [
    { name: "Início", href: "/" },
    { name: "Sobre nós", href: "aboutus" },
    { name: "Produtos", href: "products" },
    { name: "Contato", href: "contact" },
  ];

  const accountData = [
    { name: "Entrar", href: "signin" },
    { name: "Cadastrar-se", href: "signup" },
  ];

  const { colorMode, toggleColorMode } = useColorMode();
  const [showModal, setShowModal] = useState(false);
  const cart = useContext(CartContext);
  const productsCount = cart.items.reduce(
    (sum, product) => sum + product.quantity,
    0
  );

  const handleCartClick = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

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
            <Button variant="ghost" onClick={handleCartClick}>
              <MdShoppingCart /> ({productsCount})
            </Button>
          </Box>
        </Stack>
      </Flex>
      <Modal isOpen={showModal} onClose={handleCloseModal}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Carrinho de Compras</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            {cart.items.map((product) => (
              <CartProduct
                key={product.id}
                id={product.id}
                quantity={product.quantity}
                name={product.name}
              />
            ))}
          </ModalBody>
          <ModalFooter>
            <Button
              bg={colorMode === "light" ? "#405B18" : "greenyellow"}
              color={colorMode === "light" ? "whitesmoke" : "gray.800"}
              _hover={{ opacity: "70%" }}
              mr={3}
              onClick={handleCloseModal}
            >
              Fechar
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Box>
  );
};

export default NavBar;
