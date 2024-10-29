import React, { memo } from 'react';
import { TextInput, View } from 'react-native';
import './SearchBarStyle';
import { styles } from './SearchBarStyle';
import { Colors } from '../../theme';
import { SearchBarProps } from '../../types';
import { SVGIcon } from '../common';
import { CloseIcon, SearchIcon } from '../../assets/svgs';

const SearchBar = ({ value, placeHolder, onChangeText, containerStyle, clearSearch }: SearchBarProps) => {
  return (
    <View style={[styles.searchBar, containerStyle]}>
      <SVGIcon component={<SearchIcon />} disabled />
      <TextInput
        onChangeText={onChangeText}
        value={value}
        placeholder={placeHolder}
        placeholderTextColor={Colors.darkGrey}
        style={styles.input}
      />
      {value.length > 0 && <SVGIcon component={<CloseIcon />} onPress={clearSearch} />}
    </View>
  );
};
export default memo(SearchBar);
