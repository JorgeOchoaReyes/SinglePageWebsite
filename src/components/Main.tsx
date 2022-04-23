import { Box, Heading, Image, SlideFade, Text, VStack, Stack, Flex} from '@chakra-ui/react';
import React from 'react'
import { animationDelay, darkThemeGrad } from '../Util/constants';
import Valorant from '../Util/VALORANT.png';
import Halo from '../Util/halo.jpg';
import Fortnite from '../Util/fortnite.jpg';

interface MainProps {

}

const Card = ({title, placements, img}) => {
    return (
        <Box bg="" as='article'  h="sm" maxW='sm' p='5' borderWidth='1px' rounded='md'>
            <Box>
                <Image   
                    src={img} 
                    alt='Valorant Logo'/>
            </Box>
          <Heading size='md' my='2'>
              {title}
          </Heading>
          <Text flexWrap='wrap'>
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
        p="10"  
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


export const Main: React.FC<MainProps> = ({}) => {
    return (
        <Flex h={{base: "auto"}} py={20} bg={darkThemeGrad} w="full" justifyContent='center'  direction={{base: "column", md: "row"}} >
            <VStack >
                <Heading paddingTop={10}> Teams </Heading>
                <CardContent /> 
            </VStack>
        </Flex> 
    );
}