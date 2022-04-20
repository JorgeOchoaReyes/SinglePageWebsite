import { Box, Text } from '@chakra-ui/react';
import React from 'react'

interface FooterProps {

}

export const Footer: React.FC<FooterProps> = ({}) => {
    return (
        <Box backgroundColor='orange' >
            <Text textColor='white'> This the footer</Text>
        </Box> 
    );
}