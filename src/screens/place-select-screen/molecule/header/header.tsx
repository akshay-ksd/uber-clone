import { View, Text, TouchableOpacity, FlatList, TextInput } from 'react-native'
import React from 'react'
import styles from './style'
import Icons from "react-native-vector-icons/Ionicons"
import { useNavigation } from '@react-navigation/native'
const Header = () => {
    const navigation = useNavigation()
    const data = [
        { icon_name: "time", title: "Pickup now" },
        { icon_name: "arrow-forward-outline", title: "One way" },
        { icon_name: "person", title: "For you" }
    ]

    const Input = ({placeholder}:any) => {
        return(
            <View style={styles.inputContainer} >
                <TextInput placeholder={placeholder} style={styles.textInput}/>
            </View>
        )
    }
   
    return (
        <View style={styles.container}>
            <View style={styles.head}>
                <TouchableOpacity onPress={()=>navigation.goBack()}>
                    <Icons name={"arrow-back"} color={"black"} size={28} />
                </TouchableOpacity>
                <Text style={styles.title}>Plan your ride</Text>
            </View>
            <View style={styles.listView}>
                {
                    data.map((item, index) => (
                        <View style={styles.itemContainer}>
                            <Icons name={item?.icon_name} size={18} color={"black"} />
                            <View style={{ width: 10 }} />
                            <Text style={styles.itemText}>{item?.title}</Text>
                            <View style={{ width: 10 }} />
                            <Icons name={"chevron-down"} size={13} color={"black"} />
                        </View>
                    ))
                }
            </View>

          
            <View style={styles.placeInputContainer}>
                <View style={styles.customIconView}>
                    <View style={styles.round}/>
                    <View style={styles.line}/>
                    <View style={styles.square}/>
                </View>
                <View style={styles.inputView}>
                   <Input placeholder={"Pickup address"}/>
                   <Input placeholder={"Drop address"}/>
                </View>
                <TouchableOpacity style={styles.addButton}>
                    <Icons name={"add-sharp"} size={20} color={"black"}/>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default Header