import { Avatar, Container, Heading, Stack, Text, VStack } from '@chakra-ui/react';
import React, { Fragment } from 'react';

const Founder = () => (
  <Stack
    direction={['column', 'row']}
    spacing={['4', '16']}
    padding={'8'}
  >
    <VStack>
        <Avatar boxSize={['40', '48']} />
        <Text opacity={0.7}>Co-Founder</Text>
    </VStack>

    <VStack>
        <Heading size={['md', 'xl']}>Krushna Dike</Heading>
        <Text textAlign={['center', 'left']}>Hii, I am a Software Developer. Our mission is to provide quality content at reasonable price.</Text>
    </VStack>
  </Stack>
);

const About = () => {
  return (
    <Fragment>
      <Container maxW={'container.lg'} padding={'16'} boxShadow={'lg'}>
        <Heading textAlign={['center', 'left']}>About Us</Heading>

        <Founder />
      </Container>
    </Fragment>
  );
};

export default About;
