import React, { ReactNode } from 'react';
import { View, Platform, StatusBar, ViewStyle } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Colors } from '../../theme';
import { styles } from './SafeAreaContainerStyle';

interface SafeAreaContainerProps {
  children: ReactNode;
  style?: ViewStyle;
}

const SafeAreaContainer: React.FC<SafeAreaContainerProps> = ({ children, style }) => {
  return (
    <SafeAreaView style={styles.safeArea} edges={['top', 'left', 'right']}>
      <View style={[styles.container, style]}>
        {Platform.OS === 'android' && <StatusBar barStyle="dark-content" backgroundColor={Colors.white} />}
        {children}
      </View>
    </SafeAreaView>
  );
};
export default SafeAreaContainer;
