"use client";

import {
  Box,
  Container,
  SimpleGrid,
  Heading,
  Text,
  Grid,
  Image,
} from "@chakra-ui/react";
import { PhoneIcon, EmailIcon } from "@chakra-ui/icons";
import Link from "next/link";

export default function Footer() {
  return (
    <>
      <Box bg="black">
        <Container maxW={1300}>
          <SimpleGrid
            textAlign={{ lg: "start", base: "center" }}
            spacing="100px"
            py="60px"
            templateColumns={{ base: "repeat(1, 1fr )", lg: "repeat(4, 1fr )" }}
          >
            <Box>
              <Heading pb="10px" color="white">
                About Us
              </Heading>
              <Image
                m={{ base: "auto", lg: "start" }}
                ml={{base:'35%',lg:'0'}}
                src="/logo/logo2 (2).png"
                alt="panaverse-logo"
                width={120}
                height={100}
                
              ></Image>
              <Text pt="10px" pr="{{lg:'50px', base: '0px'}}" color="grey">
                {" "}
                We know how hard it is to learn Quran online or Arabic with a teacher who can’t communicate properly, or learning Arabic and Quran as a second language for a beginner.
              </Text>
            </Box>
            <Box>
              <Heading color="white"> Useful Links </Heading>
              <Grid pt="40px" color="gray" gap='10px' >
                <Link href="/"> Home </Link>
                <Link href="/"> About Us </Link>
                <Link href="/"> Courses </Link>
                <Link href="/"> Fees </Link>
                <Link href="/contact"> Contact Us </Link>
              </Grid>
            </Box>
            <Box>
              <Heading color="white"> Follow Us </Heading>
              <Grid pt="40px" color="gray" gap='10px' >
                <Link href="/"> Facebook </Link>
                <Link href="/"> Youtube </Link>
                <Link href="/"> Twitter </Link>
                <Link href="/"> Linkedin </Link>
                <Link href="/"> Github </Link>
              </Grid>
            </Box>
            <Box>
              <Heading color="white"> Contact Us </Heading>
              <Grid pt="40px" color="gray" gap='10px'>
                <Link href="/">
                  {" "}
                  <PhoneIcon color='green'/> +92 123 4567890{" "}
                </Link>
                <Link href="/">
                  {" "}
                  <EmailIcon color='green'/> abcd@gmail.com{" "}
                </Link>
                <Link href="/">
                   Islamabad, Pakistan </Link>
              </Grid>
            </Box>
          </SimpleGrid>
        </Container>
      </Box>
    </>
  );
}
