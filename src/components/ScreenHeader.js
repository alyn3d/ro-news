import React from 'react';
import { Header, Title, Body, Left, Right, Icon, Button } from 'native-base';

const ScreenHeader = ({ icon, onPress, title, goToSettings }) => {
  return (
    <Header>
      <Left>
        <Button transparent onPress={onPress}>
          <Icon name={icon} />
        </Button>
      </Left>
      <Body>
        <Title>{title}</Title>
      </Body>
      <Right>
        {
          goToSettings &&
          <Button transparent onPress={goToSettings}>
            <Icon name={'settings'} />
          </Button>
        }                
      </Right>
    </Header>
  );
};

export default ScreenHeader;