import { ChakraComponent, Box, BoxProps } from '@chakra-ui/react'

type DivComponent = ChakraComponent<'div', {}>

const Card = ((props: BoxProps) => (
  <Box px='4' py='5' rounded='sm' shadow='lg' {...props} />
)) as DivComponent