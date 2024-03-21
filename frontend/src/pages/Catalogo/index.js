import { Button, Stack, Center } from "@chakra-ui/react";
// import { StoreData } from "../../productsStore";
function Catalogo() {
  return (
    <section>
      <Center>
        <Stack direction="row" spacing={4} align="center">
          {/* {StoreData.map((item, i) => (
            <div key={i}>
              <Button colorScheme="teal" size="sm">
                {item.title}
              </Button>
            </div>
          ))} */}
          <h1>testing</h1>
        </Stack>
      </Center>
    </section>
  );
}

export default Catalogo;
