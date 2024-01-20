import { Dimensions, StyleSheet } from "react-native";
import { medium } from "../../../components/constants/fonts";
const { height } = Dimensions.get("window")
const styles = StyleSheet.create({
    container: {
        width: "100%",
        position: "absolute",
        bottom: 0,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        // padding:5,
    },
    doneButton: {
        width: "100%",
        height: height / 7,
        backgroundColor: "white",

    },
    cashMode: {
        width: "100%",
        height: "35%",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        paddingHorizontal: "2%"
    },
    cashIcon: {
        height: "100%",
        width: "20%",
        flexDirection: "row",
        alignItems: "center",
    },
    cashModeText: {
        fontSize: 14,
        fontFamily: medium,
        marginLeft: "10%"
    },
    buttonView: {
        width: "100%",
        flexGrow: 1,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        paddingHorizontal: "2%"
    },
    button: {
        width: "80%",
        height: "70%",
        backgroundColor: "black",
        borderRadius: 5,
        alignItems: "center",
        justifyContent: "center"
    },
    timer: {
        width: "18%",
        height: "70%",
        backgroundColor: "#f2f2f2",
        alignItems: "center",
        justifyContent: "center"
    },
    buttonText: {
        fontSize: 16,
        fontFamily: medium,
        color: "white"
    },
    sheet: {
        width: "100%",
        height: height / 1.6,
        backgroundColor: "white",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3,
        borderTopLeftRadius:20,
        borderTopRightRadius:20
    },
    dragger:{
        width:50,
        height:4,
        backgroundColor:"#f2f2f2",
        borderRadius:5,
        alignSelf:"center",
        marginTop:"2%"
    },
    driveBox:{
        width:"100%",
        height:100,
    },
    header:{
        fontSize:18,
        fontFamily:medium,
        color:"black",
        alignSelf:"center",
        top:"2%"
    }
});

export default styles