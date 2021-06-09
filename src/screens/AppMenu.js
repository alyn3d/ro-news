import React, { useContext } from 'react';
import { View, Image, StyleSheet } from 'react-native';
import { Container, Content, List, ListItem, Text, Thumbnail } from 'native-base';
import { useNavigation } from '@react-navigation/native';

import ScreenHeader from '../components/ScreenHeader';

import { AppContext } from '../utils/AppContext';

import { images } from '../assets';
import { menu } from '../constant/menu';

const AppMenu = () => {
  const { sourceForNews, setSourceForNews } = useContext(AppContext);

  const navigation = useNavigation();

  const goToNews = (agency) => {
    setSourceForNews(agency);
    navigation.navigate('Home');
  }

  const goBack = () => {
    navigation.goBack();
  };

  const renderMenuItems = () => {
    menu.forEach(item => {
      return (
        <ListItem onPress={ () => goToNews(`${item.source}`) }>
          <Thumbnail source={`images.${item.source}`} />
          <Text style={styles.item}>{item.name}</Text>
        </ListItem>
      )
    });
  }

  return (
    <Container>
      <ScreenHeader title={'Meniu'} icon={'chevron-down'} onPress={goBack} />
      <Content scrollEnabled={true}>
        <View style={styles.logo}>
          <Image source={images.menuLogo} resizeMode="contain" style={styles.logoImage} />
        </View>
        <List>
          {menu.map((item, index) => (
            <ListItem key={index} onPress={ () => goToNews(item.source) }>
              <Thumbnail source={images.[item.source]} />
              <Text style={styles.item}>{item.name}</Text>
            </ListItem>
          ))}
        </List>
      </Content>
    </Container>
  );
};

export default AppMenu;

const styles = StyleSheet.create({
  logo: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    margin: 0,
  },
  logoImage: {
    width: '100%',
    height: 135,
  },
  item: {
    paddingLeft: 10
  }
});