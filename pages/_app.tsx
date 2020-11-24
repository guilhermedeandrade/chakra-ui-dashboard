import { ChakraProvider, extendTheme } from '@chakra-ui/react'

const styles = {
  global: {
    body: {
      backgroundColor: 'gray.100',
    },
  },
}

const theme = extendTheme({ styles })

interface Props {
  Component: React.FC
  pageProps: Record<string, unknown>
}

function MyApp({ Component, pageProps }: Props): React.ReactElement {
  return (
    <ChakraProvider theme={theme} resetCSS>
      <Component {...pageProps} />
    </ChakraProvider>
  )
}

export default MyApp
