import { useForm } from 'react-hook-form'
import React, { useCallback, useState } from 'react'
import {
  Box,
  FormErrorMessage,
  FormLabel,
  FormControl,
  Input,
  Button,
  Checkbox,
  VStack,
  Heading,
  Text,
  Center,
  InputGroup,
  InputRightElement,
  IconButton,
  Flex,
  Link,
} from '@chakra-ui/react'
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons'

function Home(): React.ReactElement {
  const { handleSubmit, errors, register } = useForm()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [showPassword, setShowPassword] = React.useState(false)

  const onSubmit = useCallback(values => {
    setIsSubmitting(true)

    setTimeout(() => {
      alert(JSON.stringify(values, null, 2))

      setIsSubmitting(false)
    }, 1000)
  }, [])

  const onClickShowPassword = useCallback(
    () => setShowPassword(!showPassword),
    [setShowPassword, showPassword],
  )

  return (
    <Flex
      direction="column"
      justifyContent="center"
      minH="100vh"
      bg="blue.100"
      px={4}
    >
      <Box
        bg="gray.100"
        rounded="sm"
        roundedTop="none"
        borderTop="4px"
        borderColor="purple.500"
        p={6}
      >
        <VStack mb={8}>
          <Heading as="h1" color="gray.600">
            Sign in
          </Heading>

          <Text align="center" color="gray.400">
            Enter your email address and password to access admin panel
          </Text>
        </VStack>

        <form onSubmit={handleSubmit(onSubmit)}>
          <FormControl isInvalid={errors.email || errors.password}>
            <Box mb={4}>
              <FormLabel htmlFor="email" color="gray.600">
                Email address
              </FormLabel>
              <Input
                rounded="md"
                type="text"
                placeholder="Enter your email"
                name="email"
                ref={register({ required: 'Email is required' })}
              />
              <FormErrorMessage>
                {errors.email && errors.email.message}
              </FormErrorMessage>
            </Box>

            <Box mb={4}>
              <Flex justifyContent="space-between">
                <FormLabel htmlFor="password" color="gray.600">
                  Password
                </FormLabel>

                <Link color="gray.400" fontSize="sm" href="#">
                  Forgot your password?
                </Link>
              </Flex>

              <InputGroup size="md">
                <Input
                  type={showPassword ? 'text' : 'password'}
                  placeholder="Enter your password"
                  name="password"
                  ref={register({ required: 'Password is required' })}
                />
                <InputRightElement>
                  <IconButton
                    aria-label="Show or hide the password"
                    bg="gray.200"
                    color="gray.600"
                    roundedLeft="none"
                    icon={showPassword ? <ViewOffIcon /> : <ViewIcon />}
                    onClick={onClickShowPassword}
                  />
                </InputRightElement>
              </InputGroup>

              <FormErrorMessage>
                {errors.password && errors.password.message}
              </FormErrorMessage>

              <Checkbox mt={4} colorScheme="purple" color="gray.600">
                Remember me
              </Checkbox>
            </Box>
          </FormControl>

          <Center>
            <Button
              mt={4}
              colorScheme="purple"
              isLoading={isSubmitting}
              type="submit"
              shadow="md"
              rounded="sm"
            >
              Log In
            </Button>
          </Center>
        </form>
      </Box>
    </Flex>
  )
}

export default Home
