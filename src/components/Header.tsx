import React from 'react';
import { Box,  Center, Text, Flex, Heading, VStack} from '@chakra-ui/react';

interface HeaderProps {

}


const LeftContent = () => {
    return (
        <VStack 
            w="full" 
            h="full" 
            p="10"  
            justifyContent='space-around'
            alignItems='center' bg="gray.50">
            
            <Box>
                <Heading> Check out this Image! </Heading>
                <Text> Look a description! Much wow ! </Text>
            </Box>

                           
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
            alignItems='center' bg="gray.50">
            
            <Box>
                <Heading> Check out this Image! </Heading>
                <Text> Look a description! Much wow ! </Text>
            </Box>

                           
        </VStack>
    )
}

export const Header: React.FC<HeaderProps> = ({}) => {
    return (
        <Flex h={{base: "auto", md: "100vh"}} textColor='black' py={[0, 10, 15]} direction={{base: "column-reverse", md: "row"}}>
            <LeftContent /> 
            <RightContent />     
        </Flex> 
    );
}

