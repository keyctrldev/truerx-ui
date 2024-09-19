// Define styles for the login screen component.

import { StyleSheet } from "react-native";
import { Colors, moderateScale, verticalScale } from "../../theme";

export const styles = StyleSheet.create({
    rootContainerStyle: {
        flex: 1,
        backgroundColor: Colors.skyBlue,
    },
    scrollViewContainerStyle: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    demoHeadingStyle: {
        fontSize: moderateScale(30),
        color: Colors.white,
        fontWeight: '600',
        marginBottom: verticalScale(15)
    },
    loginToDemoTextStyle: {
        fontSize: moderateScale(22),
        color: Colors.white,
        fontWeight: '600',
        marginBottom: verticalScale(30)
    },
    nameInputStyle: {
        marginBottom: verticalScale(30)
    },
    customButtonStyle: {
        width: '87%',
        marginTop: verticalScale(30),
    },
    buttonLabelStyle: {
        fontSize: moderateScale(18),
        fontWeight: '600'
    }
})