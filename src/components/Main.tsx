import { Box, Text, VStack } from '@chakra-ui/react';
import React from 'react'

interface MainProps {

}

export const Main: React.FC<MainProps> = ({}) => {
    return (
        <Box backgroundColor='red' >
            <VStack>
                <Text textColor='white'> This the 1 content </Text>
                <Text textColor='white'> This the 2 content </Text>
                <Text textColor='white'> This the 3 content </Text>
                <Text textColor='white'> This the 4 content </Text>
                <Text textColor='white'> This the 5 content </Text>
            </VStack>
            
        </Box> 
    );
}