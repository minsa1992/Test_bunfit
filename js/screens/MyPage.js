import React, {useEffect} from 'react';
import {Container, Text, Box, Center} from 'native-base';

const MyPage = () => {
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
        This is a MyPage
      </Center>
    </Center>
  );
};

export default MyPage;
