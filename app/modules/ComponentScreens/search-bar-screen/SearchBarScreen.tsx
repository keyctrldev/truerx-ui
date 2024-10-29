import React, { useState } from 'react';
import { SafeAreaView } from 'react-native';

import { StackNavigationProp } from '@react-navigation/stack';
import { ParamListBase, useNavigation } from '@react-navigation/native';

import { styles } from './SearchBarScreenStyle';
import { CustomBackButton, SearchBar } from '../../../components';

const SearchBarScreen = () => {
  const [search, setSearch] = useState<string>('');
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  const handleBackPress = () => {
    navigation.goBack();
  };

  const updateSearch = (search: string) => {
    setSearch(search);
  };
  const clearSearch = () => {
    setSearch('');
  };

  return (
    <SafeAreaView>
      <CustomBackButton onBackPress={handleBackPress} />
      <SearchBar
        placeHolder="Search For Pharmacy"
        value={search}
        onChangeText={updateSearch}
        containerStyle={styles.searchContainer}
        clearSearch={clearSearch}
      />
    </SafeAreaView>
  );
};
export default SearchBarScreen;
