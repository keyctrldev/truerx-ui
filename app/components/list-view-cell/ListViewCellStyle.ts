import { StyleSheet } from "react-native";
import { Colors, horizontalScale, moderateScale, verticalScale } from '../../theme';

export const styles = StyleSheet.create({
    listContainer: {
        flexDirection: 'row',
        backgroundColor: Colors.lightSlateGray,
        padding: moderateScale(17),
        marginVertical: verticalScale(7)
    },
    headingContainer: {
        width: '70%',
    },
    statusTextStyle: {
        fontSize: moderateScale(16),
        textAlign: 'right'
    },
    statusContainer: {
        paddingLeft: horizontalScale(5),
        width: '30%',
        paddingTop: verticalScale(5)
    },
    listHeading: {
        color: Colors.white,
        fontWeight: '800',
        fontSize: moderateScale(18)
    },
    listDetails: {
        marginTop: verticalScale(15),
        color: Colors.white,
        fontSize: moderateScale(16),
        paddingRight: horizontalScale(30)
    }
});