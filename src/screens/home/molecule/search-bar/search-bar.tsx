import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import styles from './style'
import Icons from "react-native-vector-icons/Ionicons"
import { useNavigation } from '@react-navigation/native'
const SearchBar = () => {
    const navigation:any = useNavigation();
    
    return (
        <TouchableOpacity style={styles.container} onPress={()=>navigation.navigate("PlaceSelectScreen")}>
            <View style={styles.search}>
                <View style={styles.iconBox}>
                    <Icons name={"search"} size={30} color={"black"} />
                    <Text style={styles.searchText}>Where to?</Text>
                </View>
                <View style={styles.timeView}>
                    <Icons name={"time"} size={20} color={"black"} />
                    <Text style={styles.nowText}>Now</Text>
                    <Icons name={"chevron-down"} size={22} color={"black"} />
                </View>
            </View>
        </TouchableOpacity>
    )
}

export default SearchBar