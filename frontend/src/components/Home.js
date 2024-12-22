// import React, { useState } from "react";
// import {
//   Box,
//   Flex,
//   Text,
//   Button,
//   Modal,
//   ModalOverlay,
//   ModalContent,
//   ModalHeader,
//   ModalBody,
//   ModalCloseButton,
//   useDisclosure,
// } from "@chakra-ui/react";
// import Auth from "./Authentication/Auth";
// import { useContext, useEffect } from "react";
// import chatContext from "../context/chatContext";
// import { Link, useNavigate } from "react-router-dom";

// const Home = () => {
//   // context
//   const context = useContext(chatContext);
//   const { isAuthenticated } = context;
//   const { isOpen, onOpen, onClose } = useDisclosure();
//   const [index, setindex] = useState();
//   const navigator = useNavigate();

//   useEffect(() => {
//     if (isAuthenticated) {
//       navigator("/dashboard");
//     }
//   });

//   const handleloginopen = () => {
//     setindex(0);
//     onOpen();
//   };

//   const handlesignupopen = () => {
//     setindex(1);
//     onOpen();
//   };

//   return (
//     <Box h={"max-content"} verticalAlign="middle">
//       <Flex direction="column" align="center" justify="center" minH="80vh">
//         <Box textAlign="center">
//           <Text fontSize={"7xl"} fontWeight={"bold"} fontFamily={"Work sans"}>
//             Conversa
//           </Text>
//           <Text fontSize="xl" fontWeight="bold" mb={4}>
//             Online Chatting App
//           </Text>
//           <Button mr={3} onClick={handleloginopen}>
//             Login
//           </Button>
//           <Button colorScheme="purple" onClick={handlesignupopen}>
//             Sign Up
//           </Button>
//         </Box>
//       </Flex>
//       {/* Copyright */}
//       <Text
//         fontSize="sm"
//         position={"fixed"}
//         bottom={2}
//         left={"calc(50% - 155px)"}
//         mt={4}
//         textAlign="center"
//       >
//         &copy; 2024 Conversa. All rights reserved.
//         <Link to="https://github.com/pankil-soni" target="_blank">
//           <Text as="u" color="purple.500" ml={1}>
//             Pankil Soni
//           </Text>
//         </Link>
//       </Text>
//       {/* <Auth /> */}
//       <Modal
//         isOpen={isOpen}
//         onClose={onClose}
//         colorScheme="red"
//         size={{ base: "md", md: "xl" }}
//       >
//         <ModalOverlay />
//         <ModalContent w={{ base: "95vw" }}>
//           <ModalHeader></ModalHeader>
//           <ModalBody>
//             <Auth tabindex={index} />
//           </ModalBody>
//           <ModalCloseButton />
//         </ModalContent>
//       </Modal>
//     </Box>
//   );
// };

// export default Home;


import React, { useState, useEffect, useContext } from "react";
import {
  Box,
  Flex,
  Text,
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
} from "@chakra-ui/react";
import Auth from "./Authentication/Auth";
import chatContext from "../context/chatContext";
import { Link, useNavigate } from "react-router-dom";

