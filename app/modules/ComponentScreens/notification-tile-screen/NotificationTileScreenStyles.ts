import { StyleSheet } from 'react-native';
import { Colors } from '../../../theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconAdditionalStyles: {
    tintColor: Colors.red,
  },
  additionalStyle: {
    backgroundColor: Colors.cyan,
  },
});
