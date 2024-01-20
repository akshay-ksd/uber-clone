import { View, Text, TouchableOpacity, Animated } from 'react-native'
import React, { useRef } from 'react'
import styles from './style'
import MapView, { Marker } from 'react-native-maps';
import { useNavigation } from '@react-navigation/native';

const MapBox = () => {
    const navigation = useNavigation()
    const markerPosition = useRef(new Animated.ValueXY()).current;
   
    return (
        <View style={styles.container}>
            <MapView.Animated
                initialRegion={{
                    latitude: 10.129187462746684,
                    longitude: 76.45296811293329,
                    latitudeDelta: 0.0922,
                    longitudeDelta: 0.0421,
                }}
                style={{ width: "100%", height: "100%" }}
            >
                <Marker.Animated
                    // coordinate={{ latitude: 10.129187462746684, longitude: 76.452968112933294 }}
                    coordinate={markerPosition}
                    title="Marker Title"
                    description="Marker Description"
                />
            </MapView.Animated>
            <View style={styles.bottomButton}>
                <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("RideType")}>
                    <Text style={styles.title}>Done</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default MapBox