import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container:{
        width:"100%",
        height:"75%"
    },
    bottomButton:{
        width:"100%",
        height:"14%",
        position:"absolute",
        zIndex:1,
        bottom:0,
        alignItems:"center",
        justifyContent:"center"
    },
    button:{
        width:"95%",
        height:"80%",
        backgroundColor:"black",
        alignItems:"center",
        justifyContent:"center",
        borderRadius:10
    },
    title:{
        fontSize:17,
        fontFamily:"Poppins-Medium",
        color:"white"
    }
});

export default styles