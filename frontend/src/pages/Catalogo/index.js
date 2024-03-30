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
      setSelectedCategory(null); // Desmarcar se já estiver selecionado
    } else {
      setSelectedCategory(categoryId);
    }
  };

  // Função para filtrar os produtos com base na categoria selecionada
  const filteredProducts = selectedCategory
    ? products.filter((product) =>
        product.category_item.some(
          (category) => category.name === selectedCategory
        )
      )
    : products;

  return (
    <Box mt="10rem">
      <Flex justify="center">
        <Stack direction="row" spacing="5px" maxW="70%">
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
          <Box>
            <Grid templateColumns="repeat(4, 1fr)" gap="1rem">
              {filteredProducts.map((product) => (
                <Link key={product.id} to={`/products/details/${product.id}`}>
                  <Box
                    _hover={{ cursor: "pointer", boxShadow: "lg" }}
                    borderRadius="sm"
                    p="2"
                    position="relative"
                  >
                    <Image src={product.img} />
                    <Box m="3" mb="5rem">
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
                      alignItems="center"
                      position="absolute"
                      bottom="5"
                      left="5"
                      right="5"
                    >
                      <Box>
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
                </Link>
              ))}
            </Grid>
          </Box>
        </Stack>
      </Flex>
    </Box>
  );
}

export default Catalogo;
