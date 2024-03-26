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
import { categoriesStore } from "./data";
import ProductCard from "../../components/ProductCard";

function Catalogo() {
  const { colorMode } = useColorMode();
  const [selectedCategory, setSelectedCategory] = useState(null);

  const handleCategoryClick = (categoryId) => {
    setSelectedCategory(categoryId);
  };

  return (
    <Box mt="10rem">
      <Flex justify="center">
        <Stack direction="column" spacing="5px" maxW="70%">
          <Flex justify="center">
            <Grid templateColumns="repeat(5, 1fr)">
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
                <Grid templateColumns="repeat(4, 1fr)" gap="1rem">
                  {category.products.map((product) => (
                    <Box
                      key={product.id}
                      _hover={{ cursor: "pointer", boxShadow: "lg" }}
                      borderRadius="sm"
                      p="2"
                      position="relative"
                    >
                      <Image src={product.img} />
                      <Box m="3" mb="5rem">
                        <Text
                          fontSize="sm"
                          color={
                            colorMode === "light" ? "gray.600" : "gray.300"
                          }
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
                        <ProductCard product={product} />
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
                  ))}
                </Grid>
              </div>
            ))}
          </Box>
        </Stack>
      </Flex>
    </Box>
  );
}

export default Catalogo;
