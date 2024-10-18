import { StyleSheet } from 'react-native';
import { Colors, horizontalScale, moderateScale, verticalScale } from '../../theme';

export const styles = StyleSheet.create({
  containerStyle: {
    backgroundColor: Colors.gray,
  },
  textInput: {
    gap: verticalScale(10),
    paddingTop: verticalScale(10),
    paddingHorizontal: horizontalScale(20),
  },
  contain: {
    marginVertical: verticalScale(20),
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.white,
  },
  additionalContainerStyle: {
    shadowOffset: {
      width: 0,
      height: verticalScale(2),
    },
    shadowColor: Colors.black,
    elevation: 5,
    shadowOpacity: 0.2,
    shadowRadius: moderateScale(8),
  },
  avoidingView: {
    flex: 1,
  },
  textInputStyle: { borderColor: Colors.green },
});
