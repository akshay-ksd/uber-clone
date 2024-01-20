import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container:{
        width:"100%",
        height:75,
        alignItems:"center",
        justifyContent:"center",
        marginTop:"3%"
    },
    search:{
        width:"95%",
        height:"90%",
        backgroundColor:"#f2f2f2",
        borderRadius:50,
        paddingHorizontal:"5%",
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"space-between"    
    },
    iconBox:{
        height:"100%",
        width:"50%",
        flexDirection:"row",
        alignItems:"center",
    },
    searchText:{
        fontSize:20,
        fontFamily:"Poppins-Medium",
        color:"gray",
        marginLeft:"5%"
    },
    timeView:{
        width:130,
        height:"65%",
        borderRadius:50,
        backgroundColor:"white",
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"space-evenly"
    },
    nowText:{
        fontSize:12,
        fontFamily:"Poppins-Medium",
        color:"black"
    }
});

export default styles