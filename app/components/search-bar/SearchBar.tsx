import React, { useState } from 'react';
import { View } from 'react-native';
import { Searchbar } from 'react-native-paper';
import './SearchBarStyle';
import { styles } from './SearchBarStyle';
import { Colors } from '../../theme';
import AppText from '../app-text/AppText';
import { SVGIcon } from '../common';
import { LocationPointIcon } from '../../assets/svgs';

interface SearchLocation {
  location: string;
}

const SearchBar = ({ location }: SearchLocation) => {
  const [search, setSearch] = useState<string>('');
  const updateSearch = (search: string) => {
    setSearch(search);
  };
  return (
    <View style={styles.searchContainer}>
      <Searchbar
        onChangeText={updateSearch}
        value={search}
        placeholder="Search For Pharmacy"
        placeholderTextColor={Colors.darkGrey}
        iconColor={Colors.darkGrey}
        inputStyle={styles.input}
        style={styles.searchBar}
      />
      {search && (
        <View style={styles.locationContainer}>
          <AppText style={styles.location}>Show Best Prices in:</AppText>
          <SVGIcon component={<LocationPointIcon />} />
          <AppText style={styles.location}>{location}</AppText>
        </View>
      )}
    </View>
  );
};
export default SearchBar;
