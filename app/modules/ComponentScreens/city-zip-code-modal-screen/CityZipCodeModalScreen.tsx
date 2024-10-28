import React, { useState } from 'react';

import { CustomBackButton, CustomButton, SafeAreaContainer } from '../../../components';

import { StackNavigationProp } from '@react-navigation/stack';
import { ParamListBase, useNavigation } from '@react-navigation/native';
import CityZipCodeModal from '../../../components/city-zipcode-modal/CityZipCodeModal';

const CityZipCodeModalScreen = () => {
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
      <CityZipCodeModal isVisible={isOpenModal} onClose={isHideModal} onDonePress={isHideModal} />
      <CustomButton title="Show Modal" onPress={openModal} style={{ alignSelf: 'center' }} />
    </SafeAreaContainer>
  );
};

export default CityZipCodeModalScreen;
