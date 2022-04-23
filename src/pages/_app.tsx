import { ChakraProvider, Box } from '@chakra-ui/react'

import theme from '../theme'
import { AppProps } from 'next/app'
import {Navbar} from '../components/Navbar'
import { lightThemeGrad } from '../Util/constants'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider resetCSS theme={theme}>
      <Box bg={lightThemeGrad}>
        <Navbar /> 
        <Component {...pageProps} />
      </Box>

    </ChakraProvider>
  )
}

export default MyApp
