import React, { useState } from 'react';
import { SafeAreaView } from 'react-native';
import { SearchBar } from '../../../components';
import { styles } from './SearchBarScreenStyle';
const SearchBarScreen = () => {
  const [search, setSearch] = useState<string>('');

  const updateSearch = (search: string) => {
    setSearch(search);
  };
  const clearSearch = () => {
    setSearch('');
  };

  return (
    <SafeAreaView>
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
