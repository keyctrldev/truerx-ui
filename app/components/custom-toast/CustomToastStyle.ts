import { StyleSheet } from "react-native";
import { Colors, horizontalScale, moderateScale, verticalScale, width } from "../../theme";

export const styles = StyleSheet.create({
    toastContainer: {
        position: "absolute",
        top: verticalScale(5),
        width: width - horizontalScale(20),
        marginHorizontal: horizontalScale(10),
        height: verticalScale(70),
        alignItems: "center",
        backgroundColor: Colors.white,
        elevation: moderateScale(5),
        shadowColor: Colors.black,
        shadowOpacity: 0.5,
        zIndex: 1000,
        flexDirection: "row",
        borderRadius: moderateScale(8),
        overflow: "hidden",
    },
    typeText: {
        color: Colors.black,
        textAlign: "left",
        fontWeight: '700',
        marginLeft: horizontalScale(15),
        fontSize: moderateScale(15),
    },
    toastText: {
        color: Colors.black,
        textAlign: "left",
        fontWeight: '400',
        letterSpacing: 0.5,
        marginLeft: horizontalScale(15),
        marginTop: verticalScale(3),
        fontSize: moderateScale(15),
    },
    sideBar: {
        width: horizontalScale(5),
        height: "100%",
        borderRadius: moderateScale(10),
    },
});