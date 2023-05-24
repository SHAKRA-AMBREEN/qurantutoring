"use client";

import { BsGeoAltFill , BsFacebook , BsGoogle, BsTwitter, BsSkype } from "react-icons/bs";
import { EmailIcon, PhoneIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Center,
  Container,
  Flex,
  FormControl,
  FormLabel,
  Grid,
  Heading,
  Input,
  Text,
  Textarea,
} from "@chakra-ui/react";
import { ContactForm } from "../components/contact";
import { getParseTreeNode } from "typescript";

function App() {
  return (
    <>
      <Box
        bgColor={"green.400"}
        p={{lg:"15px", base:"5px"}}
        bgImage="https://www.teahub.io/photos/full/173-1730516_kaaba-picture-islamic-art-white-hd.jpg"
      >
        <Container maxW={1200}>
          <Flex  display={{ lg: "flex", base: "grid" }}>
            <Box p={{lg:"4", base:"2"}} w={{lg:"400px",base:"200px"}}>
              <Flex
              >
                <BsGeoAltFill color="green" fontSize={100}/>
                <Grid ml="4">
                  <Heading > Our Location </Heading>
                  <Text fontSize={{lg:"lg", base:"sm"}}> Karachi, Pakistan </Text>
                </Grid>
              </Flex>
            </Box>
            <Box p={{lg:"4", base:"2"}} w={{lg:"400px",base:"200px"}}>
              <Flex>
                <PhoneIcon color="green" w={{lg:"80px",base:"40px"}} h={{lg:"120px", base:"60px"}} />
                <Grid ml="4">
                  <Heading > Phone Number </Heading>
                  <Text fontSize={{lg:"lg", base:"sm"}}> +92 308 8992370 </Text>
                </Grid>
              </Flex>
            </Box>
            <Box p={{lg:"4", base:"2"}} w={{lg:"400px",base:"200px"}}>
              <Flex>
                <EmailIcon color="green" w={{lg:"80px",base:"40px"}} h={{lg:"120px", base:"60px"}}/>
                <Grid ml="4">
                  <Heading > Email </Heading>
                  <Text fontSize={{lg:"lg", base:"sm"}}> muhammadzareen121@gmail.com </Text>
                </Grid>
              </Flex>
            </Box>
          </Flex>
        </Container>
      </Box>

      <Box border="2px" borderColor={"green.600"} >
        <Container maxW={600} >
          <Heading pt="2" pl="16"  fontSize={{lg:"4xl", base:"md" }}>
           
            Please Fill Out This Form{" "}
          </Heading>
          <br />
          <Flex>
            <Box w="600px">
            <Box >
        <Container w={"800"} bgColor="transparent">
        <FormControl >
          <FormLabel>Name</FormLabel>
          <Input placeholder="Enter your name" />
        </FormControl>
        <FormControl>
          <FormLabel>Email</FormLabel>
          <Input type="email" placeholder="Enter your email" />
        </FormControl>
        <FormControl>
          <FormLabel>Message</FormLabel>
          <Textarea placeholder="Enter your message" />
        </FormControl>
        <Button mt={4} mb={4} colorScheme="green" type="submit">
          Send Message
        </Button>
        </Container>
      </Box>
            </Box>
           
          </Flex>
          <Box> 
              
                <Flex p="40px" >
              <Box marginRight={"40px"}> <BsFacebook size={40} /> </Box>
              <Box marginRight={"40px"}> <BsGoogle size={40} /> </Box>
              
              <Box marginRight={"40px"}> <BsTwitter size={40} /> </Box>
              <Box marginRight={"40px"}> <BsSkype size={40} /> </Box>
              </Flex>
              
            </Box>
        </Container>
      </Box>
    </>
  );
}

export default App;
