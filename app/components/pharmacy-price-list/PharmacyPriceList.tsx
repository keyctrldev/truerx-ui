import React from 'react';
import AppText from '../app-text/AppText';
import { Image, TouchableOpacity, View } from 'react-native';
import { styles } from './PharmacyPriceListStyle';
import { PharmacyDetails } from '../../types';
import { ChevronRight } from '../../assets/svgs';
import { SVGIcon } from '../common';

const PharmacyPriceList = ({
  pharmacyLogo,
  pharmacyName,
  pharmacyDistance,
  price,
  additionalPriceStyle,
  onPress,
}: PharmacyDetails) => {
  return (
    <TouchableOpacity style={styles.pharmacyItem} onPress={onPress}>
      <View style={styles.pharmacy}>
        <Image source={pharmacyLogo} style={styles.pharmacyLogo} />
        <View style={styles.pharmacyDetails}>
          <AppText style={styles.pharmacyName}>{pharmacyName}</AppText>
          <AppText style={styles.pharmacyDistance}>{pharmacyDistance}</AppText>
        </View>
      </View>

      <View style={styles.priceDetails}>
        <AppText style={[styles.price, additionalPriceStyle]}>${price}</AppText>
        <SVGIcon component={<ChevronRight />} />
      </View>
    </TouchableOpacity>
  );
};
export default PharmacyPriceList;
