import { Button, Container, Heading, Input, VStack } from '@chakra-ui/react';
import React, { useState } from 'react';

const ChangePassword = () => {
  const [oldPassword, setOldPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');

  const passwordHandler = (e) => {
    e.preventDefault();
    console.log("password changed");
  };

  return (
    <Container py={'16'} minH={'90vh'}>
      <form onSubmit={passwordHandler}>
        <Heading
          textTransform={'uppercase'}
          my={'16'}
          textAlign={['center', 'left']}
        >
          Change Password
        </Heading>

        <VStack spacing={'8'}>
          <Input
            required
            id="oldPassword"
            value={oldPassword}
            onChange={e => setOldPassword(e.target.value)}
            placeholder="Old Password"
            type="password"
            focusBorderColor="yellow.500"
          />

          <Input
            required
            id="newPassword"
            value={newPassword}
            onChange={e => setNewPassword(e.target.value)}
            placeholder="New Password"
            type="password"
            focusBorderColor="yellow.500"
          />

          <Button type="submit" w={'full'} colorScheme="yellow">
            Change
          </Button>
        </VStack>
      </form>
    </Container>
  );
};

export default ChangePassword;
