import React, { useState } from "react";
import {
  Flex,
  Text,
  Stack,
  Grid,
  Box,
  Image,
  useColorMode,
  List,
  ListItem,
} from "@chakra-ui/react";
import { filters, products } from "./dataStore";
import { CheckboxStyled } from "./components/CheckBoxStyled";
import { Link } from "react-router-dom";
import ProductCard from "../../components/ProductCard"; // Importe o ProductCard aqui

function Catalogo() {
  const { colorMode } = useColorMode();
  const [selectedCategory, setSelectedCategory] = useState(null);

  const getCategoryItemCount = (categoryName) => {
    return products.filter((product) =>
      product.category_item.some((category) => category.name === categoryName)
    ).length;
  };

  const handleCategoryClick = (categoryId) => {
    if (selectedCategory === categoryId) {
      setSelectedCategory(null);
    } else {
      setSelectedCategory(categoryId);
    }
  };

  const filteredProducts = selectedCategory
    ? products.filter((product) =>
        product.category_item.some(
          (category) => category.name === selectedCategory
        )
      )
    : products;

  return (
    <Box mt="10rem">
      <Stack direction="column">
        <Flex justify="center">
          <Flex justify="center">
            <Stack direction="column">
              {filters.map((item, i) => (
                <Box key={i}>
                  <List>
                    <ListItem>
                      <Text fontWeight="500">{item.name}</Text>
                    </ListItem>
                  </List>
                  {item.category.map((category) => (
                    <List key={category.id}>
                      <ListItem>
                        <Stack direction="row">
                          <CheckboxStyled
                            controlColor="black"
                            onChange={() => handleCategoryClick(category.name)}
                            isChecked={selectedCategory === category.name}
                            roundedFull
                          />
                          <Text fontWeight="100">
                            {category.name} (
                            {getCategoryItemCount(category.name)})
                          </Text>
                        </Stack>
                      </ListItem>
                    </List>
                  ))}
                </Box>
              ))}
            </Stack>
          </Flex>
          <Flex justifyContent="center" w="70%">
            <Grid
              templateColumns={{ base: "repeat(2, 1fr)", md: "repeat(4, 1fr)" }}
              gap={{ base: "4", md: "8" }}
              mb="50rem"
              mt="0"
            >
              {filteredProducts.map((product) => (
                <Box
                  key={product.id}
                  as="div"
                  _hover={{ cursor: "pointer", boxShadow: "lg" }}
                  borderRadius="sm"
                  mb="5"
                  p="4"
                  position="relative"
                  height="400px"
                >
                  <Image
                    src={product.img}
                    onClick={() =>
                      (window.location.href = `/products/details/${product.id}`)
                    }
                    alt={product.name}
                    borderRadius="md"
                    w="100%"
                    h="auto"
                    transition="transform 0.2s"
                    _hover={{ transform: "scale(1.05)" }}
                  />
                  <Box>
                    <Text
                      fontSize="sm"
                      color={colorMode === "light" ? "gray.600" : "gray.300"}
                      m="2"
                    >
                      {product.name}
                    </Text>
                  </Box>
                  <Stack
                    direction="row"
                    justifyContent="space-between"
                    justify="center"
                    alignItems="center"
                    position="absolute"
                    w="70%"
                    bottom="0"
                    left="5"
                    right="5"
                  >
                    <Box zIndex={3}>
                      <ProductCard product={product} />
                    </Box>
                    <Box>
                      <Text
                        fontWeight="semibold"
                        fontSize="lg"
                        color={colorMode === "light" ? "gray.700" : "gray.200"}
                      >
                        ${product.price}
                      </Text>
                      <Text
                        as="s"
                        fontSize="sm"
                        color={colorMode === "light" ? "gray.500" : "gray.300"}
                      >
                        ${product.old_price}
                      </Text>
                    </Box>
                  </Stack>
                </Box>
              ))}
            </Grid>
          </Flex>
        </Flex>
      </Stack>
    </Box>
  );
}

export default Catalogo;
