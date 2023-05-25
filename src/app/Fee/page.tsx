"use client";

import { CheckCircleIcon } from "@chakra-ui/icons";
import { Box, Button, Center, Flex, Heading, Text } from "@chakra-ui/react";

function Fee() {
    return (
<>

<Center flexDir="column" mt="20px">
        <Heading size="xl" color="green">
          {" "}
          OUR PRICES
        </Heading>
        <Text> Choose your plan </Text>
        <Text mt="10px" textAlign="center" px={{ lg: "130px", base: "20px" }}>
          {" "}
          You can also customize your plan in any special case (Memorizing or to
          take class more than 30 minutes or in language classes etc.)
        </Text>
      </Center>

      <Center>
        <Flex mt="30px" gap="20px" display={{ lg: "flex", base: "grid" }}>
          <Box
            textAlign="center"
            p="30px"
            boxShadow="dark-lg"
            // borderRadius="20px"
            width="300px"
            height="400px"
          >
            <Heading> BASIC </Heading> <hr></hr>
            <Text pt="5px">02 CLASSES PER WEEK</Text>
            <Flex>
              <Heading color="green" mt="10px" ml="60px">
                {" "}
                $30{" "}
              </Heading>
              <Text mt="10px">/ month </Text>{" "}
            </Flex>
            <Text mt="30px">
              <CheckCircleIcon color="green" ml="-3px" /> Basic Quran Reading{" "}
              <br></br>
              <CheckCircleIcon color="green" /> Quran Memorization <br></br>
              <CheckCircleIcon color="green" ml="-7px" /> Salah/Kalmas/Duas{" "}
              <br></br>
            </Text>
            <Button color="white" bgColor="green" mt="80px">
              {" "}
              TRY NOW{" "}
            </Button>
          </Box>
          <Box
            textAlign="center"
            p="30px"
            boxShadow="dark-lg"
            // borderRadius="20px"
            width="300px"
            height="400px"
          >
            <Heading> STANDARD </Heading> <hr></hr>
            <Text pt="5px">03 DAYS IN A WEEK</Text>
            <Flex>
              <Heading color="green" mt="10px" ml="60px">
                {" "}
                $35{" "}
              </Heading>
              <Text mt="10px">/ month </Text>{" "}
            </Flex>
            <Text mt="30px">
              <CheckCircleIcon color="green" ml="-3px" /> Basic Quran Reading{" "}
              <br></br>
              <CheckCircleIcon color="green" /> Quran Memorization <br></br>
              <CheckCircleIcon color="green" ml="-7px" /> Salah/Kalmas/Duas{" "}
              <br></br>
            </Text>
            <Button color="white" bgColor="green" mt="80px">
              {" "}
              TRY NOW{" "}
            </Button>
          </Box>
          <Box
            textAlign="center"
            p="30px"
            boxShadow="dark-lg"
            // borderRadius="20px"
            width="300px"
            height="400px"
          >
            <Heading> HAFIZ PLAN </Heading> <hr></hr>
            <Text pt="5px">05 DAYS IN A WEEK</Text>
            <Flex>
              <Heading color="green" mt="10px" ml="60px">
                {" "}
                $75{" "}
              </Heading>
              <Text mt="10px">/ month </Text>{" "}
            </Flex>
            <Text mt="30px">
              <CheckCircleIcon color="green" ml="-3px" /> Basic Quran Reading{" "}
              <br></br>
              <CheckCircleIcon color="green" /> Quran Memorization <br></br>
              <CheckCircleIcon color="green" ml="-7px" /> Salah/Kalmas/Duas{" "}
              <br></br>
            </Text>
            <Button color="white" bgColor="green" mt="80px">
              {" "}
              TRY NOW{" "}
            </Button>
          </Box>
        </Flex>
      </Center>


</>


        );
    }
    
    export default Fee;
