"use client";
import {
  Box,
  Button,
  Center,
  Container,
  Flex,
  Heading,
  Image,
  Text,
} from "@chakra-ui/react";
import { RevealList, RevealWrapper } from "next-reveal";
import React from "react";
import Home from "../components/Home";

export default function page() {
  return (
    <>
      <Box bgColor={"grey"}
       textAlign={"center"}
      >
        <Home
          title="About Us"
          src="https://i.pinimg.com/originals/a4/c5/4c/a4c54c9a63ddfc363638b7e7c035a680.jpg"
        />
      </Box>

      <Center>
        <Flex mt="30px" gap="20px" display={{lg:"flex", base:"grid"}}>
          <Box
            textAlign="center"
            p="30px"
            boxShadow="dark-lg"
            border={"5px solid green"}
            borderRadius="20px"
            width="300px"
            height="240px"
          >
            <Heading>Our Mission</Heading> <hr></hr>
            <Text pt="5px">
              Our mission is to build and develop Islamic Community Centers
              through Masjids & Musallahs.
            </Text>
          </Box>
          <Box
            textAlign="center"
            p="30px"
            boxShadow="dark-lg"
            border={"5px solid green"}
            borderRadius="20px"
            width="300px"
            height="240px"
          >
            <Heading> Our Vision </Heading> <hr></hr>
            <Text pt="5px">
              Our vision is to spread the teachings of Islam wherever there is a
              need and serve the entire community.
            </Text>
          </Box>
          <Box
            textAlign="center"
            p="30px"
            boxShadow="dark-lg"
            borderRadius="20px"
            border={"5px solid green"}
            width="300px"
            height="240px"
          >
            <Heading> Our Values</Heading> <hr color="green"></hr>
            <Text pt="5px">
              We will concentrate on Tajweed fundamentals. The proper punctuation
              of the Qu'ran will be taught to children.
            </Text>
          </Box>
        </Flex>
      </Center>

      <Box>
        <Container maxW={{lg:"1400px"}}>
          <Flex
            my="50px"
            px={{ lg: "50px", base: "20px" }}
            display={{ lg: "flex", base: "grid" }}
          >
            <Box flexBasis="50%">
              <RevealList
                interval={60}
                delay={500}
                className="flex flex-wrap items-center justify-center"
              >
                <Heading size={{lg:"lg",base:"sm"}} >
                  WE PROVIDE THE BEST EDUCATION 
                   SERVICE FOR 10 YEARS
                </Heading>
                <Text mt={5}>
                  We stand out from the competition thanks to our qualified
                  teachers and distinctive instructional methods. We are
                  obligated to respond to all of your inquiries. It is our duty
                  to offer the greatest instruction and teacher once you or your
                  child enrolls in our course.
                </Text>

                <Button bgColor="green" mt={5} size="md">
                  Contact Us
                </Button>
              </RevealList>
            </Box>

            <Box flexBasis="50%" m={{lg:"auto", base:"5px"}}>
              <RevealWrapper
                origin="right"
                delay={200}
                duration={1000}
                distance="20px"
                reset={true}
              >
                <Box
                 borderTopRightRadius={"90px"}
                 borderBottomLeftRadius={{lg:"90px",base:"10px"}}
                 bgColor="green"
                 width={{lg:"385px", base:"280px"}}
                 height={{lg:"260px", base:"300px"}}
                 mx={{lg:"30px",base:"-20px"}}
               
                >
                  <Image
                    
                    mx={{ lg: "0", base: "10px" }}
                    src="https://hometutoringonline.com/wp-content/uploads/2023/01/About-Our-Service.jpg"
                    alt="image logo"
                    width={{ lg: "400", base: "120" }}
                    height={{ lg: "250", base: "280" }}
                  />
                </Box>
              </RevealWrapper>
            </Box>
          </Flex>
        </Container>
      </Box>

      <Box mt="30px">
        <Container maxW={1400}>
          <Flex
            my="50px"
            px={{ lg: "50px", base: "20px" }}
            display={{ lg: "flex", base: "grid" }}
            
          >
            <Box flexBasis="50%" m={{lg:"auto", base:"5px"}}>
              <RevealWrapper
                origin="left"
                delay={200}
                duration={1000}
                distance="20px"
                reset={true}
              >
                <Box
                 borderTopRightRadius={"90px"}
                 borderBottomLeftRadius={{lg:"90px",base:"10px"}}
                 bgColor="green"
                 width={{lg:"385px", base:"280px"}}
                 height={{lg:"260px", base:"300px"}}
                 mx={{lg:"30px",base:"-20px"}}
                >
                  <Image
                    mx={{ lg: "10px", base: "10px" }}
                    src="https://hometutoringonline.com/wp-content/uploads/2023/01/TEACH-YOUR-CHILD-THE-QURAN.jpg"
                    alt="image logo"
                    width={{ lg: "400", base: "120" }}
                    height={{ lg: "250", base: "280" }}
                  />
                </Box>
              </RevealWrapper>
            </Box>
            <Box flexBasis="50%" mt={{lg:"0px", base:"10px"}}>
              <RevealList
                interval={60}
                delay={500}
                className="flex flex-wrap items-center justify-center"
              >
                <Heading size={{lg:"lg",base:"sm"}} >TEACH YOUR CHILD THE QURAN</Heading>
                <Text mt={5}>
                  Anas bin Malik (RA) reported that the Messenger of Allah 
                  said "Allah has His people among mankind." They said, "O
                  Messenger of Allah, who are they?" He said, "They are the
                  people of the Quran, the people of Allah and those who are
                  closest to Him."
                </Text>

                <Button bgColor="green" mt={5} size="md">
                  Contact Us
                </Button>
              </RevealList>
            </Box>
          </Flex>
        </Container>
      </Box>
    </>
  );
}
