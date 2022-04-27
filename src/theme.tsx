import { extendTheme } from '@chakra-ui/react'
import { createBreakpoints } from '@chakra-ui/theme-tools'

const fonts = { mono: `'Menlo', monospace` }

const breakpoints = createBreakpoints({
  xsm: "30em",
  sm: "48em",
  md: "62em",
  lg: "80em",
  "xl": "96em",
})

const colors = {
  primary: {
    100: "#E5FCF1",
    200: "#27EF96",
    300: "#10DE82",
    400: "#0EBE6F",
    500: "#0CA25F",
    600: "#0A864F",
    700: "#086F42",
    800: "#075C37",
    900: "#064C2E"
  }
};

export const gradColor = "linear-gradient(to right, #7110b3, #3d0f55)"; 

const theme = extendTheme({
  colors,
  fonts,
  breakpoints,
})

export default theme
