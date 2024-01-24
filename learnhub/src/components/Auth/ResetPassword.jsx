import { Button, Container, Heading, Input, VStack } from '@chakra-ui/react';
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

const ResetPassword = () => {
  const [password, setPassword] = useState('');

  const params = useParams();

  console.log(params.token);

  return (
    <Container py={'16'} height={'90vh'}>
      <form>
        <Heading
          my={'16'}
          textAlign={['center', 'left']}
          textTransform={'uppercase'}
        >
          Reset Password
        </Heading>

        <VStack spacing={'8'}>
          <Input
            required
            value={password}
            onChange={e => setPassword(e.target.value)}
            placeholder="New Password"
            type="password"
            focusBorderColor="yellow.500"
          />

          <Button type="submit" w={'full'} colorScheme="yellow">
            Reset Password
          </Button>
        </VStack>
      </form>
    </Container>
  );
};

export default ResetPassword;
