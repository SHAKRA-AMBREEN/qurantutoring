"use client"

import { ChakraProvider } from "@chakra-ui/react";
import {ContactForm} from "../components/contact";

function App() {
  return (
    <ChakraProvider>
      <ContactForm />
    </ChakraProvider>
  );
}

export default App;




