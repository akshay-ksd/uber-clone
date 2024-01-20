import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import styles from './style'
import Icons from "react-native-vector-icons/Ionicons"
import { useNavigation } from '@react-navigation/native'
const Header = () => {
    const navigation = useNavigation()
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.backButton} onPress={()=>navigation.goBack()}>
            <Icons name={"arrow-back"} color={"black"} size={26}/>
      </TouchableOpacity>
    </View>
  )
}

export default Header