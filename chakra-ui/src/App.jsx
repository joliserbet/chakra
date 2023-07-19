import {
  Box,
  Flex,
  Image,
  Heading,
  ButtonGroup,
  Button,
} from "@chakra-ui/react";

function App() {
  return (
    <Flex p={2} alignItems="center" justifyContent="center">
      <Image
        opacity={0.8}
        src="https://rare-gallery.com/thumbs/4594811-women-women-with-bicycles-women-outdoors-sunset.jpg"
        alt="bike"
      />
      <Box position="absolute">
        <Heading color="white">DOMINA EL TERRENO</Heading>
        <ButtonGroup display="flex" justifyContent="center" spacing="4">
          <Button colorScheme="whiteAlpha">VER DETALLES</Button>
          <Button colorScheme="whiteAlpha">VER VIDEO</Button>
        </ButtonGroup>
      </Box>
    </Flex>
  );
}

export default App;
