import { ChakraProvider } from '@chakra-ui/react'

interface Props {
  Component: React.FC
  pageProps: Record<string, unknown>
}

function MyApp({ Component, pageProps }: Props): React.ReactElement {
  return (
    <ChakraProvider resetCSS>
      <Component {...pageProps} />
    </ChakraProvider>
  )
}

export default MyApp
