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
import reactStringReplace from "react-string-replace";

function Catalogo() {
  const { colorMode } = useColorMode();
  const [selectedCategory, setSelectedCategory] = useState(null);

  const handleCategoryClick = (categoryName) => {
    setSelectedCategory(
      categoryName === selectedCategory ? null : categoryName
    );
  };

  return (
    <Flex mt="10rem" justify="center">
      <Stack direction="column" spacing="5px" maxW="70%">
        <Flex justify="center">
          <Grid templateColumns="repeat(2, 1fr)" gap="1em">
            {categoriesStore.map((item, i) => (
              <Box key={i}>
                <Button
                  onClick={() => handleCategoryClick(item.name)}
                  isActive={selectedCategory === item.name}
                >
                  {item.name}
                </Button>
              </Box>
            ))}
          </Grid>
        </Flex>
        <Box>
          {categoriesStore.map((category, index) => (
            <div
              key={index}
              style={{
                display:
                  selectedCategory === category.name || !selectedCategory
                    ? "block"
                    : "none",
              }}
            >
              <Grid templateColumns="repeat(4, 1fr)" gap="10px">
                {category.products.map((item, i) => (
                  <Box
                    key={i}
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
                        ((parseFloat(item.old_price) - parseFloat(item.price)) /
                          parseFloat(item.old_price)) *
                        100
                      ).toFixed(0)}
                      %
                    </Text>
                    <Image src={item.img} />
                    <Text
                      fontWeight="md"
                      color={colorMode === "light" ? "gray.600" : "gray.300"}
                      p="3"
                    >
                      {item.name}
                    </Text>
                    <Grid templateColumns="repeat(2, 1fr)" gap="1px">
                      <Box>
                        <Text fontSize="sm" as="s">
                          de R$ {item.old_price}
                        </Text>
                      </Box>
                      <Box>
                        <Text fontSize="md" as="b">
                          {item.price}
                        </Text>
                      </Box>
                      <Box>
                        <Text fontSize="xs" as="b">
                          3x <span className="fw-light">de </span>
                          {reactStringReplace(
                            `3x de ${(parseFloat(item.price) / 3).toFixed(2)}`,
                            /(\d+\.\d+)/g,
                            (match, i) => (
                              <span key={i}>{match.replace(".", ",")}</span>
                            )
                          )}
                        </Text>
                      </Box>
                    </Grid>
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
