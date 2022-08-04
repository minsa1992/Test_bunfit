import React, {useEffect} from 'react';
import {Container, Text, Box, Center} from 'native-base';

const Home = () => {
  useEffect(() => {
    console.debug('Home');
  }, []);

  return (
    <Center flex="1">
      <Center
        //alignSelf="center"
        //justifyContent="center"
        bg="primary.500"
        _text={{fontSize: 'md', color: 'warmGray.50'}}>
        This is a home
      </Center>
    </Center>
  );
};

export default Home;
