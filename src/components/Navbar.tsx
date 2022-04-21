import { Box, Text, Button, Spacer, Stack, Link, Flex} from '@chakra-ui/react';
import React, {useState} from 'react';

interface NavbarProps {

}

const Logo = (props) => {
    return(
        <Box {...props} >
            <Text fontSize='lg' fontWeight='bold'>
                LOGO
            </Text>
        </Box>
    )
}

const MenuToggle = ({toggle, isOpen}) => {
    return (
        <Box display={{base: 'block', md: 'none'}} onClick={toggle}>
            {isOpen ? <Text> Close Menu </Text> : <Text> Open Menu </Text>}
        </Box>
    )
}

const MenuItem = ({children, isLast, to='/', ...rest}) => {
    return (
        <Link href={to}>
            <Text display='block' {...rest}> 
                {children}
            </Text>
        </Link>
    )
}

const NavbarContainer = ({children, ...props}) => {
    return (
        <Flex 
            as="nav"
            align="center"
            justify="space-around" 
            position="sticky" 
            top={0}
            wrap='wrap'
            w="100%"
            mb={10}
            p={5}
            px={1}
            bg={["primary.500", "primary.500", "primary.100", "primary.100"]}
            color={["white", "white", "primary.700", "primary.700"]}
            {...props}
        >
            {children}
        </Flex>
    )
}

const MenuLinks = ({isOpen}) => {
    return (
        <Box 
            display={{base: isOpen ? 'block' : 'none', md: "block"}}
            flexBasis={{base: "100%", md: "auto"}}
    >   
            <Stack 
                spacing={8} 
                align='center' 
                justify={["center", "space-between", "flex-end", 'flex-end']}
                direction={["column", "column", "row", "row"]}
                pt={[4, 4, 0, 0]}
            >
                <MenuItem to="/" isLast={0}> Home </MenuItem>
                <MenuItem to="/" isLast={0}> About </MenuItem>
                <MenuItem to="/" isLast={0}> Contact </MenuItem>
                <MenuItem to="/" isLast={0}> Other </MenuItem>
                <Button> Register </Button>
            </Stack>
        </Box>
    )
}

export const Navbar: React.FC<NavbarProps> = ({}) => {
    const [isOpen, setIsOpen] = useState(false); 
    const toggle = () => setIsOpen(!isOpen); 
    return (
        <NavbarContainer>
            <Logo
                w="100px"
                color={["white", "white", "primary.500", "primary.500"]}
            />
            <MenuToggle toggle={toggle} isOpen={isOpen} />
            <MenuLinks isOpen={isOpen} />
        </NavbarContainer>
    );
}
