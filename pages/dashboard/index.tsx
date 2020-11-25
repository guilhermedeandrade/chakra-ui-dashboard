import {
  Heading,
  HStack,
  Box,
  Text,
  Icon,
  Center,
  SimpleGrid,
} from '@chakra-ui/react'
import { ArrowDownIcon, ArrowUpIcon } from '@chakra-ui/icons'
import {
  MdAddShoppingCart,
  MdAttachMoney,
  MdPeople,
  MdShowChart,
} from 'react-icons/md'

function Dashboard(): React.ReactElement {
  return (
    <Box mx={{ base: 3, sm: 6, md: 12, lg: 24, xl: 'auto' }} maxW="68rem">
      <Heading as="h1" mt={4} mb={6} color="gray.600">
        Dashboard
      </Heading>

      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={6} color="gray.400">
        <Box
          p={6}
          rounded="md"
          shadow="md"
          w={{ base: 'full', sm: '75%', md: 'full' }}
          mx={{ sm: 'auto', md: 0 }}
          maxW={{ base: '30rem', lg: '34rem' }}
          bg="white"
          pos="relative"
        >
          <Heading mb={6} size="md" fontWeight="normal">
            Customers
          </Heading>

          <Text mb={6} fontSize="3xl" color="gray.600">
            36,254
          </Text>

          <HStack spacing={4}>
            <HStack spacing={1} color="green.500">
              <ArrowUpIcon />
              <Text>5.27%</Text>
            </HStack>

            <Text>Since last month</Text>
          </HStack>

          <Center
            pos="absolute"
            top="1.5rem"
            right="1.5rem"
            bg="purple.100"
            rounded="md"
            w="10"
            h="10"
          >
            <Icon as={MdPeople} color="purple.500" />
          </Center>
        </Box>

        <Box
          p={6}
          rounded="md"
          shadow="md"
          w={{ base: 'full', sm: '75%', md: 'full' }}
          mx={{ sm: 'auto', md: 0 }}
          maxW={{ base: '30rem', lg: '34rem' }}
          bg="white"
          pos="relative"
        >
          <Heading mb={6} size="md" fontWeight="normal">
            Orders
          </Heading>

          <Text mb={6} fontSize="3xl" color="gray.600">
            5,543
          </Text>

          <HStack spacing={4}>
            <HStack spacing={1} color="red.500">
              <ArrowDownIcon />
              <Text>1.08%</Text>
            </HStack>

            <Text>Since last month</Text>
          </HStack>

          <Center
            pos="absolute"
            top="1.5rem"
            right="1.5rem"
            bg="purple.100"
            rounded="md"
            w="10"
            h="10"
          >
            <Icon as={MdAddShoppingCart} color="purple.500" />
          </Center>
        </Box>

        <Box
          p={6}
          rounded="md"
          shadow="md"
          w={{ base: 'full', sm: '75%', md: 'full' }}
          mx={{ sm: 'auto', md: 0 }}
          maxW={{ base: '30rem', lg: '34rem' }}
          bg="white"
          pos="relative"
        >
          <Heading mb={6} size="md" fontWeight="normal">
            Revenue
          </Heading>

          <Text mb={6} fontSize="3xl" color="gray.600">
            $6,254
          </Text>

          <HStack spacing={4}>
            <HStack spacing={1} color="red.500">
              <ArrowDownIcon />
              <Text>7.00%</Text>
            </HStack>

            <Text>Since last month</Text>
          </HStack>

          <Center
            pos="absolute"
            top="1.5rem"
            right="1.5rem"
            bg="purple.100"
            rounded="md"
            w="10"
            h="10"
          >
            <Icon as={MdAttachMoney} color="purple.500" />
          </Center>
        </Box>

        <Box
          p={6}
          rounded="md"
          shadow="md"
          w={{ base: 'full', sm: '75%', md: 'full' }}
          mx={{ sm: 'auto', md: 0 }}
          maxW={{ base: '30rem', lg: '34rem' }}
          bg="white"
          pos="relative"
        >
          <Heading mb={6} size="md" fontWeight="normal">
            Growth
          </Heading>

          <Text mb={6} fontSize="3xl" color="gray.600">
            + 30.56%
          </Text>

          <HStack spacing={4}>
            <HStack spacing={1} color="green.500">
              <ArrowUpIcon />
              <Text>4.87%</Text>
            </HStack>

            <Text>Since last month</Text>
          </HStack>

          <Center
            pos="absolute"
            top="1.5rem"
            right="1.5rem"
            bg="purple.100"
            rounded="md"
            w="10"
            h="10"
          >
            <Icon as={MdShowChart} color="purple.500" />
          </Center>
        </Box>
      </SimpleGrid>
    </Box>
  )
}

export default Dashboard