const Home = () => {
  // context
  const context = useContext(chatContext);
  const { isAuthenticated } = context;
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [index, setIndex] = useState();
  const navigate = useNavigate();

  useEffect(() => {
    if (isAuthenticated) {
      navigate("/dashboard");
    }
  }, [isAuthenticated, navigate]);

  const handleLoginOpen = () => {
    setIndex(0);
    onOpen();
  };

  // Sample common interview questions and answers
  const qaPairs = [
    {
      question: "Can you tell me a little about yourself?",
      answer: "I am a dedicated individual with a strong background in [your field or experience], passionate about [specific interest or career goal]. I enjoy taking on challenges and continuously learning new skills."
    },
    {
      question: "Why do you want to work here?",
      answer: "I am impressed by your company’s mission to [specific mission or value], and I believe my skills align with your goals. I am excited to contribute to your team and grow professionally."
    },
    {
      question: "What are your greatest strengths?",
      answer: "My greatest strengths include [list strengths such as problem-solving, communication, teamwork, etc.]. These qualities have helped me succeed in past roles."
    },
    {
      question: "What is your greatest weakness?",
      answer: "I sometimes [mention a minor weakness, such as being too detail-oriented], but I have been actively working on this by [explain improvement efforts]."
    },
    {
      question: "Can you describe a challenging situation and how you handled it?",
      answer: "In my previous role, I faced [briefly describe the challenge]. I addressed it by [explain the actions you took], which resulted in [positive outcome]."
    },
    {
      question: "Where do you see yourself in five years?",
      answer: "In five years, I see myself growing with the company, taking on more responsibilities, and continuing to develop my skills in [specific area]."
    },
    {
      question: "How do you handle stress and pressure?",
      answer: "I handle stress by staying organized, prioritizing tasks, and maintaining a positive attitude. I also find that taking short breaks helps me stay focused."
    },
    {
      question: "What motivates you?",
      answer: "I am motivated by [specific motivators, such as achieving goals, helping others, or learning new skills], which drive me to perform at my best."
    },
    {
      question: "What do you consider to be your biggest professional achievement?",
      answer: "One of my biggest achievements was [describe a notable accomplishment], which demonstrated my ability to [mention specific skills or qualities]."
    },
    {
      question: "Why are you leaving your current job?",
      answer: "I am looking for new opportunities to grow and advance my career in [specific field or role]. I value the experiences I gained in my current role but am excited for what’s next."
    },
    {
      question: "What do you know about this company?",
      answer: "I know that your company [mention specific details about the company’s mission, products, or achievements]. I admire your commitment to [specific value or area]."
    },
    {
      question: "How do you prioritize your work?",
      answer: "I prioritize my work by evaluating deadlines and importance. I use tools like [specific tools or methods, such as to-do lists or project management software] to stay organized."
    },
    {
      question: "Do you prefer working independently or in a team?",
      answer: "I enjoy both. I value collaboration for learning and creativity but also excel when working independently on tasks."
    },
    {
      question: "How do you handle constructive criticism?",
      answer: "I view constructive criticism as an opportunity to improve. I listen carefully, ask questions for clarity, and apply the feedback to enhance my performance."
    },
    {
      question: "Can you describe your ideal work environment?",
      answer: "My ideal work environment is one that fosters collaboration, encourages innovation, and supports professional growth."
    },
    {
      question: "What are your salary expectations?",
      answer: "Based on my research and experience, I am looking for a salary in the range of [mention range], but I am open to discussion."
    },
    {
      question: "Do you have any questions for us?",
      answer: "Yes, I’d like to know more about [specific question about the role, team, or company goals]."
    },
    {
      question: "What makes you unique?",
      answer: "What makes me unique is my ability to [mention unique qualities or experiences that set you apart]."
    },
    {
      question: "How do you stay organized?",
      answer: "I stay organized by using tools like [specific tools, such as planners or apps], setting clear priorities, and regularly reviewing my progress."
    },
    {
      question: "Why should we hire you?",
      answer: "You should hire me because I bring [specific strengths or experiences], and I am confident that I can make a meaningful contribution to your team."
    }
  ];

  return (
    <Box h={"max-content"} verticalAlign="middle">
      <Flex direction="column" align="center" justify="center" minH="80vh">
        <Box textAlign="center" w={{ base: "90%", md: "70%" }}>
         
          <Text fontSize={"4xl"} fontWeight={"bold"} fontFamily={"Work sans"} mb={4}>
            Common Interview Questions
          </Text>
          <Button mb={4} onClick={handleLoginOpen} colorScheme="purple">
            See More Questions
          </Button>
          
          <Flex direction="column" align="start" gap={4}>
            {qaPairs.map((qa, idx) => (
              <Box key={idx}>
                <Text fontSize="lg" fontWeight="bold">
                  {idx + 1}. {qa.question}
                </Text>
                <Text fontSize="md" fontStyle="italic" mt={1}>
                  {qa.answer}
                </Text>
              </Box>
            ))}
          </Flex>
        </Box>
      </Flex>
      {/* Copyright */}
      <Text
        fontSize="sm"
        position={"fixed"}
        bottom={2}
        left={"calc(50% - 155px)"}
        mt={4}
        textAlign="center"
      >
        
      </Text>
      {/* Auth Modal */}
      <Modal
        isOpen={isOpen}
        onClose={onClose}
        colorScheme="red"
        size={{ base: "md", md: "xl" }}
      >
        <ModalOverlay />
        <ModalContent w={{ base: "95vw" }}>
          <ModalHeader>Login</ModalHeader>
          <ModalBody>
            <Auth tabindex={index} />
          </ModalBody>
          <ModalCloseButton />
        </ModalContent>
      </Modal>
    </Box>
  );
};

export default Home;
