
import { Box } from '@chakra-ui/layout';
import React from 'react'

export type WrapperVariant = "small" | "regular"; 

interface WrapperProps {
    variant?: WrapperVariant 
}

const Wrapper: React.FC<WrapperProps> = ({children, variant="regular"}) => {
        return (
            <Box  
            maxW="full"> 
                {children}
            </Box>
        );
}

export default Wrapper; 