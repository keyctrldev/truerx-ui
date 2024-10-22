import React from 'react';
import AppText from '../app-text/AppText';
import { Image, View } from 'react-native';
import { Icons } from '../../assets';
import { styles } from './PharmacyPriceListStyle';
import { PharmacyDetails } from '../../types';

const PharmacyPriceList = ({ pharmacyLogo, pharmacyName, pharmacyDistance, price }: PharmacyDetails) => {
  return (
    <View style={styles.pharmacyItem}>
      <View style={styles.pharmacy}>
        <Image source={pharmacyLogo} style={styles.pharmacyLogo} />
        <View style={styles.pharmacyDetails}>
          <AppText style={styles.pharmacyName}>{pharmacyName}</AppText>
          <AppText style={styles.pharmacyDistance}>{pharmacyDistance}</AppText>
        </View>
      </View>

      <View style={styles.priceDetails}>
        <AppText style={styles.price}>${price}</AppText>
        <Image source={Icons.chevronRight} style={styles.navigationArrow} />
      </View>
    </View>
  );
};
export default PharmacyPriceList;
