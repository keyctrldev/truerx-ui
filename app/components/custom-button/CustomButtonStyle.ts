import { StyleSheet } from 'react-native';
import { Colors, moderateScale, verticalScale } from '../../theme';

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.lightSlateGray,
    justifyContent: 'center',
    alignItems: 'center',
    width: '60%',
  },
  label: {
    color: Colors.white,
    fontSize: moderateScale(16),
    paddingVertical: verticalScale(12),
  },
});

export default styles;
