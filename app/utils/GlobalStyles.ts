import { StyleSheet } from 'react-native';
import { Colors, horizontalScale, moderateScale, verticalScale } from '../theme';

export const useGlobalStyles = () => {
  return StyleSheet.create({
    rowContainer: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    centerContainer: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    commonIconStyle: {
      width: horizontalScale(18),
      height: verticalScale(18),
      resizeMode: 'contain',
    },
    mainContainerStyle: {
      backgroundColor: Colors.secondaryBackground,
      paddingHorizontal: moderateScale(10),
    },
    rowSpaceBetweenContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
    },
  });
};
