import { Dimensions, StyleSheet } from "react-native";
import { medium } from "../../../components/constants/fonts";
const {height} = Dimensions.get("window");

const styles = StyleSheet.create({
    container:{
        width:"100%",
        height:height/8,
        alignItems:"center",
        justifyContent:"center",
    },
    box:{
        height:"90%",
        width:"95%",
        borderRadius:20,
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"space-between",
        paddingHorizontal:"2%"
    },
    icon:{
        width:120,
        height:70
    },
    description:{
        width:"40%",
        justifyContent:"center",
        height:"100%",
    },
    title:{
        fontSize:16,
        fontFamily:medium,
        color:"black"
    },
    sub:{
        fontSize:12,
        fontFamily:medium,
        color:"gray"
    }
});

export default styles