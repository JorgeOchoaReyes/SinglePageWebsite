import { StackProps, VStack, Flex, FlexProps } from '@chakra-ui/react';
import React, { Children } from 'react'

interface ContainerProps {

}

export const Container: React.FC<ContainerProps> = (props: FlexProps) => {
    return (
        <Flex 
            {...props} 
            alignContent="center"
            flexDirection="column"    
        />
    );
}