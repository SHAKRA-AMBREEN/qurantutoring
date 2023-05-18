import { Box, Container, Heading } from "@chakra-ui/react";
import React from "react";

export default function Home(hello: any) {
  return (
    <>
      <Box bgImage={hello.src} py="200px" bgSize="cover" bgAttachment="fixed">
        <Container maxW={1400}>
          <Heading color='black' size='2xl' mt={{lg:"0px", base:"90px"}} > {hello.title} </Heading>
        </Container>
      </Box>
    </>
  );
}
