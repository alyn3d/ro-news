import React, { useEffect, useContext, useState } from 'react';
import { FlatList, RefreshControl } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import sanitizeHtml from 'sanitize-html';

import Loader from '../components/Loader';
import ScreenHeader from '../components/ScreenHeader';
import NewsItemCard from '../components/NewsItemCard/NewsItemCard';

import { getRss } from '../api/rssParser';
import { images } from '../assets';
import newssources from '../constant/newsSources';

import { AppContext } from '../utils/AppContext';

const Home = ({ navigation }) => {
  const { sourceForNews, setSourceForNews, settingDefaultSource } = useContext(AppContext);

  const [isLoading, setLoading] = useState(true);
  const [isRefreshing, setRefreshing] = useState(false);
  const [news, setNews] = useState(settingDefaultSource);
  const [newsFrom, setNewsFrom] = useState();

  const loadNews = async () => {
    await getRss(newssources[sourceForNews])
      .then(res => {
        setNews(res);
        setLoading(false);
        setRefreshing(false);
      })
      .catch(err => console.log(err));
  };

  const onRefresh = () => {
    setRefreshing(true);
    loadNews();
  };

  useEffect(async () => {
    const defaultSource = await AsyncStorage.getItem('default');
    setSourceForNews(defaultSource);
  }, []);

  useEffect(() => {
    loadNews();
  }, [sourceForNews]);

  const goToMenu = () => {
    navigation.navigate('Menu');
  };
  const goToReadNews = (newsUrl) => {
    navigation.push('ReadNews', { newsUrl });
  };
  const goToSettings = () => {
    navigation.navigate('Settings');
  };

  const renderLoading = () => {
    if (isLoading) {
      return <Loader />;
    } else {
      return
    }
  }

  const getNewsAvatar = () => {
    switch(sourceForNews) {
      case 'protv':
        return images.protv;
      case 'mediafax':
        return images.mediafax;
      case 'hotnews':
        return images.hotnews;
      case 'jurnalul':
        return images.jurnalul;
      case 'tvr':
        return images.tvr;
      case 'realitatea':
        return images.realitatea;
    }
  }

  const renderNewsCard = ({ item }) => {
    switch(sourceForNews) {
      case 'hotnews':
        return (
          <NewsItemCard 
            logo={getNewsAvatar()}
            from={news?.image.title}
            title={sanitizeHtml(item.title)}
            newsImage={''}
            newsText={sanitizeHtml(item.description, {allowedTags: []})}
            onPress={() => goToReadNews(item.id)}
          />
        );
      default:
        return (
          <NewsItemCard 
            logo={getNewsAvatar()}
            from={news?.image.title}
            title={item.title}
            newsImage={item.enclosures[0].url}
            newsText={sanitizeHtml(item.description, {allowedTags: []})}
            onPress={() => goToReadNews(item.id)}
          />
        );
    }
  };

  return (
      <>
        <ScreenHeader onPress={goToMenu} icon='menu' title='RO News' goToSettings={goToSettings} />
        <FlatList 
            data={news?.items}
            keyExtractor={(item, index) => index.toString()}
            maxToRenderPerBatch={10}
            renderItem={renderNewsCard}
            ListEmptyComponent={renderLoading()}
            refreshControl={<RefreshControl
                onRefresh={onRefresh}
                refreshing={isRefreshing}
            />}
        />
      </>
  );
};

export default Home;