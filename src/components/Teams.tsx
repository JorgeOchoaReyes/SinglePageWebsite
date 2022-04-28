import { Box, Heading, Image, SlideFade, Text, VStack, Stack, Flex} from '@chakra-ui/react';
import React from 'react'
import { animationDelay, darkThemeGrad_TB } from '../Util/constants';
import Valorant from '../Util/VALORANT.png';
import Halo from '../Util/halo.jpg';
import Fortnite from '../Util/fortnite.jpg';
// import Card from '../components/Card'; 

interface MainProps {

}

const Card = ({title, placements, img}) => {
    return (
        <Box bg="" as='article'  h={{base:'auto'}} maxW='sm' p='5' borderWidth='1.5px' borderColor="#D3D3D3"  rounded='md'>
            <Box>
                <Image   
                    src={img} 
                    w='auto'
                    h={{base: 'auto', md: '48'}}
                    alt='Valorant Logo'/>
            </Box>
          <Heading size='md' my='2'>
              {title}
          </Heading>
          <Box textColor="#6b6b6b" fontFamily="'Gothic A1', sans-serif">
            <Text fontSize={{base: 'auto'}} flexWrap='wrap'>
              {placements}
            </Text>
            <Text fontSize={{base: 'auto'}} flexWrap='wrap'>
              {placements}
            </Text>
            <Text fontSize={{base: 'auto'}} flexWrap='wrap'>
              {placements}
            </Text>
          </Box>


        </Box>
    )
}

const CardContent = (data) => {
    return (
    <Stack 
        w="full" 
        h="full" 
        direction={{base: "column", md: "row"}}
        spacing={10}
        justifyContent='center'
        alignItems='center'>

        <SlideFade delay={animationDelay} in={true} offsetX='100px'>
            <Box>
                <Card title="Valorant" img={Valorant.src} placements="1st Place in Masters Berlin"/>
            </Box>
        </SlideFade>
        <SlideFade delay={animationDelay} in={true} offsetY='100px'>
            <Box>
                <Card title="Halo" img={Halo.src} placements="1st Place in Masters Berlin"/>
            </Box>
        </SlideFade>
        <SlideFade delay={animationDelay} in={true} offsetY='100px'>
            <Box>
                <Card title="Fortnite" img={Fortnite.src} placements="1st Place in Masters Berlin"/>
            </Box>
        </SlideFade>
                   
    </Stack>)
}


export const Teams: React.FC<MainProps> = ({}) => {
    return (
        <Flex h={{base: "auto",  sm: "90vh", xl: '80vh'}} bg={darkThemeGrad_TB} w="full"  justifyContent='center' textColor="white" direction={{base: "column", md: "row"}} >
            <Flex justifyContent='space-around' direction={{base: "column"}}>
                <Box fontSize={{ base: '24px', lg: '30px',  xl: '45px'}} fontWeight='bolder'>
                    <Text align="center" > Show off the teams that your organizaiton competes in. </Text>
                </Box>
                <Box>   
                    <CardContent />
                </Box>
            </Flex>
        </Flex> 
    );
}