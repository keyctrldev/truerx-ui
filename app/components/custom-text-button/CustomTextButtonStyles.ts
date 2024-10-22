import { StyleSheet } from "react-native";

import { Colors, horizontalScale, moderateScale, verticalScale } from "../../theme";

export const styles = StyleSheet.create({
    container: {
        backgroundColor: Colors.transparent,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent:'center',
        paddingVertical: verticalScale(20),
    },
    customText: {
        flex:1,
        textAlign: 'center',
        fontSize: moderateScale(16),
    },
    svgIconStyles: { 
        paddingHorizontal: horizontalScale(10) 
    }
})