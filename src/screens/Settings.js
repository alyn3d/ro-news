import React, { useContext } from 'react';
import { Container, Button, Text, Content } from 'native-base';
import { useNavigation } from '@react-navigation/native';

import ScreenHeader from '../components/ScreenHeader';

import { AppContext } from '../utils/AppContext';

const Settings = () => {
  const {  settingDefaultSource, settingsSetDefaultNewsSource } = useContext(AppContext);
  const navigation = useNavigation();

  const goBack = () => {
    navigation.goBack();
  };

  return (
    <Container>
      <ScreenHeader icon='chevron-back' onPress={goBack}/>
      <Content padder>
        <Text>Ce sursa de stiri vrei sa fie incarcata atunci cand deschizi aplicatia?</Text>
        <Button onPress={() => settingsSetDefaultNewsSource('protv')} style={{marginBottom:10}}>
          <Text>Pro Tv</Text>
        </Button>
        <Button onPress={() => settingsSetDefaultNewsSource('mediafax')} style={{marginBottom:10}}>
          <Text>Mediafax</Text>
        </Button>
        <Button onPress={() => settingsSetDefaultNewsSource('realitatea')} style={{marginBottom:10}}>
          <Text>Realitatea</Text>
        </Button>
      </Content>      
    </Container>
  );
};

export default Settings;