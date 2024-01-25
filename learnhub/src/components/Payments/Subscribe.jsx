import {
  Box,
  Button,
  Container,
  Heading,
  Text,
  VStack,
} from '@chakra-ui/react';
import React from 'react';

const Subscribe = () => {
  return (
    <Container h={'100vh'} p={'16'}>
      <Heading textAlign={'center'} my={'8'}>
        Welcome
      </Heading>

      <VStack
        boxShadow={'lg'}
        alignItems={'stretch'}
        borderRadius={'lg'}
        spacing={'0'}
      >
        <Box bg={'yellow.400'} p={'4'} css={{ borderRadius: '8px 8px 0 0' }}>
          <Text color={'black'}> Pro Pack - ₹299.00 </Text>
        </Box>

        <Box p={'4'}>
          <VStack textAlign={'center'} px={'8'} mt={'4'} spacing={'8'}>
            <Text>Join pro pack and get access to all content.</Text>
            <Heading>₹299 Only</Heading>
          </VStack>

          <Button colorScheme="yellow" my={'8'} w={'full'}>
            Buy Now
          </Button>
        </Box>

        <Box
          p={'4'}
          bg={'blackAlpha.600'}
          css={{ borderRadius: '0 0 8px 8px' }}
        >
          <Heading color={'white'} textTransform={'uppercase'} size={'sm'}>
            100% refund at cancellation
          </Heading>

          <Text fontSize={'xs'} color={'white'}>
            *Terms & Conditions Apply
          </Text>
        </Box>
      </VStack>
    </Container>
  );
};

export default Subscribe;
