import React, { useState } from "react";
import {
  Flex,
  Text,
  Stack,
  Grid,
  Box,
  Image,
  useColorMode,
  Button,
} from "@chakra-ui/react";
import { categoriesStore, getProductData } from "./data";
import reactStringReplace from "react-string-replace";
import { MdShoppingCart } from "react-icons/md";
import ProductCard from "../../components/ProductCard";

function Catalogo() {
  const { colorMode } = useColorMode();
  const [selectedCategory, setSelectedCategory] = useState(null);

  const handleCategoryClick = (categoryId) => {
    setSelectedCategory(categoryId === selectedCategory ? null : categoryId);
  };

  return (
    <Flex mt="10rem" justify="center">
      <Stack direction="column" spacing="5px" maxW="70%">
        <Flex justify="center">
          <Grid templateColumns="repeat(2, 1fr)" gap="1em">
            {categoriesStore.map((category) => (
              <Box key={category.id}>
                <Button
                  onClick={() => handleCategoryClick(category.id)}
                  isActive={selectedCategory === category.id}
                >
                  {category.name}
                </Button>
              </Box>
            ))}
          </Grid>
        </Flex>
        <Box>
          {categoriesStore.map((category) => (
            <div
              key={category.id}
              style={{
                display:
                  selectedCategory === category.id || !selectedCategory
                    ? "block"
                    : "none",
              }}
            >
              <Grid templateColumns="repeat(4, 1fr)" gap="10px">
                {category.products.map((product) => (
                  <Box
                    key={product.id}
                    _hover={{ cursor: "pointer", boxShadow: "lg" }}
                    borderRadius="sm"
                    p="2"
                  >
                    <Text
                      as="mark"
                      bg={colorMode === "light" ? "#405B18" : "greenyellow"}
                      borderRadius="md"
                      color={colorMode === "light" ? "whitesmoke" : "gray.800"}
                    >
                      {(
                        ((parseFloat(product.old_price) -
                          parseFloat(product.price)) /
                          parseFloat(product.old_price)) *
                        100
                      ).toFixed(0)}
                      %
                    </Text>
                    <Image src={product.img} />
                    <Text
                      fontWeight="md"
                      color={colorMode === "light" ? "gray.600" : "gray.300"}
                      p="3"
                    >
                      {product.name}
                    </Text>
                    <Stack direction="row">
                      <Box>
                        <Button
                          bg={colorMode === "light" ? "#405B18" : "greenyellow"}
                          borderRadius="md"
                          borderColor={
                            colorMode === "light" ? "#1A202C" : "greenyellow"
                          }
                          border="1px"
                          _hover={{
                            color:
                              colorMode === "light" ? "#1A202C" : "greenyellow",
                            bg:
                              colorMode === "light" ? "greenyellow" : "#1A202C",
                          }}
                          color={
                            colorMode === "light" ? "whitesmoke" : "gray.800"
                          }
                          leftIcon={<MdShoppingCart />}
                          size="sm"
                        >
                          Add to Cart
                        </Button>
                      </Box>
                      <Box ml="auto">
                        <Text
                          fontWeight="semibold"
                          fontSize="lg"
                          color={
                            colorMode === "light" ? "gray.700" : "gray.200"
                          }
                        >
                          ${product.price}
                        </Text>
                        <Text
                          as="s"
                          fontSize="sm"
                          color={
                            colorMode === "light" ? "gray.500" : "gray.300"
                          }
                        >
                          ${product.old_price}
                        </Text>
                      </Box>
                    </Stack>
                  </Box>
                ))}
              </Grid>
            </div>
          ))}
        </Box>
      </Stack>
    </Flex>
  );
}

export default Catalogo;
