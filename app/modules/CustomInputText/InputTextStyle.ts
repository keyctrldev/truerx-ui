import { StyleSheet } from "react-native";
import { Colors, horizontalScale, verticalScale } from "../../theme";


export const styles = StyleSheet.create({
    containerStyle: {
        backgroundColor: Colors.gray
    },
    textInput: {
        gap:verticalScale(10),
        paddingTop:verticalScale(10),
        paddingHorizontal:horizontalScale(20),
    },
    contain:{
        marginVertical:verticalScale(20)
    },
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: Colors.white,
      },
 
})