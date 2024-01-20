import { View, Text, Image } from 'react-native'
import React from 'react'
import styles from './style'

const Suggestion = () => {
  const SingleBox = ({ title, promo }: any) => {
    return (
      <View style={styles.singleContainer}>
        {
          promo && (
            <View style={styles.promo}>
              <Text style={styles.promoText}>Promo</Text>
            </View>
          )
        }

        <View style={styles.singleBox}>
          <Image source={require("../../../../assets/icon/car.png")} style={styles.icon} />
        </View>
        <Text style={styles.singleTitle}>{title}</Text>
      </View>

    )
  }
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.suggestionText}>Suggestions</Text>
        <Text style={styles.seeAll}>See all</Text>
      </View>
      <View style={styles.boxRow}>
        <SingleBox title={"Rentals"} />
        <SingleBox title={"Trip"} promo={true}/>
        <SingleBox title={"Intercity"} />
        <SingleBox title={"Reserve"} promo={true}/>
      </View>
    </View>
  )
}

export default Suggestion