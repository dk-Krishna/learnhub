import { Box, Grid, Heading, Text, VStack } from '@chakra-ui/react';
import React, { useState } from 'react';

// importing videos
import introVideo from '../../assets/videos/intro.mp4';

const CoursePage = () => {
  const [lectureNumber, setLectureNumber] = useState(0);

  const lectures = [
    {
      id: 'sadasasd',
      title: 'Sample Video',
      description: 'This is a sample description of sample video',
      video: {
        url: 'sadsadsad',
      },
    },
    {
      id: 'sadasasd 2',
      title: 'Sample Video 2',
      description: 'This is a sample description of sample video 2',
      video: {
        url: 'sadsadsad',
      },
    },
    {
      id: 'sadasasd 3',
      title: 'Sample Video 3',
      description: 'This is a sample description of sample video 3',
      video: {
        url: 'sadsadsad',
      },
    },
  ];

  return (
    <Grid minH={'90vh'} templateColumns={['1fr', '3fr 1fr']}>
      <Box>
        <video
          width={'100%'}
          src={introVideo}
          controls
          controlsList="nodownload noremoteplayback"
          disablePictureInPicture
          disableRemotePlayback
        ></video>

        <Heading m={'4'}>
          #{lectureNumber + 1} {lectures[lectureNumber].title}
        </Heading>

        <Heading m={'4'}>Description</Heading>

        <Text m={'4'}>{lectures[lectureNumber].description}</Text>
      </Box>

      <VStack>
        {lectures.map((item, index) => (
          <button
            onClick={() => setLectureNumber(index)}
            key={item._id}
            style={{
              width: '100%',
              padding: '1rem',
              textAlign: 'center',
              margin: 0,
              borderBottom: '1px solid rgba(0, 0, 0, 0.2)',
            }}
          >
            <Text noOfLines={1}>
              #{index + 1} {item.title}
            </Text>
          </button>
        ))}
      </VStack>
    </Grid>
  );
};

export default CoursePage;
