import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import styles from './style'
import Icons from "react-native-vector-icons/Ionicons"
import { PanGestureHandler } from 'react-native-gesture-handler';
import Animated, {
    useSharedValue,
    withSpring,
    useAnimatedStyle,
    useAnimatedGestureHandler,
} from 'react-native-reanimated';
import Options from '../options/options';

const Footer = () => {
    const options = [
        {title:"Uber Go",sub:"1:19pm . 2 min away",price:"₹259"},
        {title:"Uber Go Sedan",sub:"1:19pm . 2 min away",price:"₹298"},
        {title:"UberXL",sub:"1:19pm . 2 min away",price:"₹400"},
        {title:"Uber Premier",sub:"1:19pm . 2 min away",price:"₹325"}
    ]
    const x = useSharedValue(0);

    const gestureHandler = useAnimatedGestureHandler({
        onStart: (_, ctx) => {
            ctx.startY = x.value;
        },
        onActive: (event, ctx) => {
            if((ctx.startY + event.translationY)>0){
                if((ctx.startY + event.translationY) < 400)
                x.value = withSpring(ctx.startY + event.translationY);
            }
        },
        onEnd: (_) => {
            // x.value = withSpring(0);
        },
    });

    const animatedStyle = useAnimatedStyle(() => {
        return {
            transform: [
                {
                    translateY: x.value,
                },
            ],
        };
    });
    return (
        <View style={styles.container}>
            <PanGestureHandler onGestureEvent={gestureHandler}>
                <Animated.View style={[styles.sheet,animatedStyle]}>
                    <View style={styles.dragger}/>
                    <Text style={styles.header}>Choose a trip</Text>
                    {
                        options.map((item)=>(
                            <Options item={item}/>
                        ))
                    }
                </Animated.View>
            </PanGestureHandler>

            <View style={styles.doneButton}>
                <View style={styles.cashMode}>
                    <View style={styles.cashIcon}>
                        <Icons name={"cash"} color={"#black"} size={20} />
                        <Text style={styles.cashModeText}>Cash</Text>
                    </View>
                    <Icons name={"chevron-forward-outline"} color={"#black"} size={20} />
                </View>
                <View style={styles.buttonView}>
                    <TouchableOpacity style={styles.button}>
                        <Text style={styles.buttonText}>Choose Uber Go</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.timer}>
                        <Icons name={"car"} color={"black"} size={30} />
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

export default Footer