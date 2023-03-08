import { Link } from '@chakra-ui/react';
import Image from 'next/image';

const WhatsAppIcon = () => {
  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div onClick={handleScrollToTop}>
      <Link href="https://web.whatsapp.com/"><Image src="/whatsapp-icon.png" alt="WhatsApp Icon" width={50} height={50} /> </Link>
    </div>
  );
};

export default WhatsAppIcon;
