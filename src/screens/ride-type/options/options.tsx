import { View, Text, Image } from 'react-native'
import React, { FC } from 'react'
import styles from './style'

const Options:FC<any> = ({item}) => {
    console.log("sjj",item)
  return (
    <View style={styles.container}>
      <View style={styles.box}>
            <Image source={require("../../../assets/icon/car.png")} style={styles.icon}/>
            <View style={styles.description}>
                <Text style={styles.title}>{item?.title}</Text>
                <Text style={styles.sub}>{item?.sub}</Text>
            </View>
            <Text style={styles.title}>{item?.price}</Text>
      </View>
    </View>
  )
}

export default Options