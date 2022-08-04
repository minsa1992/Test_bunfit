import React, {useEffect} from 'react';
import {View, Text} from 'react-native';
import {NativeBaseProvider, extendTheme} from 'native-base';
import {
  Actions,
  Drawer,
  Router,
  Overlay,
  Modal,
  Lightbox,
  Stack,
  Reducer,
  Scene,
} from 'react-native-router-flux';
import {Home, Calendar, Library, MyPage} from 'screens';
import {Tabbar} from 'elements';

let style = getStyle();

const navigator = Actions.create(
  <Stack>
    <Scene key="Tabbar" tabs={true} hideNavBar>
      <Scene key="Home" component={Home} initial hideNavBar />
      <Scene key="Calendar" component={Calendar} hideNavBar />
      <Scene key="Library" component={Library} hideNavBar />
      <Scene key="MyPage" component={MyPage} hideNavBar />
    </Scene>
  </Stack>,
);

const App = () => {
  useEffect(() => {
    console.debug('Rnrf');
  }, []);

  // const theme = extendTheme({
  //   primary: {},
  // });

  return (
    <NativeBaseProvider>
      <Router navigator={navigator} />
    </NativeBaseProvider>
  );
};

function getStyle() {
  return {
    tabbar: {
      height: 50,
      borderTopColor: 'darkgrey',
      borderTopWidth: 1,
      opacity: 0.98,
      justifyContent: 'space-between',
    },
  };
}

export default App;
