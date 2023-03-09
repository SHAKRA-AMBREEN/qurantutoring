"use client"


import React, { useState, useEffect } from 'react';
import { Box } from '@chakra-ui/react';
import Image from 'next/image';
import Link from 'next/link';


function WhatsAppIcon() {
  const [position, setPosition] = useState({ bottom: '20px', right: '20px' });

  // useEffect(() => {
  //   function handleScroll() {
  //     const scrollPosition = window.pageYOffset || document.documentElement.scrollTop;
  //     setPosition({ bottom: `${10 - scrollPosition}px`, right: '40px' });
  //   }

  //   window.addEventListener('scroll', handleScroll);
  //   return () => {
  //     window.removeEventListener('scroll', handleScroll);
  //   };
  // }, []);

  return (

    <Box position="fixed" {...position}>
        <Link href="https://web.whatsapp.com/">

<Image src="/whatsapp-icon.png" alt="WhatsApp Icon" width={60} height={60} />
        </Link>
    </Box>

  );
}

export default WhatsAppIcon;

