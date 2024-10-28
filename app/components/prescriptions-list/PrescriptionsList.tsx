import React, { memo } from 'react';
import { Image, View } from 'react-native';

import { SVGIcon } from '../common';
import { Images } from '../../assets';
import AppText from '../app-text/AppText';
import { PriceLabel } from '../../assets/svgs';
import { styles } from './PrescriptionsListStyles';
import { PrescriptionListProps } from '../../types';
import CustomButton from '../custom-button/CustomButton';

const PrescriptionList: React.FC<PrescriptionListProps> = props => {
  return (
    <View style={styles.prescriptionContainer}>
      <View style={styles.topInterface}>
        <View style={styles.content}>
          <AppText style={styles.darkContent}>{props.buyerName}</AppText>
          <AppText style={styles.lightContent}>{props.deliveryType}</AppText>
        </View>
        <Image source={props.buyerImage ? { uri: props.buyerImage } : Images.wb} style={styles.staticBuyerName} />
      </View>
      <View style={styles.separator} />
      <View style={styles.middleInterface}>
        <View style={styles.content}>
          <AppText style={styles.darkContent}>{'Total Price'}</AppText>
          <AppText style={styles.darkContent}>{props.drugName}</AppText>
          <AppText style={styles.lightContent}>
            {props.dosage}
            {'/'}
            {props.count}
          </AppText>
        </View>
        <View style={styles.labelView}>
          <AppText style={styles.priceText}>{props.totalPrice}</AppText>
          <View style={styles.labelStyle}>
            <SVGIcon component={<PriceLabel />} disabled={true} />
            <AppText style={styles.labelText}>{'Best price'}</AppText>
          </View>
        </View>
      </View>
      <View style={styles.bottomInterface}>
        <AppText style={styles.note}>{'To transfer your prescription:'}</AppText>
        <CustomButton
          style={styles.firstBtnCustomStyle}
          titleTextStyle={styles.buttonLabelStyle}
          title={'Call the pharmacy'}
          onPress={props.firstButtonOnPress}
        />
        <CustomButton
          onPress={props.secondButtonOnPress}
          title={'Call your health strategist'}
          style={styles.secondBtnCustomStyle}
          titleTextStyle={styles.secondBtnLabelStyle}
        />
      </View>
    </View>
  );
};

export default memo(PrescriptionList);
