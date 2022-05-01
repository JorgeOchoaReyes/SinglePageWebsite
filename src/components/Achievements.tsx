import { Box, Heading, Image, VStack, Flex} from '@chakra-ui/react';
import React from 'react'
import { darkTheme } from '../Util/constants';
import  Champs from '../Util/champs.jpg'; 

interface AchievementsProps {

}

const Milestones = () => {
    return (
        <Box>
            <div> Image of trophies that your team has obtained </div>
        </Box>
    )
}

export const Achievements: React.FC<AchievementsProps> = ({}) => {
    return (
        <Flex h={{base: "auto"}} py={20} bg={darkTheme} w="full" justifyContent='center' textColor="white" direction={{base: "column", md: "row"}} >
            <VStack >
                <Heading paddingBottom={10}> Achivements </Heading>
                <Box>
                    <Image 
                    sizes='auto'
                    boxShadow=" 0 6px 6px hsl(0deg 0% 0% / 0.3)"
                        src={Champs.src}
                        alt="Achivements"
                        />
                </Box>

            </VStack>
        </Flex> 
    );
}