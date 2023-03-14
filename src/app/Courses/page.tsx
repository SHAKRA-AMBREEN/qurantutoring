"use client";
import { Box, Center, Container, Flex, Heading, Image, Text } from "@chakra-ui/react";
import React from "react";
import Home from "../components/Home";
import { course, courses } from "../components/database";

export default function page() {
  return (
    <>
      <Box bgColor={"grey"} textAlign={"center"}>
        <Home
          title="Courses"
          src="https://i.pinimg.com/originals/a4/c5/4c/a4c54c9a63ddfc363638b7e7c035a680.jpg"
        />
      </Box>


      <Center>
                <Heading color={"green"}> OUR COURSES </Heading>
            </Center>

      
        <Box >
            
          <Container maxW={1400}>
            <Flex flexDir={"row"} gap="50px" display={{ lg: "flex", base: "grid" }}>
            {courses.map((elem) => (
              <Box
              
                flexBasis={"30%"}
                bgColor="white"
                textAlign="center"
                p="30px"
                boxShadow="dark-lg"
                borderRadius="20px"
                width={{lg:"350px",base:"300"}}
                key={elem.id}
              >
                <Image src={elem.src} />
                <Heading size="md"> {elem.heading}</Heading>
                <Text pt="5px" fontSize={"10px"}>{elem.paragraph}</Text>
              </Box>
              ))}
            </Flex>
                        <br></br>
            <Flex flexDir={"row"} gap="50px" display={{ lg: "flex", base: "grid" }}>
            {course.map((elem) => (
              <Box
              
                flexBasis={"30%"}
                bgColor="white"
                textAlign="center"
                p="30px"
                boxShadow="dark-lg"
                borderRadius="20px"
                width={{lg:"350px",base:"300"}}
                key={elem.id}
              >
                <Image src={elem.src} />
                <Heading size={"md"}> {elem.heading}</Heading>
                <Text pt="5px" fontSize={"10px"}>{elem.paragraph}</Text>
              </Box>
              ))}
            </Flex>
          </Container>
        </Box>
      
    </>
  );
}
