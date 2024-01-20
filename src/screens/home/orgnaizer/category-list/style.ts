import { Dimensions, StyleSheet } from "react-native";
const {height,width} = Dimensions.get("window");

const styles = StyleSheet.create({
    container:{
        width:"100%",
        height:height/3.2,
        marginTop:"5%",
    },
    header:{
        width:"100%",
        height:60,
        justifyContent:"center",
        paddingHorizontal:"5%"
    },
    title:{
        fontSize:18,
        fontFamily:"Poppins-SemiBold",
        color:"black"
    },
    singleRender:{
        width:width/1.5,
        height:height/4.5,
        alignItems:"center",
        // justifyContent:"center"
    },
    image:{
        width:"90%",
        height:"70%",
        borderRadius:10,
        backgroundColor:"gray"
    },
    mainTitleView:{
        width:"100%",
        flexDirection:"row",
        alignItems:"center",
        paddingHorizontal:"5%",
        marginTop:"5%"
    },
    mainTitle:{
        fontSize:15,
        fontFamily:"Poppins-Medium"
    },
    subtitle:{
        fontSize:14,
        fontFamily:"Poppins-Regular"
    }
});

export default styles