import * as rssParser from 'react-native-rss-parser';
import axios from 'axios';

export const getRss = async (url) => {
  return await axios.get(url, { responseType: 'text' })
  .then(async res => {
    const parsedFeed = await rssParser.parse(res.data);
    return parsedFeed;
  })
  .catch((err) => {
    return err;
  });
};