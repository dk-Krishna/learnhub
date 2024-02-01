import { Button, Container, Heading, Input, VStack } from '@chakra-ui/react';
import React, { useState } from 'react';

const UpdateProfile = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const profileHandler = e => {
    e.preventDefault();
    console.log('password changed');
  };

  return (
    <Container py={'16'} minH={'90vh'}>
      <form onSubmit={profileHandler}>
        <Heading
          textTransform={'uppercase'}
          my={'16'}
          textAlign={['center', 'left']}
        >
          Update Profile
        </Heading>

        <VStack spacing={'8'}>
          <Input
            id="name"
            value={name}
            onChange={e => setName(e.target.value)}
            placeholder="Name"
            type="text"
            focusBorderColor="yellow.500"
          />

          <Input
            id="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            placeholder="Email"
            type="email"
            focusBorderColor="yellow.500"
          />

          <Button type="submit" w={'full'} colorScheme="yellow">
            Update
          </Button>
        </VStack>
      </form>
    </Container>
  );
};

export default UpdateProfile;
