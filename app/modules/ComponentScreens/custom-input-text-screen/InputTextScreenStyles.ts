import { StyleSheet } from 'react-native';
import { Colors, horizontalScale, verticalScale } from '../../../theme';

export const styles = StyleSheet.create({
  containerStyle: {
    backgroundColor: Colors.white,
    flex: 1,
  },
  textInput: {
    gap: verticalScale(10),
    paddingTop: verticalScale(10),
    paddingHorizontal: horizontalScale(20),
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.white,
  },
  additionalContainerStyle: {
    padding: 5,
    backgroundColor: 'green',
  },
  avoidingView: {
    flex: 1,
  },
  textInputStyle: { borderColor: Colors.green },
});
