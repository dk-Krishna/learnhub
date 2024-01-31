import {
  Avatar,
  Button,
  Container,
  HStack,
  Heading,
  Image,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Stack,
  Text,
  VStack,
  useDisclosure,
} from '@chakra-ui/react';
import React, { useState } from 'react';
import { RiDeleteBin7Fill } from 'react-icons/ri';
import { Link } from 'react-router-dom';
import { fileUploadCss } from '../Auth/Signup';

const Profile = () => {
  const user = {
    name: 'Krushna',
    email: 'krushna@gmail.com',
    createdAt: String(new Date().toISOString()),
    role: 'user',
    subscription: {
      status: 'active',
    },
    playlist: [
      {
        course: 'sadsad',
        poster:
          'https://cdn.pixabay.com/photo/2023/10/30/02/34/woman-8351528_1280.jpg',
      },
    ],
  };

  const removeFromPlaylistHandler = id => {
    console.log('Removed from playlist.', id);
  };

  const { isOpen, onClose, onOpen } = useDisclosure();

  const changeImageSubmitHandler = (e, image) => {
    e.preventDefault();
  };

  return (
    <Container minH={'95vh'} maxW={'container.lg'} py={'8'}>
      <Heading m={'8'} textTransform={'uppercase'}>
        Profile
      </Heading>

      <Stack
        justifyContent={'flex-start'}
        direction={['column', 'row']}
        alignItems={'center'}
        spacing={['8', '16']}
        p={'8'}
      >
        <VStack>
          <Avatar boxSize={'48'} />
          <Button onClick={onOpen} colorScheme="yellow" variant={'ghost'}>
            Change Photo
          </Button>
        </VStack>

        <VStack spacing={'4'} alignItems={['center', 'flex-start']}>
          <HStack>
            <Text fontWeight={'bold'}>Name</Text>
            <Text>{user.name}</Text>
          </HStack>

          <HStack>
            <Text fontWeight={'bold'}>Email</Text>
            <Text>{user.email}</Text>
          </HStack>

          <HStack>
            <Text fontWeight={'bold'}>CreatedAt</Text>
            <Text>{user.createdAt.split('T')[0]}</Text>
          </HStack>

          {user.role !== 'admin' && (
            <HStack>
              <Text fontWeight={'bold'}>Subscription</Text>
              {user.subscription.status === 'active' ? (
                <Button color={'red.500'} variant={'unstyled'}>
                  Cancel Subscription
                </Button>
              ) : (
                <Link to={'/subscribe'}>
                  <Button colorScheme="yellow">Subscribe</Button>
                </Link>
              )}
            </HStack>
          )}

          <Stack direction={['column', 'row']} alignItems={'center'}>
            <Link to={'/updateprofile'}>
              <Button colorScheme="yellow">Update Profile</Button>
            </Link>

            <Link to={'/changepassword'}>
              <Button colorScheme="yellow" variant={'ghost'}>
                Change Password
              </Button>
            </Link>
          </Stack>
        </VStack>
      </Stack>

      <Heading size={'md'} my={'8'}>
        Playlist
      </Heading>

      {user.playlist.length > 0 && (
        <Stack
          direction={['column', 'row']}
          alignItems={'center'}
          flexWrap={'wrap'}
          p={'4'}
        >
          {user.playlist.map((element, index) => (
            <VStack w={'48'} m={'2'} key={element.course}>
              <Image
                src={element.poster}
                boxSize="full"
                objectFit={'contain'}
              />

              <HStack>
                <Link to={`/course/${element.course}`}>
                  <Button variant={'ghost'} colorScheme="yellow">
                    Watch Now
                  </Button>
                </Link>

                <Button
                  onClick={() => removeFromPlaylistHandler(element.course)}
                  colorScheme="red"
                  variant={'ghost'}
                >
                  <RiDeleteBin7Fill />
                </Button>
              </HStack>
            </VStack>
          ))}
        </Stack>
      )}

      <ChangePhotoBox
        isOpen={isOpen}
        onClose={onClose}
        changeImageSubmitHandler={changeImageSubmitHandler}
      />
    </Container>
  );
};

export default Profile;

const ChangePhotoBox = ({ isOpen, onClose, changeImageSubmitHandler }) => {
  const [avatar, setAvatar] = useState('');
  const [image, setImage] = useState('');

  const changeImage = e => {
    const file = e.target.files[0];

    const reader = new FileReader();

    reader.readAsDataURL(file);

    reader.onloadend = () => {
      setAvatar(reader.result); // just for preview on screen
      setImage(file); // databasse ke liye file ka blob
    };
  };

  const closeHander = () => {
    onClose();
    setAvatar('');
  };

  return (
    <Modal isOpen={isOpen} onClose={closeHander}>
      <ModalOverlay backdropFilter={'blur(10px)'} />
      <ModalContent>
        <ModalHeader>Change Photo</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Container>
            <form onSubmit={e => changeImageSubmitHandler(e, image)}>
              <VStack spacing={'8'}>
                {avatar && <Avatar boxSize={'48'} src={avatar} />}

                <Input
                  type="file"
                  css={{ '&::file-selector-button': fileUploadCss }}
                  onChange={changeImage}
                />

                <Button
                  onClick={onClose}
                  colorScheme="yellow"
                  w={'full'}
                  type="submit"
                >
                  Change
                </Button>
              </VStack>
            </form>
          </Container>
        </ModalBody>

        <ModalFooter>
          <Button onClick={closeHander} mr={'3'}>
            Cancel
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};
