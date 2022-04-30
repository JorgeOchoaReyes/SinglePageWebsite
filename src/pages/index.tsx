import { Container, theme } from "@chakra-ui/react";
import { Navbar } from "../components/Navbar";
import { Main } from "../components/Main";
import { Teams } from "../components/Teams";
import { Footer } from "../components/Footer";
import { Box } from "@chakra-ui/react";
import { Achievements } from "../components/Achievements";
import { Layout } from "../components/Layout";

const Index = () => (
  <Layout>
    <Main /> 
    <Teams /> 
    <Achievements /> 
  </Layout>
)

export default Index
