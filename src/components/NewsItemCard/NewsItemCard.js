import React from 'react';
import { TouchableOpacity, Image } from 'react-native';
import { Body, Left, Card, CardItem, Thumbnail, Text } from 'native-base';
import ReactHtmlParser from 'react-html-parser';

const NewsItemCard = ({onPress, logo, title, from, newsImage, newsText}) => {
  const bottomCardText = newsText.trim();

  return (
    <TouchableOpacity onPress={onPress}>
      <Card>
        <CardItem>
          <Left>
            <Thumbnail square source={logo} />
            <Body>
              <Text>{title}</Text>
              <Text note>{from}</Text>
            </Body>
          </Left>
        </CardItem>
        <CardItem cardBody>
          <Image source={{uri: newsImage}} style={{height: 200, width: null, flex: 1}} />
        </CardItem>
        {
          newsText &&
          <CardItem>
            <Body>
              <Text note>{ReactHtmlParser(bottomCardText)}</Text>
            </Body>
          </CardItem>
        }        
      </Card>
    </TouchableOpacity>
  );
};

export default NewsItemCard;