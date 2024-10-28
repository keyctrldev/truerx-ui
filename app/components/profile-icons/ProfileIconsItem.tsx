import React, { memo } from 'react';
import { Image, Text, View } from 'react-native';
import { styles } from './ProfileIconsItemStyles';
import { ProfileIconsItemProps } from '../../types';

const ProfileIconsItem = (props: ProfileIconsItemProps) => {
  const { profileIcon, firstName, lastName, isFirstItem } = props;

  return profileIcon ? (
    <Image source={{ uri: profileIcon }} style={[styles.profileIconStyles, isFirstItem && styles.firstIconStyle]} />
  ) : (
    <View style={[styles.fallbackIconContainer, isFirstItem && styles.firstIconStyle]}>
      <Text style={styles.fallbackText}>{firstName && lastName ? firstName.charAt(0) + lastName.charAt(0) : ''}</Text>
    </View>
  );
};

export default memo(ProfileIconsItem);
