import React from "react";
import {
  Box,
  Button,
  Center,
  Container,
  Flex,
  Grid,
  Heading,
  Image,
  Text,
} from "@chakra-ui/react";
// import jpeg from '../../../public/logo2.jpeg'
import { RevealList, RevealWrapper } from "next-reveal";
import { CheckCircleIcon, CheckIcon } from "@chakra-ui/icons";
import { ContactForm } from "./contact";

export default function Banner() {
  return (
    <>
      <Box
        // bg='green.300'
        bgImage="https://www.teahub.io/photos/full/173-1730516_kaaba-picture-islamic-art-white-hd.jpg"
        bgRepeat="no-repeat"
        bgSize={{lg:"1400px", base:"900px"}}
      >


          <Container maxW={1400}>
            <Center>
            <RevealWrapper
          origin="top"
          delay={100}
          duration={800}
          distance="200px"
          reset={true}
        >
              <Box mt="20px">
                <Heading fontSize={{lg:" lg", base: " md "}}> o بِسْمِ ٱللَّٰهِ ٱلرَّحْمَٰنِ ٱلرَّحِيمِ</Heading>
              </Box>{" "}
              </RevealWrapper>
            </Center>
            
        
            <Flex
              pt={{ lg: "100px", base: "20px" }}
              pb="100px"
              px={{ lg: "40px", base: "5px" }}
              display={{ lg: "flex", base: "grid" }}
            >
              
              <Box flexBasis="50%" px="40px">
              <RevealWrapper
          origin="left"
          delay={200}
          duration={1000}
          distance="500px"
          reset={true}
        >
              
                <Heading size={{lg:"2xl",base:"xl"}}>Welcome to our Academy</Heading>
                <Text pt="10px" textColor="grey">
                  This is the book about which there is no doubt, A guaidance
                  for those conscious of ALLAH.
                </Text>
                <Button size={{lg:"lg", base:"lg"}} colorScheme="green" mt="10px">
                  Read More
                </Button>
                
                </RevealWrapper>
              </Box>
              <Box
                mt={{ lg: "-3.5", base: "10px" }}
                flexBasis={{ lg: "50%", base: "0%" }}
              >
                <RevealWrapper
          origin="right"
          delay={200}
          duration={1200}
          distance="500px"
          reset={true}
        >
                <Image
                  //   src="/herobg/image 2.webp"
                  src="https://www.fajralquran.com/imgs/quran.png"
                  alt="banner-logo"
                  width={{ lg: "800", base: "750" }}
                  height={{ lg: "310", base: "330" }}
                />
                </RevealWrapper>
              </Box>
              
            </Flex>
            
          </Container>
        
        
      </Box>


      <Box pt={{lg:"30px", base:"5px"}} >
        <Container maxW={1400}>
          <Center flexDir="column">
            <Text> Courses </Text>
            <Heading size="xl" color="green">
              {" "}
              COURSE SYLLABUS{" "}
            </Heading>
            <Text mt="10px" textAlign="center" px={{lg:"130px", base: "20px"}}>
              {" "}
              Services of Islam and teaching the real face of Islam with our
              services
            </Text>
          </Center>

          <RevealList interval={40} delay={900} origin="top" reset={true}  className='flex flex-wrap items-center justify-center'>
          <Center>
          
            <Grid mt="30px" gap="50px" >
              <Box
                textAlign="center"
                p={{lg:"30px", base:"10px"}}
                boxShadow="dark-lg"
                borderRadius="20px "
                borderStyle="dotted"
                width={{ lg: "1000px", base: " " }}
                height={{ lg: "220px", base: " " }}
                bgColor="lightgrey"
              >
                <Flex display="flex" >
                  <Image
                    src="/logo/noraniQaida.png"
                    alt="noraniqaida"
                    h={{lg:"150px",base:"  "}}
                    width={{lg:"200px",base: "  "}}
                  />
                  <Text pt="5px">
                    {" "}
                    <Heading> Noorani Qaida </Heading>
                    Learning Noorani Qaida is essential for those who wants to
                    learn to recite the Quran in the best way. Students can
                    learn and recognize the letters in individual and compound
                    forms. They learn the proper sounds of each letter. They
                    learn to pronouns each Arabic letter properly with tajweed.
                  </Text>
                </Flex>
                <Button size="lg" colorScheme="green" mt="10px">
                  FIRST STEP TO READ QURAN
                </Button>
              </Box>
              <Box
                textAlign="center"
                p="20px"
                boxShadow="dark-lg"
                borderRadius="20px"
                width="1000px"
                height="220px"
                bgColor="lightgray"
              >
                <Flex display="flex">
                  <Image
                    src="/logo/quran_reading.png"
                    alt="quran reading"
                    h="180px"
                    width="200px"
                  />
                  <Text pt="5px">
                    {" "}
                    <Heading> Quran Reading </Heading>
                    In this course, students are guided to learn Quran with
                    proper tajweed with the help of experienced tutors step by
                    step. Even a person with limited knowledge of tajweed can
                    learn Quran reciting with proper tajweed after completing
                    this course. This course is designed for people of all ages.
                  </Text>
                </Flex>
                <Button size="lg" colorScheme="green">
                  READ AND UNDERSTAND
                </Button>
              </Box>
              <Box
                textAlign="center"
                p="30px"
                boxShadow="dark-lg"
                borderRadius="20px"
                width="1000px"
                height="250px"
                bgColor="lightgray"
              >
                <Flex>
                  <Image
                    src="/logo/quran memorization.png"
                    alt="quran memorization"
                    h="180px"
                    width="200px"
                  />
                  <Text pt="5px">
                    {" "}
                    <Heading> Quran Memorization </Heading>
                    Anyone who can recite Quran with tajweed is eligible for
                    this course to memorize Quran. Our tutors will help you to
                    memorize Quran completely or some selective Suras or Juzz
                    depending on your requirements by using Islamic rules and
                    modern techniques in very less time.
                  </Text>
                </Flex>
                <Button size="lg" colorScheme="green">
                  READ AND UNDERSTAND
                </Button>
              </Box>
            </Grid>
          </Center>
          </RevealList>
        </Container>
      </Box>
      

      <Box
        mt="50px"
        bg="lightgrey"
        border="2px green"
        borderBottomRadius={"20px"}
        // bgImage="https://www.teahub.io/photos/full/173-1730516_kaaba-picture-islamic-art-white-hd.jpg"
        bgRepeat="no-repeat"
        bgSize="1400px"
      >
        <RevealWrapper
          origin="left"
          delay={200}
          duration={1000}
          distance="500px"
          reset={true}
        >
          <Container maxW={1400}>
            <Flex
              pt={{ lg: "100px", base: "30px" }}
              pb={{lg:"100px", base:"50px"}}
              px={{ lg: "40px", base: "5px" }}
              display={{ lg: "flex", base: "grid" }}
            >
              <Box flexBasis="50%" px="40px">
                <Text> Learn With Us </Text>
                <Heading size="xl">
                  <Heading color={"green"} size="2xl">
                    IMPROVE{" "}
                  </Heading>{" "}
                  WITH US
                </Heading>
                <Text pt="10px" textColor="grey">
                  We are providing many facilities to our students, so they can
                  feel comfort to learn Quran under the supervision of
                  well-trained and qualified teachers.
                  <br></br>
                  <br></br>
                  <CheckIcon color={"green"} /> Speak Quran more confidently.
                  <br></br>
                  <CheckIcon color={"green"} /> Have a deeper knowledge of the
                  structure of Al-Quran. <br></br>
                  <CheckIcon color={"green"} /> Better understand spoken Quran.
                </Text>
              </Box>
              <Box
                mt={{ lg: "-3.5", base: "10px" }}
                flexBasis={{ lg: "50%", base: "0%" }}
              >
                <Image
                  //   src="/herobg/image 2.webp"
                  src="logo/learnus.png"
                  alt="banner-logo"
                  width={{ lg: "800", base: "500" }}
                  height={{ lg: "310", base: "250" }}
                />
              </Box>
            </Flex>
          </Container>
        </RevealWrapper>
      </Box>

      <Center>
        <Box mt="20px" alignItems="center" textAlign={"center"}>
          <Container maxW={1200} alignItems="center">
            <Flex gap="40px" display={{ lg: "flex", base: "-ms-inline-grid" }}>
              <Box border={"2px solid green"} w="150px" height="150px">
                <Image src="/icon/fluent.png" w="100px" h="100" ml="20px" />
                <Text> Fluent Teachers </Text>
              </Box>
              <Box border={"2px solid green"} w="150px" height="150px">
                <Image
                  src="/icon/register.png"
                  w="80px"
                  h="60px"
                  mt="20px"
                  mb="20px"
                  ml="30px"
                />
                <Text> Free Registration </Text>
              </Box>
              <Box border={"2px solid green"} w="150px" height="150px">
                <Image src="/icon/247.png" w="100px" h="100" ml="20px" />
                <Text> 24/7 </Text>
              </Box>
              <Box border={"2px solid green"} w="150px" height="150px">
                <Image
                  src="/icon/location.png"
                  w="90px"
                  h="90px"
                  ml="20px"
                  mt="10px"
                />
                <Text> Anywhere </Text>
              </Box>
              <Box border={"2px solid green"} w="150px" height="150px">
                <Image src="/icon/online.png" w="100px" h="100" ml="20px" />
                <Text> Online </Text>
              </Box>
              <Box border={"2px solid green"} w="150px" height="150px">
                <Image
                  src="/icon/easypay.png"
                  w="80px"
                  h="90px"
                  mt="10px"
                  ml="30px"
                />
                <Text> Easypay </Text>
              </Box>
            </Flex>
          </Container>
        </Box>
      </Center>

      {/* /        ABOUT US          */}

      <Box mt="30px">
        <Container maxW={1400}>
          <Center flexDir="column">
            <Text> About Services </Text>
            <Heading size="xl" color="green">
              {" "}
              What We Offer{" "}
            </Heading>
            <Text mt="10px" textAlign="center" px={{lg:"130px", base:"20px"}}>
              {" "}
              Learning Quran Recitation is beneficial because no one can
              pronounce Arabic words correctly or with proper rules of Tajweed
              until he learns how to recite them. Get the online sessions
              regularly is the best way to learn Nurani Qaida. After learning
              the whole Quran Recitation, you are able to read the Holy Quran
              with the rules of Tajweed and
            </Text>
          </Center>

          <Flex>
            <Box flexBasis="50%" px={{lg:"40px",base:"5px"}} mt="20px" >
              <Image
                src="/herobg/image 6.jpg"
                w={{lg:"700px", base: "300px"}}
                h={{lg:"400px", base: "420px"}}
                pl={{lg:"120px", base:"5px"}}
                ml={{lg:"60px", base:"5px"}}
              />
            </Box>
            <Box flexBasis={{lg:"50%",base:"30%"}} m={{lg:"30px",base:"10px"}} ml={{lg:"50px",base:"10px"}}>
              <Text fontSize={{lg:" xl ", base:"8px"}}>
                <Heading>ISLAM</Heading>
                Online Learning <br></br>
                <CheckCircleIcon color="green" /> Learn Noorani Qaida <br></br>
                <CheckCircleIcon color="green" /> Online Quran Reading <br></br>
                <CheckCircleIcon color="green" /> Learn Qirat Online <br></br>
                <CheckCircleIcon color="green" /> Quran Memorization <br></br>
                <CheckCircleIcon color="green" /> Quran Tafseer Online <br></br>
                <CheckCircleIcon color="green" /> Learn Fiqh Online <br></br>
                <CheckCircleIcon color="green" /> Hajj and Umrah Course{" "}
                <br></br>
                <CheckCircleIcon color="green" /> Learn Arabic Language{" "}
                <br></br>
                <CheckCircleIcon color="green" /> Free Registration <br></br>
              </Text>
              <Button bgColor="green" mt="10px" w={{lg:"400px",base:"100px"}} h="30px">
                {" "}
                Learn Now{" "}
              </Button>
            </Box>
          </Flex>
        </Container>
      </Box>

      {/*                                      */}

      <Box
        // bg='green.300'
        bgImage="https://png.pngtree.com/background/20210716/original/pngtree-mosque-holiday-muslim-background-picture-image_1350265.jpg"
        bgRepeat="no-repeat"
        bgSize="1400px"
      >
        <Container maxW={1400}>
          <Center flexDir="column" pt="50px">
            <Text color="white"> Free Registration </Text>
            <Heading size={{lg:"xl", base:"md" }} color="white">
              {" "}
              Are you interested in Trial Session?{" "}
            </Heading>
            <Text mt="10px" textAlign="center" px={{lg:"130px", base:"20px"}} color="white">
              {" "}
              You can try our Free Trial Session, No Obligation Lessons to
              Evaluate our Quran Reading Service & Teachers, After the free
              lessons you can decide to continue or discontinue Learn Quran
              Online with us.!
            </Text>
            <Button bgColor="green" color="white" mt="5px" mb="80px">
              {" "}
              TRY NOW{" "}
            </Button>
          </Center>
        </Container>
      </Box>

      <Flex>
        <Box flexBasis="50%" px="40px" mt="20px">
          <Image src="/herobg/image 7.jpg" w="700px" h="400px" />
        </Box>
        <Box flexBasis="50%" m={{lg:"30px",base:"5px"}}>
          <Text fontSize={{lg:" md ", base:"sm"}}>
            Our team of talented Teachers are providing Education services
            <Heading color="green">About Us</Heading>
            This is very Status online platform for learning about Islam at one
            place on hometutoringonline.com. You will access easily in our
            Islamic learning system. We introduced many courses to provide our
            teaching services in form of these courses, such as Noorani Qaida,
            Quran reading, Quran Memorization. Our aim and main focus is to
            spread the light of Islam like fiqh in our courses.<br></br>
          </Text>

          <Flex mt="5px">
            <Box mr="5px">
              <Heading color="green" size={{lg:"2xl",base:"xl"}}>
                {" "}
                10{" "}
              </Heading>
            </Box>
            <Box>
              <Text pt="15px"> Work Station </Text>
            </Box>
            <Box ml={{lg:"150px",base:"50px"}}>
              <Heading color="green" size={{lg:"2xl",base:"xl"}}>
                {" "}
                1000+{" "}
              </Heading>
            </Box>
            <Box mr="5px">
              <Text pt="15px"> Students </Text>
            </Box>
          </Flex>
          <Flex mt="5px">
            <Box mr="5px">
              <Heading color="green" size={{lg:"2xl",base:"xl"}}>
                {" "}
                4{" "}
              </Heading>
            </Box>
            <Box>
              <Text pt="15px"> Years of experience </Text>
            </Box>
            <Box ml={{lg:"150px",base:"50px"}}>
              <Heading color="green" size={{lg:"2xl",base:"xl"}}>
                {" "}
                500{" "}
              </Heading>
            </Box>
            <Box mr="5px">
              <Text pt="15px"> Client Satisfaction </Text>
            </Box>
          </Flex>
        </Box>
      </Flex>

      <Center flexDir="column" mt="20px">
        <Heading size="xl" color="green">
          {" "}
          OUR PRICES
        </Heading>
        <Text> Choose your plan </Text>
        <Text mt="10px" textAlign="center" px={{lg:"130px",base:"20px"}}>
          {" "}
          You can also customize your plan in any special case (Memorizing or to
          take class more than 30 minutes or in language classes etc.)
        </Text>
      </Center>

      <Center>
        <Flex mt="30px" gap="20px" display={{lg:flex, base:"grid"}}>
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

      <Box bgColor="lightsalmon" mt="20px">
        <Container maxW={1400} py="30px">
          <Flex gap="100px">
            <Grid flexBasis={"50%"} ml="120px">
              <Heading>Are you interested in Trial Session?</Heading>
              <Text>
                {" "}
                You can try our Free Trial Session, No Obligation Lessons to
                Evaluate our Quran Reading Service & Teachers, After the free
                lessons you can decide to continue or discontinue Learn Quran
                Online with us.!
              </Text>
              <Button> GET FREE TRIAL </Button>
            </Grid>
            <ContactForm />
          </Flex>
        </Container>
      </Box>
    </>
  );
}
