import React, { memo, useState } from 'react';
import { Text, View } from 'react-native';

import Modal from 'react-native-modal';

import { Colors } from '../../theme';
import { CityZipModalProps } from '../../types';
import { styles } from './CityZipCodeModalStyles';
import CustomButton from '../custom-button/CustomButton';
import { cityZipCodeModalComponent } from '../../constants';
import CustomTextInput from '../custom-text-input/CustomTextInput';

const CityZipCodeModal = (props: CityZipModalProps) => {
  const [cityText, setCityText] = useState<string>('');

  const handleOnDonePress = () => {
    props.onDonePress(cityText);
    props.onClose();
  };

  return (
    <Modal
      statusBarTranslucent={true}
      isVisible={props.isVisible}
      onBackButtonPress={props.onClose}
      onBackdropPress={props.onClose}>
      <View style={styles.modalContainer}>
        <Text style={styles.titleTextStyle}>{cityZipCodeModalComponent.enterCityZipCode}</Text>
        <CustomTextInput
          placeholder={cityZipCodeModalComponent.placeHolderText}
          placeholderTextColor={Colors.overlayDark}
          value={cityText}
          onChangeText={setCityText}
          error=""
          touched={false}
          secureTextEntry={false}
          style={styles.textInputContainerStyle}
        />
        <CustomButton title={cityZipCodeModalComponent.done} onPress={handleOnDonePress} style={styles.buttonStyle} />
        <CustomButton
          title={cityZipCodeModalComponent.cancel}
          onPress={props.onClose}
          style={styles.cancelBtnContainer}
          titleTextStyle={styles.cancelTextStyle}
        />
      </View>
    </Modal>
  );
};

export default memo(CityZipCodeModal);
