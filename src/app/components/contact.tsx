"use client"

import React from 'react'
import { Box, FormControl, FormLabel, Input, Textarea, Button, Container } from "@chakra-ui/react";
import Home from "../components/Home";


<Home
title="Contact"
src="https://www.first-aidbox.com/assets/images/wgd-contact-us.jpg"
/>

export const ContactForm = () => {
    return (

        <>
        

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
        <Button mt={4} bgColor="grey" type="submit">
          Submit
        </Button>
        </Container>
      </Box>


      </>
    );
  };
  