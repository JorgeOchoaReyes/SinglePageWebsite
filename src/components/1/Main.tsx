import React from 'react';
import { Box, Text, Flex, Heading, VStack, Image, Button, SlideFade, Tooltip } from '@chakra-ui/react';
import Product from '../../Util/growthbook.png'; 
import {CheckIcon} from '@chakra-ui/icons'; 
import { animationDelay } from '../../Util/constants';

interface HeaderProps {

}

//To do: 
//Slow down slide fade animation 


const LeftContent = () => {
    return (
    
            <VStack 
                w="full" 
                h="full" 
                p="10"  
                justifyContent='space-around'
                >
                <SlideFade delay={animationDelay} in={true} offsetY='100px'>
                    <Box>
                            <VStack spacing={8} >
                                <VStack spacing={2} alignContent='flex-start'>
                                    <Heading fontSize={{ base: '25px', md: '50px', lg: '50px'}} fontWeight='bolder' size='2xl'> Make your organization known! </Heading>
                                    <Text fontSize={{ base: 'auto', md: '20px'}} > We can help you create a perfect website for your esports organization! </Text>
                                    <Box>
                                        <Button zIndex={0} isFullWidth={true} size="lg" bg='blue' > Get Started for free </Button>
                                    </Box>
                                </VStack>
                                <Text> <CheckIcon /> Skills <CheckIcon /> Abilities <CheckIcon /> Quality </Text>
                            </VStack>
                    </Box>
                </SlideFade>
            </VStack>

    )
}

const RightContent = () => {
    return (
        <VStack 
            w="full" 
            h="full" 
            p="10"  
            justifyContent='space-around'
            alignItems='center'>
            <SlideFade delay={animationDelay} in={true} offsetX='100px'>
                <Box>
                    <Image   
                    useMap='#workmap'
                            src={Product.src} 
                            alt='Company Logo'/>
                </Box>
            </SlideFade>
                           
        </VStack>
    )
}

export const Main: React.FC<HeaderProps> = ({}) => {
    return (
        <Flex h={{base: "auto", md: "80vh"}} textColor='white' bg="linear-gradient(to right, #7110b3, #3d0f55)"  py={[0, 10, 15]} direction={{base: "column", md: "row"}}>
            <LeftContent /> 
            <RightContent />     
        </Flex> 
    );
}

