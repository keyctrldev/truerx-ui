
import { StyleSheet } from 'react-native';
import { Colors, moderateScale, verticalScale } from '../../theme';

const styles = StyleSheet.create({
    container: {
        backgroundColor: Colors.white60,
        justifyContent: 'center',
        alignItems: 'center',
    },
    lable: {
        color: Colors.black,
        fontSize: moderateScale(18),
        paddingVertical: verticalScale(15)
    },

});

export default styles;