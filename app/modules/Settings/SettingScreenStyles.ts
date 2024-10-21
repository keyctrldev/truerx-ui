import { StyleSheet } from 'react-native';
import { Colors, horizontalScale } from '../../theme';

export const styles = StyleSheet.create({
  containerStyle: {
    flex: 1,
    backgroundColor: Colors.skyBlue,
  },

  body: {
    flex: 1,
    alignContent: 'center',
    justifyContent: 'center',
  },

  label: {
    textAlign: 'center',
    color: Colors.white,
    paddingHorizontal: horizontalScale(10),
  },
});
