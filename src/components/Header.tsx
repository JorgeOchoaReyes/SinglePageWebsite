import React from 'react';
import { Box, HStack, Text } from '@chakra-ui/react';

interface HeaderProps {

}

export const Header: React.FC<HeaderProps> = ({}) => {
    return (
        <Box  w="100%" h="80vh">
            <HStack align='center' alignContent='center' flexDirection='row' justifyContent='space-around'>
                <Text textColor='white'> Content Left </Text> 
                <Text textColor='white'> Contentent Right </Text>
            </HStack>
        </Box> 
    );
}