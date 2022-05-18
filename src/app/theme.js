import { extendTheme } from '@chakra-ui/react'

const theme = extendTheme({
  styles: {
    global: {
      body: {
        bg: 'blue.700',
        color: 'white',
      },
    },
  },
  fonts: {
    heading: 'Cinzel, serif',
    body: 'Cinzel, serif',
  },
})

export default theme
