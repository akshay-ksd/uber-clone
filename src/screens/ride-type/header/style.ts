import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        width: "100%",
        height: "10%",
        justifyContent: "center",
        paddingLeft: "5%",
        position: "absolute",
        top: 0,
        zIndex: 1
    },
    backButton: {
        width: 45,
        height: 45,
        borderRadius: 45,
        backgroundColor: "white",
        alignItems: "center",
        justifyContent: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
    }
});

export default styles