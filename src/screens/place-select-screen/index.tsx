
import { View, Text } from 'react-native';
import React from 'react';
import styles from './styles';
import Header from './molecule/header/header';
import MapBox from './organizer/map-box/map-box';
const PlaceSelectScreen = () => {
  return (
    <View style={styles.container}>
      <Header/>
      <MapBox/>
    </View>
  );
};

export default PlaceSelectScreen;
