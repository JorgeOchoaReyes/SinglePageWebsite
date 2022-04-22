import { ChakraProvider, Box } from '@chakra-ui/react'

import theme from '../theme'
import { AppProps } from 'next/app'
import {Navbar} from '../components/Navbar'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider resetCSS theme={theme}>
      <Box bg="linear-gradient(to right, #7110b3, #3d0f55)">
        <Navbar /> 
        <Component {...pageProps} />
      </Box>

    </ChakraProvider>
  )
}

export default MyApp
