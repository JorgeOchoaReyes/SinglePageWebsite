import { Box, Text, HStack, Spacer, Stack } from '@chakra-ui/react';
import React from 'react';

interface NavbarProps {

}

export const Navbar: React.FC<NavbarProps> = ({}) => {
    return (
        <Box  w="100%" h="5rem" position='sticky' top='0' background="rgb(255, 0, 0, .1)" paddingX="160px" display='flex' justifyContent='center' flexDirection='column' >
         
            <HStack spacing={10} >  
        
                <Text fontSize='24' textColor='white'> This the navbar</Text>
                <Spacer />
                <Text fontSize='24' textColor='white'> Get Started </Text>
                <Text fontSize='24' textColor='white'> Docs </Text>
                <Text fontSize='24' textColor='white'> Guthub </Text>
                <Text fontSize='24' textColor='white'> Login </Text>
                <Text fontSize='24' textColor='white'> Contact us </Text>
            </HStack>
            
        </Box> 
    );
}