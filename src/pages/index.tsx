import { Container } from "../components/Container";
import { Navbar } from "../components/Navbar";
import { Header } from "../components/Header";
import { Main } from "../components/Main";
import { Footer } from "../components/Footer";
import { Box } from "@chakra-ui/react";

const Index = () => (
  <Container>
    <Box backgroundColor='green'>
      <Navbar />
      <Header /> 
    </Box>

    <Main /> 
    <Footer /> 
  </Container>
)

export default Index
