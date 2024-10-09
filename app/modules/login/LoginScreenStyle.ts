// Define styles for the login screen component.

import { StyleSheet } from "react-native";
import { Colors, globalMetrics, horizontalScale, moderateScale, verticalScale } from "../../theme";

export const styles = StyleSheet.create({
    rootContainerStyle: {
        flex: 1,
        backgroundColor: Colors.skyBlue,
    },
    scrollViewContainerStyle: {
        flex: 1,
        justifyContent: 'center',
        marginHorizontal: globalMetrics.isWeb ? horizontalScale(100) : 0,
        maxHeight: '100%',
        maxWidth: '100%'
    },
    demoHeadingStyle: {
        fontSize: moderateScale(30),
        color: Colors.white,
        fontWeight: '600',
        marginBottom: verticalScale(15),
        textAlign: 'center'
    },
    loginToDemoTextStyle: {
        fontSize: moderateScale(22),
        color: Colors.white,
        fontWeight: '600',
        marginBottom: verticalScale(30),
        textAlign: 'center'
    },
    nameInputStyle: {
        marginBottom: verticalScale(30)
    },
    inputWrapper: {
        alignItems: "center"
    },
    customButtonStyle: {
        width: '87%',
        alignSelf: 'center',
        marginTop: verticalScale(30),
    },
    buttonLabelStyle: {
        fontSize: moderateScale(18),
        fontWeight: '600'
    },
    horizontalViewStyle: {
        flexDirection: "row",
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: horizontalScale(22),
        marginVertical: verticalScale(15)
    },
    rememberUsrTextStyle: {
        fontSize: moderateScale(18),
        fontWeight: "500",
        letterSpacing: 0.5,
        color: Colors.white,
    },

})