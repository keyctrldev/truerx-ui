import React, { useState } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';

import { StackNavigationProp } from '@react-navigation/stack';
import { ParamListBase, useNavigation } from '@react-navigation/native';

import { horizontalScale } from '../../../theme';
import { styles } from './LinearProgressBarScreenStyles';
import { useGlobalStyles } from '../../../utils/GlobalStyles';
import { CustomBackButton, CustomLinearProgressBar, SafeAreaContainer } from '../../../components';

const LinearProgressBarScreen = () => {
  const [progress, setProgress] = useState<number>(0.1);
  const GlobalStyles = useGlobalStyles();
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  const handleBackPress = () => {
    navigation.goBack();
  };

  const handleProgress = (type: 'increase' | 'decrease') => {
    setProgress(prev => (type == 'increase' ? Math.min(prev + 0.1, 1) : Math.max(prev - 0.1, 0)));
  };

  return (
    <SafeAreaContainer>
      <CustomBackButton onBackPress={handleBackPress} />
      <View style={styles.progressBarScreenContainer}>
        <CustomLinearProgressBar progress={progress} width={horizontalScale(250)} />
        <View style={[GlobalStyles.rowSpaceBetweenContainer, styles.rowBtnContainer]}>
          <TouchableOpacity onPress={() => handleProgress('decrease')} style={styles.buttonContainer}>
            <Text style={styles.btnTextStyle}>Decrease</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => handleProgress('increase')}
            style={[styles.buttonContainer, styles.decreaseBtnContainer]}>
            <Text style={styles.btnTextStyle}>Increase</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaContainer>
  );
};

export default LinearProgressBarScreen;
