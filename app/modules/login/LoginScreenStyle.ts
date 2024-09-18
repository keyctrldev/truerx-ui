// Define styles for the login screen component.

import { StyleSheet } from "react-native";
import { Colors, moderateScale, verticalScale } from "../../theme";

export const styles = StyleSheet.create({
    rootContainerStyle: {
        flex: 1,
        backgroundColor: Colors.darkBlue,
    },
    scrollViewContainerStyle: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    loginToExpStyle: {
        fontSize: moderateScale(22),
        color: Colors.white,
        fontWeight: '600',
        marginBottom: verticalScale(15)
    },
    customButtonStyle: {
        width: '87%',
        marginTop: verticalScale(30),
    }
})