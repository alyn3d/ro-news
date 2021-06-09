import React from 'react';
import { WebView } from 'react-native-webview';
import { useNavigation } from '@react-navigation/native';

import Loader from '../components/Loader';
import ScreenHeader from '../components/ScreenHeader';

const ReadNews = ({ route }) => {
  const { newsUrl } = route.params;
  const navigation = useNavigation();

  const goBack = () => {
    navigation.goBack();
  };

  return (
    <>
      <ScreenHeader icon={'chevron-back'} onPress={goBack} />
      <WebView source={{ uri: newsUrl }} startInLoadingState={true} renderLoading={Loader} />
    </>
  );
};

export default ReadNews;
