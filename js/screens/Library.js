import React, {useEffect} from 'react';
import {Container, Text, Center} from 'native-base';

const Library = () => {
  useEffect(() => {
    console.debug('Library');
  }, []);

  return (
    <Center flex="1">
      <Center
        //alignSelf="center"
        //justifyContent="center"
        bg="primary.500"
        _text={{fontSize: 'md', color: 'warmGray.50'}}>
        This is a Library
      </Center>
    </Center>
  );
};

export default Library;
