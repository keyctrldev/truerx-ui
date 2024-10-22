import React from 'react';
import { View } from 'react-native';

import { ListViewCell } from '../../../components';
import { StackNavigationProp } from '@react-navigation/stack';
import { ParamListBase, useNavigation } from '@react-navigation/native';
import CustomBackButton from '../../../components/custom-back-button/CustomBackButton';

const ListViewCellScreen = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  const handleBackPress = () => {
    navigation.goBack();
  };

  return (
    <View>
      <CustomBackButton onBackPress={handleBackPress} />
      <ListViewCell Description="23" status="Online" typeOfConsultance="Demo233" />
    </View>
  );
};

export default ListViewCellScreen;
