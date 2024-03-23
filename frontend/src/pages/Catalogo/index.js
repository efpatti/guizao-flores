import { Flex, Text, Stack, Grid, Box, Image } from "@chakra-ui/react";
import { categoriesStore } from "./data";
function Catalogo() {
  return (
    <Flex mt="10rem" justify="center">
      <Stack direction="column" spacing="5px" maxW="70%">
        {categoriesStore.map((category, index) => (
          <div key={index}>
            <Text textAlign="center" fontSize="3xl">
              {category.name}
            </Text>
            <Grid templateColumns="repeat(4, 1fr)" gap="10px">
              {category.products.map((item, i) => (
                <Box
                  key={i}
                  _hover={{ cursor: "pointer", boxShadow: "md" }}
                  borderRadius="sm"
                  p="3"
                >
                  <Image src={item.img} />
                  <Text fontWeight="md" color="gray.700">
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
                        {(parseFloat(item.price) / 3).toFixed(2)}
                      </Text>
                    </Box>
                  </Grid>
                </Box>
              ))}
            </Grid>
          </div>
        ))}
      </Stack>
    </Flex>
  );
}

export default Catalogo;
