import {
  Box,
  Button,
  Grid,
  HStack,
  Heading,
  Image,
  Table,
  TableCaption,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
  useDisclosure,
} from '@chakra-ui/react';
import React from 'react';

import cursor from '../../../assets/images/cursor.png';

// importing components
import Sidebar from '../Sidebar.jsx';
import { RiDeleteBin7Fill } from 'react-icons/ri';
import CourseModal from './CourseModal.jsx';

const AdminCourses = () => {
  const courses = [
    {
      _id: 'afadsasdasdfasf',
      poster: {
        url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJoYtNmTjwAMLYDxLtW8O57WQ78wIFN1XtjGu5SjWl8w&s',
      },
      title: 'MERN Stack',
      createdBy: 'Bug Busters',
      category: 'Web Development',
      views: 400,
      numOfVideos: 10,
    },
  ];

  const { isOpen, onClose, onOpen } = useDisclosure();

  const courseDetailsHandler = userId => {
    onOpen();
  };

  const deleteHandler = userId => {
    console.log('User deleted');
  };

  const deleteLectureHandler = (courseId, lectureId) => {
    console.log('Lecture deleted');
  };

  const addLectureHandler = (e, courseId, title, description, video) => {
    e.preventDefault();
    console.log('Lecture added');
  };

  return (
    <Grid
      css={{ cursor: `url(${cursor}), default` }}
      minH={'100vh'}
      templateColumns={['1fr', '5fr 1fr']}
    >
      <Box p={['0', '8']} overflowX={'auto'}>
        <Heading
          textTransform={'uppercase'}
          my={'16'}
          textAlign={['center', 'left']}
        >
          All Courses
        </Heading>

        <TableContainer w={['100vw', 'full']}>
          <Table variant={'simple'} size={'lg'}>
            <TableCaption>All available courses in the database</TableCaption>
            <Thead>
              <Tr>
                <Th>Id</Th>
                <Th>Poster</Th>
                <Th>Title</Th>
                <Th>Category</Th>
                <Th>Creator</Th>
                <Th isNumeric>Views</Th>
                <Th isNumeric>Lectures</Th>
                <Th isNumeric>Action</Th>
              </Tr>
            </Thead>
            <Tbody>
              {courses.map(item => (
                <Row
                  key={item._id}
                  item={item}
                  courseDetailsHandler={courseDetailsHandler}
                  deleteHandler={deleteHandler}
                />
              ))}
            </Tbody>
          </Table>
        </TableContainer>

        <CourseModal
          id={'asdfajsdaj'}
          isOpen={isOpen}
          onClose={onClose}
          courseTitle={'React Course'}
          deleteHandler={deleteLectureHandler}
          addLectureHandler={addLectureHandler}
        />
      </Box>
      <Sidebar />
    </Grid>
  );
};

export default AdminCourses;

const Row = ({ item, courseDetailsHandler, deleteHandler }) => {
  return (
    <Tr>
      <Td>#{item._id}</Td>
      <Td>
        <Image src={item.poster.url} />
      </Td>
      <Td>{item.title}</Td>
      <Td textTransform={'uppercase'}>{item.category}</Td>
      <Td>{item.createdBy}</Td>
      <Td isNumeric>{item.views}</Td>
      <Td isNumeric>{item.numOfVideos}</Td>

      <Td isNumeric>
        <HStack justifyContent={'flex-end'}>
          <Button
            onClick={() => courseDetailsHandler(item._id)}
            variant={'outline'}
            color={'purple.500'}
          >
            View Lectures
          </Button>

          <Button colorScheme="red" onClick={() => deleteHandler(item._id)}>
            <RiDeleteBin7Fill />
          </Button>
        </HStack>
      </Td>
    </Tr>
  );
};
