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
  Grid,
} from "@chakra-ui/react";
import {
  MdDarkMode,
  MdLightMode,
  MdAccountCircle,
  MdShoppingCart,
} from "react-icons/md";
import { FaArrowUp } from "react-icons/fa";
import { CartContext } from "../../CartContext";
import Guizao from "../../img/guizao-flores.png";
import CartProduct from "../CartProduct";
import "./NavBar.css";

const NavBar = ({ categories, onSelectCategory }) => {
  const navData = [
    { name: "Início", href: "/" },
    { name: "Sobre nós", href: "/aboutus" },
    { name: "Produtos", href: "/products" },
    { name: "Contato", href: "/contact" },
  ];

  const accountData = [
    { name: "Entrar", href: "/signin" },
    { name: "Cadastrar-se", href: "/signup" },
  ];

  // change NavBar when scrolling
  const [color, setColor] = useState(false);
  const changeColor = () => {
    if (window.scrollY >= 90) {
      setColor(true);
    } else {
      setColor(false);
    }
  };

  window.addEventListener("scroll", changeColor);

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

  const scrollToTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  const formatPrice = (price) => {
    return price.toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL",
    });
  };

  return (
    <>
      <Box
        className="font-header"
        w="100%"
        position="fixed"
        zIndex="5"
        mb="4rem"
        top="0"
        as="nav"
        pl="2rem"
        pr="2rem"
        pt="2rem"
        pb="2rem"
        border="0px"
        boxShadow={
          color
            ? colorMode === "light"
              ? "0px 0px 0px 2px rgba(51, 51, 51, 0.50)"
              : "0px 0px 0px 2px rgba(182, 182, 182, 0.75)"
            : "transparent"
        }
        bg={colorMode === "light" ? "white" : "#1A202C"}
      >
        <Flex
          align="center"
          justify="space-between"
          colorScheme={colorMode === "light" ? "dark" : "light"}
        >
          <Box
            position="fixed"
            w="200px"
            height="100px"
            justify="center"
            align="center"
          >
            <Image
              src={Guizao}
              alt="Logo"
              boxSize="100px"
              className="blink-me"
              position="absolute"
              top="0"
              left="0"
            />
          </Box>

          <Stack direction="row" spacing="6" justify="center" flex="1">
            {navData.map((item, i) => (
              <Link href={item.href} fontSize="md" key={i}>
                {item.name}
              </Link>
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
                    <MenuItem key={i}>
                      <Link href={item.href} w="100%">
                        {item.name}
                      </Link>
                    </MenuItem>
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
              {productsCount > 0 ? (
                <>
                  {cart.items.map((product) => (
                    <CartProduct
                      key={product.id}
                      id={product.id}
                      quantity={product.quantity}
                      name={product.name}
                    />
                  ))}
                  <Text fontSize="md">
                    <Text as="b">Total:</Text>{" "}
                    {formatPrice(cart.getTotalCost())}
                  </Text>
                  <Button
                    variant="ghost"
                    color={colorMode === "light" ? "#405B18" : "greenyellow"}
                    onClick={() => {
                      const totalPrice = cart.getTotalCost();
                      window.location.href = `/payment?totalPrice=${totalPrice}`;
                    }}
                  >
                    Comprar
                  </Button>
                </>
              ) : (
                <Text>Você não tem itens no carrinho</Text>
              )}
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
      <Flex
        position="fixed"
        right="0"
        bottom="0"
        p="3"
        m="2"
        display={color ? "flex" : "none"}
      >
        <Button
          borderRadius="full"
          onClick={scrollToTop}
          _hover={{ opacity: "70%" }}
          zIndex="5"
          bg={colorMode === "light" ? "#405B18" : "greenyellow"}
          color={colorMode === "light" ? "whitesmoke" : "gray.800"}
        >
          <FaArrowUp />
        </Button>
      </Flex>
    </>
  );
};

export default NavBar;
