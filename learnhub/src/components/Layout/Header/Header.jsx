import {
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  HStack,
  VStack,
  useDisclosure,
} from '@chakra-ui/react';
import React, { Fragment } from 'react';

// importing icons
import { RiDashboardFill, RiLogoutBoxLine, RiMenu5Fill } from 'react-icons/ri';
import { Link } from 'react-router-dom';

// inner component
const LinkButton = ({ url = '/', title = 'Home', onClose }) => (
  <Link onClick={onClose} to={url}>
    <Button variant={'ghost'}>{title}</Button>
  </Link>
);

const isAuthenticated = false;
const user = {
  role: 'admin',
};

const Header = () => {
  const { isOpen, onClose, onOpen } = useDisclosure();

  const logoutHandler = () => {
    console.log('Logout Successfully...');
    onClose();
  };

  return (
    <Fragment>
      <Button
        colorScheme="yellow"
        width={'12'}
        height={'12'}
        rounded={'full'}
        position={'fixed'}
        top={'6'}
        left={'6'}
        onClick={onOpen}
      >
        <RiMenu5Fill />
      </Button>

      <Drawer placement="left" isOpen={isOpen} onClose={onClose}>
        <DrawerOverlay />

        <DrawerContent>
          <DrawerCloseButton />

          <DrawerHeader borderBottomWidth={'1px'}> LEARN HUB </DrawerHeader>

          <DrawerBody>
            <VStack alignItems={'flex-start'} spacing={'4'}>
              <LinkButton onClose={onClose} url="/" title="Home" />
              <LinkButton onClose={onClose} url="/courses" title="Brose All Courses" />
              <LinkButton onClose={onClose} url="/request" title="Request a Course" />
              <LinkButton onClose={onClose} url="/contact" title="Contact Us" />
              <LinkButton onClose={onClose} url="/about" title="About" />
            </VStack>
            <HStack
              justifyContent={'space-evenly'}
              position={'absolute'}
              bottom={'2rem'}
              width={'80%'}
            >
              {isAuthenticated ? (
                <>
                  <VStack>
                    <HStack>
                      <Link onClick={onClose} to={'/profile'}>
                        <Button variant={'ghost'} colorScheme="yellow">
                          Profile
                        </Button>
                      </Link>
                      <Button variant={'ghost'} onClick={logoutHandler}>
                        <RiLogoutBoxLine style={{ margin: '4px' }} />
                        Logout
                      </Button>
                    </HStack>

                    {user && user.role === 'admin' && (
                      <Link onClick={onClose} to={'/admin/dashboard'}>
                        <Button colorScheme="purple" variant={'ghost'}>
                          <RiDashboardFill style={{ margin: '4px' }} />
                          Dashboard
                        </Button>
                      </Link>
                    )}
                  </VStack>
                </>
              ) : (
                <>
                  <Link onClick={onClose} to={'/login'}>
                    <Button colorScheme="yellow">Login</Button>
                  </Link>

                  <p>OR</p>

                  <Link onClick={onClose} to={'/signup'}>
                    <Button colorScheme="yellow">Sign Up</Button>
                  </Link>
                </>
              )}
            </HStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Fragment>
  );
};

export default Header;
