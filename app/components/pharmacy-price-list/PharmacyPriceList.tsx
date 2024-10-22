import React from 'react';
import AppText from '../app-text/AppText';
import { Image, TouchableOpacity, View } from 'react-native';
import { Icons } from '../../assets';
import { styles } from './PharmacyPriceListStyle';
import { PharmacyDetails } from '../../types';

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
        <Image source={Icons.chevronRight} style={styles.navigationArrow} />
      </View>
    </TouchableOpacity>
  );
};
export default PharmacyPriceList;
