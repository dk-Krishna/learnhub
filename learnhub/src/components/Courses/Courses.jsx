import {
  Button,
  Container,
  HStack,
  Heading,
  Image,
  Input,
  Stack,
  Text,
  VStack,
} from '@chakra-ui/react';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Course = ({
  views,
  title,
  imageSrc,
  id,
  addToPlaylistHandler,
  creator,
  description,
  lectureCount,
}) => {
  return (
    <VStack className="course" alignItems={['center', 'flex-start']}>
      <Image src={imageSrc} boxSize={'60'} objectFit={'contain'} />
      <Heading
        textAlign={['center', 'left']}
        maxW={'200px'}
        fontFamily={'sans-serif'}
        noOfLines={3}
        size={'sm'}
      >
        {title}
      </Heading>

      <Text noOfLines={2}>{description}</Text>

      <HStack>
        <Text fontWeight={'bold'} textTransform={'uppercase'}>
          Creator
        </Text>

        <Text fontFamily={'body'} textTransform={'uppercase'}>
          {creator}
        </Text>
      </HStack>

      <Heading textAlign={'center'} size={'xs'} textTransform={'uppercase'}>
        Lectures - {lectureCount}{' '}
      </Heading>

      <Heading size={'xs'} textTransform={'uppercase'}>
        Views - {views}{' '}
      </Heading>

      <Stack direction={['column', 'row']} alignItems={'center'}>
        <Link to={`/course/${id}`}>
          <Button colorScheme="yellow">Watch Now</Button>
        </Link>

        <Button
          variant={'ghost'}
          colorScheme="yellow"
          onClick={() => addToPlaylistHandler(id)}
        >
          Add to playlist
        </Button>
      </Stack>
    </VStack>
  );
};

const Courses = () => {
  const [keyword, setKeyword] = useState('');
  const [category, setCategory] = useState('');

  const catagories = [
    'Web Development',
    'Artificial Intelligence',
    'Data Structure & Algorithm',
    'App Development',
    'Data Science',
    'Game Development',
  ];

  const addToPlaylistHandler = () => {
    console.log('Added To Playlist..');
  };

  return (
    <Container minH={'95vh'} maxW={'container.lg'} paddingY={'8'}>
      <Heading m={'8'}> All Courses </Heading>

      <Input
        value={keyword}
        onChange={e => setKeyword(e.target.value)}
        placeholder="Search a course..."
        type="text"
        focusBorderColor="yellow.500"
      />

      <HStack
        overflowX={'auto'}
        paddingY={'8'}
        css={{
          '&::-webkit-scrollbar': {
            display: 'none',
          },
        }}
      >
        {catagories.map((item, index) => (
          <Button key={index} onClick={() => setCategory(item)} minW={'60'}>
            <Text>{item}</Text>
          </Button>
        ))}
      </HStack>

      <Stack
        direction={['column', 'row']}
        flexWrap={'wrap'}
        justifyContent={['flex-start', 'space-evenly']}
        alignItems={['center', 'flex-start']}
      >
        <Course
          title={'Sample'}
          description={'Sample'}
          views={23}
          imageSrc={
            'https://cdn.pixabay.com/photo/2023/10/30/02/34/woman-8351528_1280.jpg'
          }
          id={'Sample'}
          creator={'Sample Boy'}
          lectureCount={2}
          addToPlaylistHandler={addToPlaylistHandler}
        />
      </Stack>
    </Container>
  );
};

export default Courses;
