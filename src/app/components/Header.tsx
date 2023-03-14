"use client";

import {
  Box,
  Container,
  SimpleGrid,
  Flex,
  Button,
  Heading,
} from "@chakra-ui/react";
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  IconButton,
  Image,
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import React from "react";
import Link from "next/link";

export default function Header() {
  return (
    <>
      <Box boxShadow="lg" pt="5px" bg='black' >
        <Container maxWidth={1400}>
          <SimpleGrid templateColumns="repeat(3, 1fr )">
            <Box>
              <Flex pr={20}>
                <Image
                  src="/logo/logo2 (2).png"
                  alt="quran-logo"
                  width={{ lg: "70px", base: "60px" }}
                  height={{ lg: "80px", base: "60px" }}
                />
                <Heading fontSize={{ lg: "30px", base: "15px" }} pl="10px" color='green'>
                  {" "}
                  Home Tutoring <br></br> Quran
                </Heading>
              </Flex>
            </Box>
            <Flex
              display={{ lg: "flex", base: "none" }}
              color="white"
              placeItems="center"
              fontSize={18}
              fontWeight="semibold"
              width='500px'
              px="20px"
              gap={5}
              
              bgColor=""
            >
              <Link href="/"> Home </Link>
              <Link href="/AboutUs"> About Us </Link>
              <Link href="/Courses"> Courses </Link>
              <Link href="/fees"> Fees </Link>
              <Link href="/faqs"> Faqs </Link>
              <Link href="/ContactUs"> Contact Us </Link>
            </Flex>
            <Box>
              <Button
                display={{ lg: "flex", base: "none" }}
                mt="5px"
                float="right"
                size="lg"
                marginTop='18px'
                px='20px'
                bgColor="white"
                border='1px'
                boxShadow='dark-lg'
                
              >
                Apply
              </Button>
            </Box>
            <Box pt={2}>
              <Menu>
                <MenuButton
                  float="right"
                  display={{ lg: "none", base: "initial" }}
                  as={IconButton}
                  aria-label="Options"
                  icon={<HamburgerIcon />}
                  variant="outline"
                  color='green'
                />
                <MenuList>
                  <Link href="./">
                    {" "}
                    <MenuItem>Home</MenuItem>{" "}
                  </Link>
                  <Link href="./AboutUs">
                  <MenuItem> About Us</MenuItem> </Link>
                  <Link href="./Courses">
                  <MenuItem>Courses</MenuItem></Link>
                  <MenuItem> Fee </MenuItem>
                  <MenuItem>Contact</MenuItem>
                </MenuList>
              </Menu>
            </Box>


            
          </SimpleGrid>
        </Container>
      </Box>
    </>
  );
}
