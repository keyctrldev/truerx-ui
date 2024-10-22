import React from 'react';
import { Alert, View } from 'react-native';

import { styles } from './SvgScreenStyles';
import { MailIcon } from '../../../assets/svgs';
import { SVGIcon } from '../../../components/common';
import { StackNavigationProp } from '@react-navigation/stack';
import { ParamListBase, useNavigation } from '@react-navigation/native';
import { CustomBackButton, SafeAreaContainer } from '../../../components';

const SvgScreen = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  const handleBackPress = () => {
    navigation.goBack();
  };

  return (
    <SafeAreaContainer>
      <CustomBackButton onBackPress={handleBackPress} />
      <View style={styles.container}>
        <SVGIcon
          component={<MailIcon />}
          onPress={() => {
            Alert.alert('SVG pressed!!');
          }}
        />
      </View>
    </SafeAreaContainer>
  );
};

export default SvgScreen;
