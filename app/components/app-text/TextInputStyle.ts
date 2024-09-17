import { StyleSheet } from 'react-native';
import { Colors, moderateScale, width } from '../../theme';

export const styles = StyleSheet.create({
  container: {
    marginVertical: 10, // Vertical margin around the TextInput
  },
  input: {
    padding: moderateScale(10), 
    borderWidth: 1, 
    borderColor: Colors.black, 
    borderRadius: moderateScale(4), 
    fontSize: moderateScale(16), 
    color: Colors.black, 
    width: width * 0.6,
  },
});
