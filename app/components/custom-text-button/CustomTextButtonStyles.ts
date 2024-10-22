import { StyleSheet } from "react-native";

import { Colors, horizontalScale, moderateScale } from "../../theme";

export const styles = StyleSheet.create({
    container: {
        backgroundColor: Colors.transparent,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent:'center',
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