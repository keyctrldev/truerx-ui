import React, { useState } from 'react';
import { View } from 'react-native';
import { Icon, Searchbar } from 'react-native-paper';
import './SearchBarStyle';
import { styles } from './SearchBarStyle';
import { Colors } from '../../theme';
import { SearchBarProps } from '../../types';

const SearchBar = ({ value, placeHolder, onChangeText, iconName, size }: SearchBarProps) => {
  return (
    <View style={styles.searchContainer}>
      <Searchbar
        onChangeText={onChangeText}
        value={value}
        placeholder={placeHolder}
        placeholderTextColor={Colors.darkGrey}
        iconColor={Colors.darkGrey}
        icon={() => <Icon source={iconName} size={size} />}
        inputStyle={styles.input}
        style={styles.searchBar}
      />
    </View>
  );
};
export default SearchBar;
