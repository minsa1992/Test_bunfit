import React, {useEffect} from 'react';
import {Container, Text, Center, Box} from 'native-base';

const Calendar = () => {
  useEffect(() => {
    console.debug('Calendar');
  }, []);

  return (
    <Box flex="1" alignSelf="center" justifyContent="center">
      <Center
        //alignSelf="center"
        //justifyContent="center"
        bg="primary.500"
        _text={{fontSize: 'md', color: 'warmGray.50'}}>
        This is a Calendar
      </Center>
    </Box>
  );
};

export default Calendar;
