import { View, Text } from 'react-native'
import React from 'react'
import styles from './style'
import MapView from 'react-native-maps';
import Header from './header/header';
import Footer from './footer/footer';
const RideType = () => {
  return (
    <View style={styles.container}>
      <Header/>
      <MapView
        initialRegion={{
          latitude: 10.129187462746684,
          longitude: 76.45296811293329,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
        style={{ width: "100%", height: "100%" }}
      />
      <Footer/>
    </View>
  )
}

export default RideType