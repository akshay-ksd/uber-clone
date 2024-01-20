import { View, Text, Image, FlatList } from 'react-native'
import React, { FC } from 'react'
import styles from './style'
import Icons from "react-native-vector-icons/Ionicons"

const CategoryList: FC<any> = ({ data }) => {

    const renderItem = ({ item, index }: any) => {
        console.log("item", item)

        return (
            <View style={styles.singleRender}>
                <Image source={{uri:item.image}} style={styles.image} />
                <View style={styles.mainTitleView}>
                    <Text style={styles.mainTitle}>Premium tips </Text>
                    <Icons name={"arrow-forward-outline"} size={14} color={"black"} />
                </View>
                <View style={[styles.mainTitleView, { marginTop: "3%" }]}>
                    <Text style={styles.subtitle}>Top-rated drivers, newer car</Text>
                </View>
            </View>
        )
    }
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.title}>{data.title}</Text>
            </View>
            <FlatList data={data.data}
                renderItem={renderItem}
                keyExtractor={(d, i) => i.toString()}
                horizontal
                showsHorizontalScrollIndicator={false}
            />
        </View>
    )
}

export default CategoryList