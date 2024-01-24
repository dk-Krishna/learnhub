import { Button, Container, Heading, Input, VStack } from '@chakra-ui/react';
import React, { useState } from 'react';

const ForgetPassword = () => {
  const [email, setEmail] = useState('');

  return (
    <Container py={'16'} height={'90vh'}>
      <form>
        <Heading
          my={'16'}
          textAlign={['center', 'left']}
          textTransform={'uppercase'}
        >
          Forget Password
        </Heading>

        <VStack spacing={'8'}>
          <Input
            required
            value={email}
            onChange={e => setEmail(e.target.value)}
            placeholder="abc@gmail.com"
            type="email"
            focusBorderColor="yellow.500"
          />

          <Button type="submit" w={'full'} colorScheme="yellow">
            Send Reset Link
          </Button>
        </VStack>
      </form>
    </Container>
  );
};

export default ForgetPassword;
