import { extendTheme } from '@chakra-ui/react'

const theme = extendTheme({
  styles: {
    global: {
      body: {
        bg: 'red.700',
        color: 'gray.50',
      },
    },
  },
  fonts: {
    heading: 'Cinzel, serif',
    body: 'Cinzel, serif',
  },
  shadows: {
    outline: '0 0 0 3px rgba(240, 242, 27, 0.8)',
  },
})

export default theme
