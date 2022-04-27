import { Box, Heading, Image, SlideFade, Text, VStack, Stack, Flex} from '@chakra-ui/react';
import React from 'react'
import { animationDelay, darkThemeGrad, darkThemeGrad_TB } from '../Util/constants';
import Valorant from '../Util/VALORANT.png';
import Halo from '../Util/halo.jpg';
import Fortnite from '../Util/fortnite.jpg';

interface MainProps {

}

const Card = ({title, placements, img}) => {
    return (
        <Box bg="" as='article'  h={{base:'auto'}} maxW='sm' p='5' borderWidth='1px' rounded='md'>
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
        <Flex h={{base: "auto",  md: "75vh"}} bg={darkThemeGrad_TB} w="full"  justifyContent='center' textColor="white" direction={{base: "column", md: "row"}} >
            <Flex justifyContent='space-around' direction={{base: "column"}}>
                <Box fontSize={{ base: '24px', lg: '30px',  xl: '50'}}>
                    <Text align="center" > Show off the teams that your organizaiton competes in. </Text>
                </Box>
               
                <Box>
                    <CardContent /> 
                </Box>
            </Flex>
        </Flex> 
    );
}