import { StyleSheet } from 'react-native';
import React, { useState } from 'react';
import { ParamListBase, useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { CustomBackButton, CustomButton, CustomFilterModal, SafeAreaContainer } from '../../../components';

const CustomFilterModalScreen = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();
  const [isOpenModal, setIsOpenModal] = useState<boolean>(false);

  const handleBackPress = () => {
    navigation.goBack();
  };
  const isHideModal = () => {
    setIsOpenModal(false);
  };
  const openModal = () => {
    setIsOpenModal(true);
  };

  return (
    <SafeAreaContainer>
      <CustomBackButton onBackPress={handleBackPress} />
      <CustomFilterModal isVisible={isOpenModal} onClose={isHideModal} onDonePress={isHideModal} />
      <CustomButton title="Show Modal" onPress={openModal} style={{ alignSelf: 'center' }} />
    </SafeAreaContainer>
  );
};

export default CustomFilterModalScreen;

const styles = StyleSheet.create({});
