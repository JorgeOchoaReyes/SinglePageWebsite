import { Container, theme } from "@chakra-ui/react";
import { Navbar } from "../components/Navbar";
import { Header } from "../components/Header";
import { Teams } from "../components/Teams";
import { Footer } from "../components/Footer";
import { Box } from "@chakra-ui/react";
import { Achievements } from "../components/Achievements";

const Index = () => (
  <Box maxW="full"  >
    <Header /> 
    <Teams /> 
    <Achievements /> 
  </Box>
)

export default Index
